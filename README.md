# Next.js GitHub Pages Template

Welcome to the Next.js GitHub Pages Template! This template provides a ready-to-use Next.js application configured for seamless deployment to GitHub Pages.

## Features

- **Pre-configured for GitHub Pages** - Ready to deploy with minimal setup
- **Asset Path Management** - Ensures assets work in both development and production
- **Fast Refresh Demo** - Demonstrates Next.js Fast Refresh feature
- **Centralized Configuration** - Single source of truth for repository name
- **Developer-Friendly** - Includes best practices and guidelines

## Quick Start

To run this application locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

## Documentation

Comprehensive documentation is available in the [docs](docs/index.md) directory:

- [Overview](docs/overview.md) - General introduction to the template
- [Getting Started](docs/getting-started.md) - Guide for new users
- [Project Structure](docs/project-structure.md) - Explanation of the file structure
- [Asset Management](docs/asset-management.md) - How to handle assets
- [GitHub Pages Deployment](docs/github-pages-deployment.md) - Deployment guide
- [FAQ](docs/faq.md) - Common questions and answers

## For Engineers

If you're an engineer working with this template, check out:

- [Project Structure](docs/project-structure.md) - Understand the codebase organization
- [Asset Management](docs/asset-management.md) - Learn about the asset path handling system
- [GitHub Pages Deployment](docs/github-pages-deployment.md) - Detailed deployment instructions

## For Non-Engineers

If you're not familiar with coding, these guides will help you get started:

- [Getting Started](docs/getting-started.md) - Basic setup and customization
- [FAQ](docs/faq.md) - Answers to common questions

## Important Note

Before deploying, update the repository name in `lib/repoName.js`:

```javascript
export const repoName = 'your-actual-repository-name';
```

This ensures that all asset paths and links will work correctly when deployed.

## License

This template is available under the MIT License. Feel free to use it for your projects.
