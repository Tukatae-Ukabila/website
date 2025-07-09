# Tukatae Ukabila - Kenya for All Tribes

## Project info

A website promoting unity and justice in Kenya by providing evidence-based solutions to overcome ethnic divisions and build lasting peace.

## How can I edit this code?

**Use your preferred IDE**

Clone this repo and push changes to contribute to the project.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

This project can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

Build the project with:
```sh
npm run build
```

Then deploy the `dist` folder to your hosting service.

## Adding a New Language

The website supports multiple languages through a JSON-based translation system. Currently supports English (`en`) and Swahili (`sw`).

### Steps to Add a New Language:

1. **Create translation files**: Add a new folder in `src/content/locales/` with your language code (e.g., `fr` for French):
   ```
   src/content/locales/fr/
   ├── hero.json
   ├── timeline.json
   ├── unity.json
   ├── resources.json
   └── effects.json
   ```

2. **Translate content**: Copy the structure from existing language files and translate the values:
   ```json
   {
     "title": {
       "main": "Kenya Unie:",
       "highlight": "Au-delà des Divisions Ethniques"
     },
     "subtitle": "Célébrer notre diversité..."
   }
   ```

3. **Update language types**: In `src/hooks/useLanguage.tsx`, add your language code to the `Language` type:
   ```typescript
   type Language = 'en' | 'sw' | 'fr';
   ```

4. **Update language validation**: In the same file, add your language to the validation array:
   ```typescript
   if (savedLanguage && ['en', 'sw', 'fr'].includes(savedLanguage)) {
   ```

5. **Add to language selector**: In `src/components/LanguageToggle.tsx`, add your language option:
   ```typescript
   const languages = [
     { value: 'sw', label: 'Kiswahili' },
     { value: 'en', label: 'English' },
     { value: 'fr', label: 'Français' }
   ];
   ```

6. **Update translation loading**: In `useLanguage.tsx`, the dynamic imports will automatically work for your new language files.

### Translation File Structure:
Each language folder must contain these 5 JSON files with identical structure:
- `hero.json` - Homepage hero section
- `timeline.json` - Historical timeline content  
- `unity.json` - Unity section content
- `resources.json` - Resources and links
- `effects.json` - Effects and impact content

### Usage in Components:
```typescript
const { t } = useLanguage();
const title = t('title.main', 'hero'); // Accesses nested keys
```
