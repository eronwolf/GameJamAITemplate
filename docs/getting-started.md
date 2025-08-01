# Getting Started Guide

This guide will help you get up and running with the Next.js GitHub Pages Template. It's designed for both engineers and non-engineers to quickly set up and start developing.

## Prerequisites

Before you begin, make sure you have:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)
- A GitHub account

## Quick Start

### 1. Create a New Repository from the Template

1. Go to the template repository on GitHub
2. Click the "Use this template" button
3. Name your new repository
4. Click "Create repository from template"

### 2. Clone Your New Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

## Customizing the Template

### Update Repository Name

Before deploying, update the repository name in `lib/repoName.js`:

```javascript
export const repoName = 'your-repository-name';
```

### Modify the Home Page

Edit `app/page.tsx` to customize the home page content:

```tsx
// app/page.tsx
'use client'

import styles from '../styles/home.module.css'
import { getAssetPath } from '../lib/utils'

export default () => {
  return (
    <main className={styles.main}>
      <h1>My Awesome Project</h1>
      <p>Welcome to my project!</p>
      {/* Add your content here */}
    </main>
  );
}
```

### Add New Pages

Create new pages in the `app` directory:

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```

This will be accessible at `/about`.

### Add New Components

Create reusable components in the `components` directory:

```jsx
// components/Card.js
import styles from './Card.module.css'

export default function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
```

And the corresponding CSS module:

```css
/* components/Card.module.css */
.card {
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

### Add Images and Assets

1. Place image files in the `public` directory
2. Reference them using the `getAssetPath` utility:

```tsx
import Image from 'next/image'
import { getAssetPath } from '../lib/utils'

export default function MyComponent() {
  return (
    <Image
      src={getAssetPath('/my-image.png')}
      alt="My Image"
      width={300}
      height={200}
    />
  );
}
```

## Development Workflow

### Running in Development Mode

```bash
npm run dev
```

This starts the development server with:
- Hot reloading (changes appear instantly)
- Error reporting
- Development-specific configurations

### Building for Production

```bash
npm run build
```

This creates a production-ready build in the `out` directory.

## Deployment

When you're ready to deploy your site to GitHub Pages, follow the instructions in the [GitHub Pages Deployment Guide](github-pages-deployment.md).

## Working with the Template (For Non-Engineers)

If you're not familiar with coding, here are some simple ways to customize the template:

### Changing Text Content

1. Open `app/page.tsx`
2. Find the text between tags like `<h1>` and `</h1>` or `<p>` and `</p>`
3. Replace it with your own content
4. Save the file

### Changing Colors and Styles

1. Open `app/globals.css` or the specific CSS module file
2. Look for color values (like `#ffffff` or `rgb(0, 0, 0)`)
3. Replace them with your preferred colors
4. Save the file

### Adding Images

1. Add your image to the `public` directory
2. In your component or page file, import and use the `getAssetPath` utility
3. Use the image with the Next.js `Image` component as shown above

## Getting Help

If you encounter any issues or have questions:

1. Check the [FAQ](faq.md) for common questions and answers
2. Review the specific guides for [Asset Management](asset-management.md) and [GitHub Pages Deployment](github-pages-deployment.md)
3. Consult the [Next.js documentation](https://nextjs.org/docs)
4. Ask for help in the GitHub repository's Issues section

## Next Steps

- Learn more about the [Project Structure](project-structure.md)
- Understand how to properly [Manage Assets](asset-management.md)
- Explore the [Next.js documentation](https://nextjs.org/docs) for advanced features