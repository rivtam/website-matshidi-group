# Quick Redeploy Guide

After adding your logo and favicon, follow these steps to redeploy:

## Step 1: Add Your Images

1. **Logo**: Save your logo as `src/assets/matshidi-logo.png`
2. **Favicon**: Save favicon as `public/favicon.ico`
   - Use https://favicon.io/favicon-converter/ to convert your logo to favicon

## Step 2: Rebuild the Application

```bash
npm run build
```

## Step 3: Upload to HostKing

### Option A: Re-upload via File Manager
1. Go to DirectAdmin File Manager
2. Navigate to `/home/obmjxwcj/domains/matshidigroup.com/public_html/app/`
3. Delete the old `server` and `public` folders
4. Upload the new `.output/server` and `.output/public` folders from your local build

### Option B: Upload Only Changed Files
1. Navigate to File Manager
2. Go to `/home/obmjxwcj/domains/matshidigroup.com/public_html/app/public/assets/`
3. Upload the new logo image files from `.output/public/assets/`
4. Replace `/home/obmjxwcj/domains/matshidigroup.com/public_html/app/public/favicon.ico`

## Step 4: Restart Node.js App

1. Go to DirectAdmin → Node.js
2. Click **RESTART** on your MainWebsiteM app
3. Wait a few seconds for the app to reload

## Step 5: Clear Browser Cache

- Press `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac) to hard refresh
- Or open in incognito/private mode

Your logo and favicon should now appear!

## Troubleshooting

### Logo still not showing:
- Check that `src/assets/matshidi-logo.png` exists
- Verify the build completed without errors
- Check browser console for 404 errors

### Favicon not showing:
- Favicons are cached aggressively by browsers
- Try different browsers or clear all cache
- Wait a few minutes as browsers cache favicons for hours
