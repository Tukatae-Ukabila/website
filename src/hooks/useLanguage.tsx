import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'sw';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, section: string) => any;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('sw');
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'sw'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    loadTranslations();
  }, [language]);

  const loadTranslations = async () => {
    setIsLoading(true);
    try {
      const [hero, timeline, unity, resources, effects] = await Promise.all([
        import(`../content/locales/${language}/hero.json`),
        import(`../content/locales/${language}/timeline.json`),
        import(`../content/locales/${language}/unity.json`),
        import(`../content/locales/${language}/resources.json`),
        import(`../content/locales/${language}/effects.json`)
      ]);

      setTranslations({
        hero: hero.default,
        timeline: timeline.default,
        unity: unity.default,
        resources: resources.default,
        effects: effects.default
      });
    } catch (error) {
      console.error('Failed to load translations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const t = (key: string, section: string) => {
    const keys = key.split('.');
    let value = translations[section];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};