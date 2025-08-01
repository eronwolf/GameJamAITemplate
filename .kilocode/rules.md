# KiloCode Rules

This document provides an overview of all the rules defined for this project.

## Image Assets

- [Image Asset Paths](.kilocode/rules/image-asset-paths.md) - Always use `getAssetPath` for image paths to ensure they work correctly in both development and production environments.

## Configuration

- [Repository Name Import](.kilocode/rules/repo-name-import.md) - Always import `repoName` from the JavaScript file to ensure compatibility between JavaScript and TypeScript files.

## Adding New Rules

When adding new rules to the project:

1. Create a new markdown file in the `.kilocode/rules/` directory
2. Add a link to the new rule in this file
3. Make sure the rule is clear, concise, and includes examples of correct and incorrect usage