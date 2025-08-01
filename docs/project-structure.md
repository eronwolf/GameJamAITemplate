# Project Structure

This document explains the organization of the Next.js GitHub Pages Template, helping you understand where to find and modify different parts of the application.

## Directory Structure

```
/
├── .devcontainer/         # Development container configuration
├── .kilocode/             # Project rules and guidelines
│   └── rules/             # Specific coding rules
├── app/                   # Next.js App Router files
│   ├── globals.css        # Global CSS styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # Reusable React components
│   ├── Button.js          # Button component
│   ├── Button.module.css  # Button component styles
│   └── ClickCount.js      # Click counter component
├── docs/                  # Documentation files
├── lib/                   # Utility functions and shared code
│   ├── repoName.js        # Repository name configuration
│   └── utils.ts           # Utility functions (including getAssetPath)
├── prisma/                # Database schema and migrations (if using Prisma)
├── public/                # Static assets (images, fonts, etc.)
│   ├── .nojekyll          # Prevents GitHub Pages from using Jekyll
│   └── cat.png/jpg        # Example images
├── styles/                # Global and page-specific styles
│   └── home.module.css    # Home page styles
├── next.config.js         # Next.js configuration
├── next.config.dev.js     # Development-specific configuration
├── next.config.prod.js    # Production-specific configuration
├── package.json           # Project dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## Key Files Explained

### Configuration Files

- **next.config.js**: The main Next.js configuration file used in development.
- **next.config.prod.js**: Production configuration with GitHub Pages-specific settings.
- **next.config.dev.js**: Development-specific configuration.
- **lib/repoName.js**: Contains the repository name used for GitHub Pages deployment paths.
- **tsconfig.json**: TypeScript configuration for the project.
- **.nojekyll**: Empty file that prevents GitHub Pages from processing the site with Jekyll.

### Application Files

- **app/page.tsx**: The main page component of the application, demonstrating Fast Refresh and image handling.
- **app/layout.tsx**: The root layout component that wraps all pages.
- **app/globals.css**: Global CSS styles applied to the entire application.

### Components

- **components/Button.js**: A reusable button component.
- **components/ClickCount.js**: A component that demonstrates state management with a click counter.

### Utilities

- **lib/utils.ts**: Contains utility functions, including `getAssetPath` for handling asset paths in different environments.
- **lib/repoName.js**: Exports the repository name as a constant for use throughout the application.

### Styles

- **styles/home.module.css**: CSS modules for the home page.
- **components/Button.module.css**: CSS modules for the Button component.

### Project Rules

- **.kilocode/rules/**: Contains markdown files with project-specific rules and guidelines.
- **.kilocode/rules/image-asset-paths.md**: Guidelines for handling image paths.
- **.kilocode/rules/repo-name-import.md**: Guidelines for importing the repository name.

## Understanding the App Structure

This template uses Next.js with the App Router, which follows a file-system based routing approach:

- **app/page.tsx**: Defines the main page component for the root route (/).
- **app/layout.tsx**: Defines the shared layout for all pages.

## Where to Add New Features

When adding new features to your application:

1. **New Pages**: Add new page components in the `app` directory.
2. **New Components**: Add reusable components in the `components` directory.
3. **New Styles**: Add global styles to `app/globals.css` or create new CSS modules in the `styles` directory.
4. **New Assets**: Add images and other static assets to the `public` directory.
5. **New Utilities**: Add utility functions to the `lib` directory.

## Important Conventions

1. **Asset Paths**: Always use the `getAssetPath` utility function from `lib/utils.ts` when referencing assets.
2. **Repository Name**: Always import the `repoName` constant from `lib/repoName.js` when needed.
3. **CSS Modules**: Use CSS modules for component-specific styles to avoid style conflicts.