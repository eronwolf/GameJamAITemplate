# Image Asset Paths

## Rule: Always use `getAssetPath` for image paths

When adding images to your application, always use the `getAssetPath` utility function from `lib/utils.ts` to ensure that image paths work correctly in both development and production environments.

## Why This Is Important

This project is configured to be deployed to GitHub Pages, which serves the application from a subdirectory (example: `/GameJamAITemplate`) rather than the root path. 

Without proper path handling:
- Images will load correctly in development (localhost)
- Images will fail to load in production (GitHub Pages)

The `getAssetPath` function automatically adds the correct base path prefix in production environments while keeping paths simple in development.

## Correct Usage

```typescript
// Import the utility function
import { getAssetPath } from '../lib/utils';

// Use the function for image paths
const imagePath = getAssetPath('/cat.png');

// Use with Next.js Image component
<Image 
  src={getAssetPath('/cat.png')} 
  alt="Cat" 
  width={100} 
  height={100} 
/>
```

## Incorrect Usage

```typescript
// DON'T use absolute paths directly
const imagePath = '/cat.png';  // ❌ Will break in production

// DON'T use relative paths without getAssetPath
<Image 
  src="/cat.png"  // ❌ Will break in production
  alt="Cat" 
  width={100} 
  height={100} 
/>
```

## Implementation Details

The `getAssetPath` function is implemented in `lib/utils.ts`:

```typescript
/**
 * Utility function to get the correct path for assets based on the environment
 * @param path The path to the asset (should start with '/')
 * @returns The correct path with basePath prefix if needed
 */
export function getAssetPath(path: string): string {
  // Make sure path starts with '/'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // In development, we don't need the basePath
  if (process.env.NODE_ENV === 'development') {
    return normalizedPath;
  }
  
  // In production, we need to add the basePath
  // The basePath is defined in next.config.prod.js as '/GameJamAITemplate'
  const basePath = `/${repoName}`;
  return `${basePath}${normalizedPath}`;
}
```

## Configuration

The repository name is defined in `lib/repoName.js`:

```javascript
/**
 * Repository name used for GitHub Pages deployment
 * This file is imported by both utils.ts and next.config.prod.js
 */
export const repoName = 'GameJamAITemplate';
```

**Important:** The value of `repoName` will change as you continue to build your application. The current value "GameJamAITemplate" is just a placeholder and should be updated to match your actual repository name when you deploy your project.

The base path is configured in `next.config.prod.js` using this imported value:

```javascript
import { repoName } from './lib/repoName.js';

const nextConfig = {
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  // ... other configuration
};
```

## When Adding New Images

1. Place your image files in the `public` directory
2. Reference them using `getAssetPath('/your-image.png')`
3. Always include the leading slash in the path

Following this rule ensures that your application will work correctly in all environments.