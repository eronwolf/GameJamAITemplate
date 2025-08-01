# GitHub Pages Deployment Guide

This guide explains how to deploy your Next.js application to GitHub Pages using this template.

## Understanding GitHub Pages Deployment

GitHub Pages hosts your site from a specific branch (usually `gh-pages`) and serves it at a URL like:
```
https://username.github.io/repository-name/
```

This template is pre-configured to handle the specific requirements of GitHub Pages deployment, including:

1. Proper asset path handling for the subdirectory structure
2. Static HTML export configuration
3. Preventing Jekyll processing with `.nojekyll`

## Deployment Steps

### 1. Update Repository Name

Before deploying, update the repository name in `lib/repoName.js`:

```javascript
export const repoName = 'your-actual-repository-name';
```

This ensures that all asset paths and links will work correctly when deployed.

### 2. Build the Application for Production

Run the production build command:

```bash
npm run build
```

This command:
- Uses the production configuration from `next.config.prod.js`
- Generates static HTML files in the `out` directory
- Configures asset paths with the correct base path

### 3. Deploy to GitHub Pages

#### GitHub Actions

This template includes a GitHub Actions workflow file at `.github/workflows/ghp-release-test.yaml` that handles deployment to GitHub Pages:

```yaml
name: Create • Build • Deploy Version Branch → GH Pages

on:
  workflow_dispatch:

permissions:
  contents: write

jobs:
  create-build-deploy:
    runs-on: ubuntu-latest

    steps:
      # 1. Checkout the branch that triggered the workflow
      - name: Checkout current branch
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      # 2. Compute next integer version & branch name
      - name: Compute next version
        id: version
        run: |
          # list remote heads matching version-*
          versions=$(git ls-remote --heads origin 'refs/heads/version-*' \
            | awk '{print $2}' \
            | sed 's|refs/heads/version-||' \
            | sort -n)
          echo "Found versions: $versions"

          if [ -z "$versions" ]; then
            next=1
          else
            max=$(echo "$versions" | tail -n1)
            next=$((max + 1))
          fi

          echo "next_version=$next" >> $GITHUB_OUTPUT
          echo "branch=version-$next" >> $GITHUB_OUTPUT

      # 3. Create the new branch from the current commit
      - name: Create version branch
        uses: actions/github-script@v6
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          script: |
            const branch = '${{ steps.version.outputs.branch }}';
            
            // Create the new branch from the current commit SHA
            await github.rest.git.createRef({
              owner: context.repo.owner,
              repo:  context.repo.repo,
              ref:   `refs/heads/${branch}`,
              sha:   context.sha
            });

      # 4. Build your React app (using the already checked out code)
      - name: Install & build
        run: |
          yarn install
          yarn run build

      # 5. Deploy to GH Pages
      - name: Deploy to gh-pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: ./out
          force_orphan: true
```

This workflow:

1. Is triggered manually via the GitHub Actions interface (workflow_dispatch)
2. Creates a new version branch (e.g., version-1, version-2) from the current commit
3. Installs dependencies and builds the application
4. Deploys the built files to the gh-pages branch

To use this workflow:

1. Go to your GitHub repository
2. Navigate to the "Actions" tab
3. Select the "Create • Build • Deploy Version Branch → GH Pages" workflow
4. Click "Run workflow" and select the branch you want to deploy

### 4. Configure GitHub Repository Settings

1. Go to your GitHub repository
2. Navigate to Settings > Pages
3. Ensure the source is set to the `gh-pages` branch
4. Check that your site is published at the correct URL

## Verifying Deployment

After deployment, your site should be available at:
```
https://username.github.io/repository-name/
```

Check that:
- All pages load correctly
- Images and other assets display properly
- Links work as expected

If you encounter any issues with images or assets, ensure you're using the `getAssetPath` utility function as described in the [Asset Management](asset-management.md) guide.

## Troubleshooting

### Images Not Loading

If images aren't loading in the deployed site:

1. Ensure you're using the `getAssetPath` utility for all image paths
2. Verify that the repository name in `lib/repoName.js` matches your actual GitHub repository name
3. Check that the `.nojekyll` file exists in your `public` directory

### 404 Errors on Page Refresh

GitHub Pages doesn't natively support client-side routing. To handle this:

1. Consider using hash-based routing for client-side navigation
2. Or create a custom 404.html page that redirects to the correct route

### Build Errors

If you encounter build errors:

1. Ensure all dependencies are installed: `npm install`
2. Check that your Next.js version is compatible with the static export feature
3. Verify that all environment variables are properly set

## Additional Resources

- [Next.js Static Export Documentation](https://nextjs.org/docs/advanced-features/static-html-export)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)