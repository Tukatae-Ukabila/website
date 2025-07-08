# Agent Guidelines for Tukatae Ukabila Website

## Build/Lint/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- No test framework configured

## Code Style Guidelines
- **Imports**: Use `@/` path alias for src imports, external imports first, then internal
- **Components**: Use default exports, PascalCase naming, functional components with arrow functions
- **Types**: Define interfaces with PascalCase, use TypeScript but relaxed rules (noImplicitAny: false)
- **Styling**: Tailwind CSS with custom variants (heritage, unity, primary), use `cn()` utility for class merging
- **State**: React hooks pattern, Context API for global state (see useLanguage hook)
- **Error Handling**: Console.error for logging, graceful fallbacks in UI
- **File Structure**: Components in `/components`, UI components in `/components/ui`, hooks in `/hooks`
- **Naming**: camelCase for variables/functions, kebab-case for files, PascalCase for components
- **Formatting**: 2-space indentation, semicolons, double quotes for strings

## Framework Stack
- React 18 + TypeScript + Vite
- Tailwind CSS + shadcn/ui components
- Radix UI primitives, React Router, React Hook Form + Zod