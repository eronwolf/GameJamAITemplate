# Asset Management

This guide explains how to properly handle assets (images, fonts, etc.) in this Next.js GitHub Pages template.

## The Challenge with GitHub Pages

When deploying to GitHub Pages, your application is served from a subdirectory path:

```
https://username.github.io/repository-name/
```

This creates a challenge for asset paths:

- In development, assets are served from the root path (`/`)
- In production, assets need to be served from a base path (`/repository-name/`)

If you use absolute paths directly (like `/image.png`), they will work in development but break in production.

## The Solution: `getAssetPath` Utility

This template includes a utility function called `getAssetPath` that automatically handles this difference between environments:

```typescript
import { getAssetPath } from '../lib/utils';

// Use the function for image paths
const imagePath = getAssetPath('/cat.png');
```

## How to Use Assets

### Adding Images

1. Place your image files in the `public` directory
2. Reference them using the `getAssetPath` utility function

### Example with Next.js Image Component

```tsx
import Image from 'next/image';
import { getAssetPath } from '../lib/utils';

export default function MyComponent() {
  return (
    <Image
      src={getAssetPath('/my-image.png')}
      alt="Description"
      width={100}
      height={100}
    />
  );
}
```

### Example with CSS Background Images

```tsx
import styles from './MyComponent.module.css';
import { getAssetPath } from '../lib/utils';

export default function MyComponent() {
  // Create a style object with the correct path
  const style = {
    backgroundImage: `url(${getAssetPath('/background.jpg')})`,
  };

  return <div style={style} className={styles.container}></div>;
}
```

### Example with Regular HTML Tags

```tsx
import { getAssetPath } from '../lib/utils';

export default function MyComponent() {
  return <img src={getAssetPath('/logo.png')} alt="Logo" />;
}
```

## Common Mistakes to Avoid

### ❌ Using Absolute Paths Directly

```tsx
// DON'T do this
<img src="/logo.png" alt="Logo" />
```

### ❌ Using Relative Paths Without getAssetPath

```tsx
// DON'T do this
<img src="logo.png" alt="Logo" />
```

### ❌ Hardcoding the Repository Name

```tsx
// DON'T do this
<img src="/GameJamAITemplate/logo.png" alt="Logo" />
```

## How It Works

The `getAssetPath` function is implemented in `lib/utils.ts`:

```typescript
import { repoName } from './repoName.js';

export function getAssetPath(path: string): string {
  // Make sure path starts with '/'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // In development, we don't need the basePath
  if (process.env.NODE_ENV === 'development') {
    return normalizedPath;
  }
  
  // In production, we need to add the basePath
  const basePath = `/${repoName}`;
  return `${basePath}${normalizedPath}`;
}
```

It:
1. Normalizes the path to ensure it starts with a slash
2. In development, returns the path as-is
3. In production, prefixes the path with the repository name

## Supported Asset Types

You can use `getAssetPath` with any type of asset stored in the `public` directory:

- Images (PNG, JPG, SVG, GIF, etc.)
- Fonts
- Videos
- Audio files
- JSON data files
- Any other static assets

## Updating the Repository Name

When you deploy your own project, you'll need to update the repository name in `lib/repoName.js`:

```javascript
export const repoName = 'your-actual-repository-name';
```

This ensures that all asset paths will work correctly in your deployed application.

## Best Practices

1. **Always use `getAssetPath`** for any assets in the `public` directory
2. **Include the leading slash** in the path you pass to `getAssetPath`
3. **Keep all static assets** in the `public` directory
4. **Update the repository name** before deployment
5. **Test your application** in both development and production builds

By following these guidelines, your assets will work correctly in both development and production environments.