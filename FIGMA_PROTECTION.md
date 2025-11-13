# Protection Against Figma Updates

This repository has multiple layers of protection to prevent Figma updates from breaking the build configuration.

## Problem

When Figma pushes updates via "Make", it can overwrite `vite.config.ts` and revert the `outDir` from `'dist'` back to `'build'`, causing Vercel deployments to fail.

## Solutions in Place

### 1. ✅ `vercel.json` (Primary Protection)

The `vercel.json` file explicitly tells Vercel to use the `dist` directory:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

**This ensures Vercel always works, even if `vite.config.ts` is reverted.**

### 2. ✅ Git Post-Merge Hook (Automatic Fix)

A git hook automatically fixes `vite.config.ts` after merging Figma updates.

#### Setup (One-time per environment):

```bash
./setup-hooks.sh
```

Or manually:
```bash
chmod +x .git/hooks/post-merge
```

#### What it does:

- Detects when `vite.config.ts` is modified in a merge
- Checks if `outDir` was changed to `'build'`
- Automatically fixes it to `'dist'`
- Commits the fix

### 3. Alternative: Exclude Files in Figma

Configure your Figma "Make" integration to exclude:
- `vite.config.ts`
- `vercel.json`
- `.gitignore`
- `package.json`

## Quick Fix (Manual)

If a Figma update breaks the build:

1. **Edit `vite.config.ts`:**
   ```typescript
   build: {
     target: 'esnext',
     outDir: 'dist',  // Change from 'build' to 'dist'
   }
   ```

2. **Commit and push:**
   ```bash
   git add vite.config.ts
   git commit -m "Fix: Restore dist output directory"
   git push origin main
   ```

## Verification

After any merge, check:
```bash
grep "outDir" vite.config.ts
```

Should show: `outDir: 'dist',`

## Summary

With `vercel.json` in place, **Vercel deployments should work even if Figma reverts the vite config**. The git hook provides an additional safety net for automatic fixes.
