import { repoName } from './repoName.js';

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