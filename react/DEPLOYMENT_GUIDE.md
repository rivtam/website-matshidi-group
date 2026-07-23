# HostKing Deployment Guide

## Prerequisites
- HostKing hosting account with Node.js support (✓ You have this!)
- FTP client (FileZilla) or use cPanel File Manager
- Your domain name ready

## Deployment Steps

### Step 1: Prepare Files for Upload
The build has been completed. You need to upload the `.output` folder to your hosting.

### Step 2: Upload Files to HostKing

**Option A: Using cPanel File Manager (Recommended)**
1. Log into your HostKing cPanel (DirectAdmin panel)
2. Go to "File Manager"
3. Navigate to your domain's directory (usually `public_html` or `domains/yourdomain.com`)
4. Create a new folder called `app` (or any name you prefer)
5. Upload the entire `.output` folder into this `app` folder
6. Your structure should look like:
   ```
   app/
   └── .output/
       ├── server/
       └── public/
   ```

**Option B: Using FTP**
1. Connect to your hosting via FTP using your FTP credentials
2. Navigate to `public_html` or your domain folder
3. Create a folder called `app`
4. Upload the `.output` folder into `app`

### Step 3: Configure Node.js Application in cPanel

1. In your cPanel/DirectAdmin, click on **"Setup Node.js App"**
2. Click **"Create Application"** or **"Add Application"**
3. Fill in the following details:

   - **Node.js Version**: Select latest stable version (18.x or 20.x recommended)
   - **Application Mode**: Production
   - **Application Root**: `/home/yourusername/public_html/app/.output/server`
     (Replace `yourusername` with your actual cPanel username)
   - **Application URL**: Your domain (e.g., `yourdomain.com`) or subdomain
   - **Application Startup File**: `index.mjs`
   - **Environment Variables**: (Click Add if available)
     - Name: `NITRO_PORT`
     - Value: The port assigned by your hosting (check the Node.js app panel)
     - Name: `NITRO_HOST`
     - Value: `0.0.0.0`

4. Click **"Save"** or **"Create"**

### Step 4: Install Dependencies

1. After creating the app, you should see an option to **"Run NPM Install"** or access a **Terminal**
2. Click on **"Run NPM Install"** or open the Terminal
3. Navigate to the server directory:
   ```bash
   cd /home/yourusername/public_html/app/.output/server
   npm install
   ```

### Step 5: Start the Application

1. In the Node.js App manager, click **"Start"** or **"Restart"**
2. The app should now be running

### Step 6: Configure Web Server (Important!)

You need to set up a reverse proxy so visitors can access your site:

1. In cPanel, go to **"Site Redirections"** or **"Apache/Nginx Configuration"**
2. If using DirectAdmin:
   - Go to **"Domain Setup"**
   - Click on your domain
   - Look for **"Proxy"** or **"Node.js" settings**
3. The hosting should automatically proxy requests from your domain to the Node.js app port

**If you need to manually configure:**
- The Node.js app runs on a specific port (e.g., 3000, 4000)
- Your web server (Apache/Nginx) needs to forward requests to this port
- HostKing usually does this automatically when you set the Application URL

### Step 7: Test Your Website

1. Open your browser and visit your domain
2. Your React website should now be live!

## Troubleshooting

### App won't start
- Check the error logs in Node.js App manager
- Ensure `npm install` completed successfully
- Verify the Application Startup File is `index.mjs`
- Check that the Application Root path is correct

### 502 Bad Gateway Error
- The Node.js app might not be running - restart it
- Check if the port configuration is correct
- Look at error logs for more details

### Static assets not loading
- Ensure the `public` folder is accessible
- Check that the web server is correctly configured to serve static files from `.output/public`

### Need to update the site
1. Build locally: `npm run build`
2. Upload new `.output` folder
3. Restart the Node.js application

## Environment Variables

If your app needs environment variables:
1. In Node.js App manager, look for "Environment Variables" section
2. Add any required variables (API keys, database URLs, etc.)
3. Restart the app after adding variables

## Performance Tips

- Enable compression in your hosting control panel
- Consider using a CDN for static assets
- Monitor resource usage in cPanel

## Support

If you encounter issues:
1. Check Node.js app error logs in cPanel
2. Contact HostKing support with error messages
3. Ensure your hosting plan supports the required Node.js version
