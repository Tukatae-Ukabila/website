import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/hooks/useLanguage";
import { Globe } from "lucide-react";
import SocialShare from "@/components/SocialShare";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { value: 'sw', label: 'Kiswahili' },
    { value: 'en', label: 'English' }
  ];

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
      <SocialShare 
        title="Tukatae Ukabila - Unity in Kenya"
        text="Learn how every Kenyan can stop tribal politics and build justice for all"
        hashtags={["TukataeUkabila", "KenyaUnity", "Peace"]}
        variant="outline"
        size="icon"
        className="bg-white/90 backdrop-blur-sm border-primary/20 hover:bg-white hover:border-primary/40"
      />
      <Select value={language} onValueChange={(value: 'sw' | 'en') => setLanguage(value)}>
        <SelectTrigger className="w-[140px] bg-white/90 backdrop-blur-sm border-primary/20 hover:bg-white hover:border-primary/40">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <SelectValue />
          </div>
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.value} value={lang.value}>
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageToggle;