# BitcoinLoans.com - Deployment Guide

## Overview
This is a Next.js 14 static site configured for deployment to WP Engine or any static hosting provider.

## Prerequisites
- Node.js 18+ installed
- npm or yarn
- Git repository set up
- WP Engine hosting account (or alternative)

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Building for Production

### Static Export (Recommended for WP Engine)

```bash
# Build static files
npm run build

# Output will be in the `dist` folder
```

### Build Configuration
The `next.config.js` is set up for static export:

```javascript
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
}
```

## Deploying to WP Engine

### Method 1: Git Push (Recommended)

1. **Set up your WP Engine environment**
   - Log in to WP Engine User Portal
   - Create a new environment (e.g., `bitcoinloans`)
   - Note your Git push URL

2. **Add WP Engine as a remote**
   ```bash
   git remote add wpengine YOUR_WPENGINE_GIT_URL
   ```

3. **Build and deploy**
   ```bash
   # Build the static site
   npm run build
   
   # Commit the dist folder
   git add dist/
   git commit -m "Deploy to WP Engine"
   
   # Push to WP Engine
   git push wpengine main
   ```

### Method 2: SFTP Upload

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Upload via SFTP**
   - Use an SFTP client (FileZilla, Cyberduck)
   - Connect to your WP Engine SFTP credentials
   - Upload contents of `dist/` folder to `/public_html/`

### Method 3: GitHub Actions (CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to WP Engine

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to WP Engine
      uses: wpengine/github-action-wpe-site-deploy@v3
      with:
        WPE_SSHG_KEY_PRIVATE: ${{ secrets.WPE_SSHG_KEY_PRIVATE }}
        WPE_ENV: bitcoinloans
        SRC_PATH: "dist/"
        REMOTE_PATH: "public_html/"
```

## Alternative Hosting Options

### Vercel (Easiest)

1. Connect your GitHub repo to Vercel
2. Set framework preset to "Next.js"
3. Deploy automatically on every push

### Netlify

1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`

### Cloudflare Pages

1. Connect your GitHub repo
2. Build command: `npm run build`
3. Build output directory: `dist`

## Post-Deployment Checklist

### Verify Site Functionality
- [ ] Homepage loads correctly
- [ ] Navigation works between all pages
- [ ] Calculator functions properly
- [ ] Comparison page displays correctly
- [ ] All articles accessible
- [ ] Legal pages linked in footer
- [ ] Affiliate links working
- [ ] Mobile responsiveness verified

### SEO Verification
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Meta tags present on all pages
- [ ] Structured data validated (use Google's Rich Results Test)
- [ ] Open Graph tags working (use Facebook Sharing Debugger)

### Performance Checks
- [ ] Page load speed under 3 seconds
- [ ] Images optimized
- [ ] No console errors
- [ ] SSL certificate active

### Analytics Setup
- [ ] Google Analytics 4 installed
- [ ] Google Search Console verified
- [ ] Bing Webmaster Tools added
- [ ] Conversion tracking for affiliate clicks

## Maintenance

### Regular Updates
- Update content quarterly
- Check affiliate links monthly
- Update Bitcoin price references as needed
- Refresh lender rates and terms

### Content Calendar
- Publish new article every 2-4 weeks
- Update existing articles with new information
- Monitor keyword rankings and optimize

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next dist node_modules
npm install
npm run build
```

### 404 Errors
- Check that all routes are properly configured
- Verify `trailingSlash` setting in next.config.js
- Check WP Engine rewrite rules

### Images Not Loading
- Ensure images are in `public/` folder
- Check that `unoptimized: true` is set for static export
- Verify image paths are correct

## Support

For issues with:
- **WP Engine**: Contact WP Engine support or check documentation
- **Next.js**: Visit nextjs.org/docs
- **Build errors**: Check Vercel's Next.js deployment docs

## Security Notes

- Keep dependencies updated: `npm audit fix`
- Regularly update Node.js version
- Monitor for security advisories
- Use environment variables for sensitive data (never commit secrets)

## Domain Configuration

1. Point your domain to WP Engine
2. Add SSL certificate
3. Configure redirects (www to non-www or vice versa)
4. Set up CDN if available

## Affiliate Program Setup

Before launch:
1. Apply to Nexo affiliate program
2. Apply to YouHodler affiliate program
3. Contact CoinRabbit for partnership
4. Update all affiliate links with your referral IDs
5. Test all affiliate links

## Launch Checklist

- [ ] All 10 articles published
- [ ] Legal pages complete
- [ ] Calculator tested
- [ ] Affiliate links updated
- [ ] SEO configured
- [ ] Analytics installed
- [ ] SSL active
- [ ] Mobile responsive
- [ ] Performance optimized
- [ ] Backup strategy in place

---

**Estimated time to deploy:** 30-60 minutes (after WP Engine setup)

**Estimated monthly maintenance:** 2-4 hours
