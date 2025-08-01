# Repository Name Import

## Rule: Always import `repoName` from the JavaScript file

When you need to use the repository name in your code, always import the `repoName` constant from `lib/repoName.js` instead of defining it directly in your files. This ensures consistency across the codebase and allows both JavaScript and TypeScript files to access the same value.

**Important:** The value of `repoName` will change as you continue to build your application. The current value "GameJamAITemplate" is just a placeholder and should be updated to match your actual repository name when you deploy your project.

## Why This Is Important

This project uses a mix of JavaScript and TypeScript files, including Next.js configuration files that are processed in a JavaScript context. 

Without a shared JavaScript source for the repository name:
- TypeScript files can't be directly imported in JavaScript contexts
- Changes to the repository name would need to be made in multiple places
- TypeScript errors may occur when building the project

Using a dedicated JavaScript file for the repository name ensures compatibility across all file types and maintains a single source of truth.

## Correct Usage

```javascript
// In JavaScript files (like next.config.js)
import { repoName } from './lib/repoName.js';

const config = {
  basePath: `/${repoName}`,
  // other configuration
};
```

```typescript
// In TypeScript files (like utils.ts)
import { repoName } from './repoName.js';

export function getAssetPath(path: string): string {
  // ...
  const basePath = `/${repoName}`;
  return `${basePath}${normalizedPath}`;
}
```

## Incorrect Usage

```javascript
// DON'T define repoName directly in JavaScript files
const repoName = 'GameJamAITemplate'; // ❌ Creates duplication

// DON'T import from TypeScript files in JavaScript contexts
import { repoName } from './lib/utils.ts'; // ❌ Will cause TypeScript errors
```

```typescript
// DON'T define repoName directly in TypeScript files
export const repoName = 'GameJamAITemplate'; // ❌ Creates duplication
```

## Implementation Details

The repository name is defined in `lib/repoName.js`:

```javascript
/**
 * Repository name used for GitHub Pages deployment
 * This file is imported by both utils.ts and next.config.js/next.config.prod.js
 */
export const repoName = 'GameJamAITemplate';
```

This file is then imported by:

1. `lib/utils.ts` for use in the `getAssetPath` function
2. `next.config.prod.js` for configuring the base path and asset prefix

## When Changing the Repository Name

When you're ready to deploy your own project (not using the GameJamAITemplate name):

1. Update the repository name only in `lib/repoName.js`
2. All files that import this constant will automatically use the new value
3. Run the build process to ensure everything works correctly

This is a critical step before deployment, as the repository name determines the base path for your application on GitHub Pages. The value should match your actual GitHub repository name.

Following this rule ensures that your application maintains consistency and avoids TypeScript errors when building the project.