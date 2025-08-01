# Frequently Asked Questions (FAQ)

This document answers common questions about the Next.js GitHub Pages Template.

## General Questions

### What is this template for?

This template is designed to make it easy to create and deploy Next.js applications to GitHub Pages. It includes pre-configured settings and utilities to handle the specific requirements of GitHub Pages deployment, such as asset path management and static HTML export.

### Who should use this template?

This template is ideal for:
- Developers building portfolio sites, project showcases, or documentation sites
- Teams working on hackathons or game jams who need quick deployment
- Non-technical users who want to create a web presence with minimal configuration
- Anyone who wants to deploy a Next.js application to GitHub Pages

### Is this template free to use?

Yes, this template is free to use. You can create as many projects from it as you like.

## Technical Questions

### What version of Next.js does this template use?

This template uses Next.js with the App Router, which was introduced in Next.js 13. Check the `package.json` file for the exact version.

### Does this template support TypeScript?

Yes, this template includes TypeScript support. You can write your components and utilities in either JavaScript or TypeScript.

### Can I use this template for a commercial project?

Yes, you can use this template for commercial projects. However, be sure to check the license of any third-party dependencies you add to your project.

### Does this template support server-side rendering (SSR)?

This template is configured for static site generation (SSG) because GitHub Pages only supports static files. Server-side rendering requires a server to run the Node.js code, which GitHub Pages doesn't support.

## Asset Management

### Why do I need to use `getAssetPath` for images?

GitHub Pages serves your site from a subdirectory (e.g., `/repository-name/`), which means that absolute paths like `/image.png` won't work in production. The `getAssetPath` utility automatically adds the correct base path in production while keeping paths simple in development.

### Where should I put my images and other assets?

Place all static assets (images, fonts, etc.) in the `public` directory. Then reference them using the `getAssetPath` utility function.

### Can I use SVG files with this template?

Yes, you can use SVG files just like any other image format. Place them in the `public` directory and reference them using the `getAssetPath` utility function.

## Deployment

### How do I deploy my site to GitHub Pages?

See the [GitHub Pages Deployment Guide](github-pages-deployment.md) for detailed instructions on deploying your site to GitHub Pages.

### How long does it take for changes to appear after deployment?

After pushing to the `gh-pages` branch, it typically takes a few minutes for GitHub Pages to build and deploy your site. You can check the status in the "GitHub Pages" section of your repository settings.

### Can I use a custom domain with this template?

Yes, you can use a custom domain with GitHub Pages. After setting up your custom domain in the GitHub repository settings, you'll need to update the `repoName` in `lib/repoName.js` to an empty string or adjust the `basePath` configuration accordingly.

### What if I want to deploy to a different hosting provider?

This template is optimized for GitHub Pages, but you can deploy it to any static site hosting provider. You may need to adjust the configuration based on the requirements of your chosen hosting provider.

## Customization

### How do I change the site's appearance?

You can customize the site's appearance by modifying the CSS files. Global styles are in `app/globals.css`, and component-specific styles are in their respective CSS modules.

### Can I add more pages to my site?

Yes, you can add as many pages as you need. Create new files in the `app` directory following the Next.js App Router conventions. See the [Getting Started Guide](getting-started.md) for examples.

### How do I add new components?

Create new component files in the `components` directory. You can use either JavaScript (`.js`) or TypeScript (`.tsx`) files. See the [Getting Started Guide](getting-started.md) for examples.

### Can I use other React libraries with this template?

Yes, you can use any React library that's compatible with Next.js. Install the library using npm and import it in your components as needed.

## Troubleshooting

### My images aren't showing up in the deployed site

Make sure you're using the `getAssetPath` utility function for all image paths. See the [Asset Management Guide](asset-management.md) for details.

### I'm getting build errors when I run `npm run build`

Check that all your dependencies are installed (`npm install`) and that your code doesn't have any syntax errors. Also, ensure that you're using the correct import paths for your components and utilities.

### My site works locally but not when deployed

This is often due to path issues. Make sure you're using the `getAssetPath` utility for all assets and that you've updated the repository name in `lib/repoName.js` to match your actual GitHub repository name.

### How do I fix 404 errors when refreshing pages?

GitHub Pages doesn't natively support client-side routing. You can either:
1. Use hash-based routing
2. Create a custom 404.html page that redirects to the correct route
3. Add a script to your index.html that redirects based on the URL

## Getting More Help

If your question isn't answered here, you can:

1. Check the other documentation files in the `docs` directory
2. Consult the [Next.js documentation](https://nextjs.org/docs)
3. Open an issue in the GitHub repository