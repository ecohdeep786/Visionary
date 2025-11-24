# Visionary Project Structure Documentation

## Overview
This project follows a **production-level, feature-based architecture** inspired by Google's engineering practices. The structure emphasizes scalability, maintainability, and clear separation of concerns.

---

## 📁 Directory Structure

```
src/
├── app/                    # Application entry point & root styles
│   ├── App.jsx            # Root component
│   ├── App.css            # App-specific styles
│   └── index.css          # (moved to styles/globals.css)
│
├── features/              # Feature modules (business logic)
│   ├── home/              # Home page feature
│   │   ├── components/    # Feature-specific components
│   │   │   ├── Hero.jsx
│   │   │   ├── PersonaGrid.jsx
│   │   │   ├── LearningJourney.jsx
│   │   │   ├── AutoRotatingCarousel.jsx
│   │   │   ├── ConnectedApps.jsx
│   │   │   ├── AIMentorSection.jsx
│   │   │   └── CTASection.jsx
│   │   ├── hooks/         # Feature-specific custom hooks
│   │   ├── services/      # Feature-specific API calls
│   │   ├── constants/     # Feature-specific constants
│   │   ├── types/         # Feature-specific TypeScript types
│   │   └── index.jsx      # Feature entry point
│   │
│   ├── students/          # Students feature
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── constants/
│   │   ├── types/
│   │   └── index.jsx
│   │
│   ├── educators/         # Educators feature
│   ├── professionals/     # Professionals feature
│   ├── parents/           # Parents feature
│   └── download/          # Download feature
│
├── components/            # Shared UI components
│   ├── ui/               # Base UI primitives (shadcn-style)
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── badge.jsx
│   │   ├── input.jsx
│   │   ├── dialog.jsx
│   │   ├── toaster.jsx
│   │   └── ... (50+ UI components)
│   │
│   ├── layout/           # Layout components
│   │   └── MainLayout.jsx  # Main wrapper layout
│   │
│   └── common/           # Commonly used components
│       ├── Toaster.jsx
│       ├── Modal.jsx
│       └── ...
│
├── hooks/                # Shared custom React hooks
│   ├── useMediaQuery.js
│   └── index.js
│
├── services/             # API & external services
│   ├── api.js           # API client configuration
│   ├── auth.service.js
│   ├── user.service.js
│   └── course.service.js
│
├── lib/                  # Utilities & helpers
│   ├── utils.js         # General utility functions (cn helper, etc.)
│   ├── validators.js    # Validation functions
│   ├── formatters.js    # Date/number formatting
│   └── constants.js     # Global constants
│
├── types/               # Shared TypeScript type definitions
│   ├── user.types.ts
│   ├── course.types.ts
│   ├── common.types.ts
│   ├── api.types.ts
│   └── index.ts
│
├── constants/           # Global application constants
│   ├── routes.js       # Application route paths
│   └── config.js       # Global configuration
│
├── config/              # Configuration files
│   ├── app.config.js   # App-level configuration
│   └── api.config.js   # API client configuration
│
├── contexts/            # React Context (global state)
│   └── index.jsx       # Context providers export
│
├── router/              # Routing logic
│   ├── index.jsx       # Main router setup
│   └── routes.jsx      # Route definitions
│
├── styles/              # Global styles
│   └── globals.css     # Global CSS variables & styles
│
├── middleware/          # Custom middleware
│   ├── errorBoundary.jsx
│   ├── logging.js
│   └── analytics.js
│
├── __tests__/          # Test files
│   ├── unit/           # Unit tests
│   ├── integration/    # Integration tests
│   └── e2e/            # End-to-end tests
│
└── main.jsx            # Vite entry point
```

---

## 🎯 Key Principles

### 1. **Feature-Based Architecture**
- Each feature (home, students, educators, etc.) is **self-contained**
- Contains its own components, hooks, services, constants, and types
- Easy to add/remove features without affecting other parts

### 2. **Separation of Concerns**
- **Components**: UI rendering only
- **Services**: API calls and business logic
- **Hooks**: Stateful logic reuse
- **Utils/Lib**: Pure helper functions
- **Types**: Type safety and IDE autocomplete

### 3. **Scalability**
- Add new features by creating a new folder in `src/features/`
- Share code via `src/components/`, `src/hooks/`, `src/lib/`
- Each feature can grow independently

### 4. **Testability**
- Clear structure makes testing strategy obvious
- `__tests__/` mirrors `src/` structure
- Easy to locate test files for any component/service

### 5. **Performance**
- Lazy-loaded feature components reduce initial bundle
- Tree-shaking friendly for optimal build output
- Better code-splitting opportunities

---

## 📊 File Import Patterns

### Importing from Features
```jsx
// Import a feature
import Home from '@/features/home';
import Students from '@/features/students';

// Import specific component from a feature
import Hero from '@/features/home/components/Hero';
```

### Importing from Shared Components
```jsx
// Import shared UI components
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Import layout
import MainLayout from '@/components/layout/MainLayout';
```

### Importing from Utilities
```jsx
// Import utilities
import { cn } from '@/lib/utils';
import { validateEmail } from '@/lib/validators';

// Import hooks
import { useMediaQuery } from '@/hooks';

// Import constants
import { ROUTES } from '@/constants/routes';
import appConfig from '@/config/app.config';
```

---

## 🔄 Feature Development Workflow

When building a new feature (e.g., `courses`):

```
1. Create feature folder: src/features/courses/
2. Create subfolders:
   - components/     (UI components for this feature)
   - hooks/          (Custom hooks specific to courses)
   - services/       (API calls for courses)
   - constants/      (Feature-specific constants)
   - types/          (Feature-specific TypeScript types)
3. Create index.jsx entry point
4. Export feature from router/routes.jsx
5. Add tests in src/__tests__/integration/features/courses/
```

---

## 🚀 Common Tasks

### Adding a New Page
1. Create `src/features/newpage/` folder
2. Add components in `src/features/newpage/components/`
3. Export from `src/features/newpage/index.jsx`
4. Update `src/router/routes.jsx`

### Adding a Shared Component
1. Create in `src/components/ui/` (if UI primitive) or `src/components/common/` (if commonly used)
2. Export from component index file
3. Import with `@/components/ui/...` or `@/components/common/...`

### Adding a Utility Function
1. Add to `src/lib/utils.js` or create specific file (`validators.js`, `formatters.js`)
2. Import with `@/lib/utils`

### Adding a Hook
1. Create in `src/hooks/`
2. Follow naming convention: `useYourHook.js`
3. Export from `src/hooks/index.js`

---

## 📝 TypeScript Types

All TypeScript type definitions are in `src/types/`:
- `user.types.ts` - User-related types
- `course.types.ts` - Course-related types
- `common.types.ts` - Common/shared types
- `api.types.ts` - API request/response types

Import types:
```ts
import type { User, UserRole } from '@/types/user.types';
import type { Course, Lesson } from '@/types/course.types';
```

---

## 🔐 Configuration

### App Configuration
- `src/config/app.config.js` - App-level settings (name, version, debug mode)
- `src/config/api.config.js` - API client configuration (base URL, timeout, headers)
- `src/constants/config.js` - Global constants

### Environment Variables
Use `.env` files for environment-specific values:
```
REACT_APP_API_URL=https://api.visionary.com
REACT_APP_ENV=production
```

---

## 🧪 Testing

Tests are organized in `src/__tests__/` mirroring the src structure:

```
src/__tests__/
├── unit/
│   ├── lib/
│   │   └── utils.test.js
│   └── hooks/
│       └── useMediaQuery.test.js
├── integration/
│   └── features/
│       └── home.test.jsx
└── e2e/
    └── home.e2e.js
```

---

## ✅ Best Practices

1. **Keep components small and focused** - Single responsibility principle
2. **Use feature-specific services** - Don't put all API calls in one file
3. **Lazy load heavy features** - Use React.lazy() for code splitting
4. **Type everything** - Use TypeScript for better developer experience
5. **Centralize constants** - Don't hardcode values
6. **Test behavior, not implementation** - Focus on what, not how
7. **Document complex logic** - Add comments for non-obvious code
8. **Follow naming conventions** - Consistent naming across the codebase

---

## 📚 Related Files

- **Router setup**: `src/router/index.jsx`
- **Main entry**: `src/main.jsx`
- **Vite config**: `/vite.config.js` (has @ alias setup)
- **TypeScript config**: `/jsconfig.json` (has @ alias for IDE)
- **Package.json scripts**: 
  - `npm run dev` - Start dev server
  - `npm run build` - Build for production
  - `npm run preview` - Preview production build
  - `npm run lint` - Run ESLint

---

## 🎓 Learning Resources

When adding features or modifying the structure:
1. Check existing features (home, students) as examples
2. Follow the pattern already established
3. Keep feature folders isolated
4. Use consistent naming conventions
5. Update this documentation when adding new patterns

---

*Last updated: November 24, 2025*
*Structure follows Google Engineering Best Practices*
