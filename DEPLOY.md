# Rooted Lending v2 - Deployment Guide

## Pre-Deployment Checklist

### Content
- [ ] All loan product pages written
- [ ] About page completed
- [ ] Contact form tested
- [ ] Calculator pages functional
- [ ] Blog posts published (minimum 3)
- [ ] Legal pages (privacy, terms, disclaimers)
- [ ] Testimonials added
- [ ] NMLS number verified

### SEO
- [ ] Meta titles optimized
- [ ] Meta descriptions written
- [ ] Schema markup validated
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Google Analytics ID added
- [ ] Google Search Console verified
- [ ] Facebook Pixel ID added

### Forms & Integrations
- [ ] Contact form connected to GoHighLevel
- [ ] Application form tested
- [ ] Rate quote form functional
- [ ] Deal Analyzer links working
- [ ] Email notifications configured
- [ ] CRM pipeline set up

### Technical
- [ ] All images optimized
- [ ] Mobile responsiveness tested
- [ ] Page speed < 3 seconds
- [ ] SSL certificate active
- [ ] 404 page customized
- [ ] Favicon uploaded

## Deployment Options

### Option 1: WP Engine (Current Host)

#### Step 1: Build the Site
```bash
cd /path/to/rooted-lending-v2
npm install
npm run build
```

#### Step 2: Deploy via SFTP
1. Log in to WP Engine User Portal
2. Get SFTP credentials for your environment
3. Use FileZilla or similar client
4. Connect to SFTP server
5. Upload `dist/` folder contents to `/public_html/`

#### Step 3: Configure Domain
1. Point DNS to WP Engine
2. Add SSL certificate
3. Configure redirects (www vs non-www)

### Option 2: Vercel (Recommended for Performance)

#### Step 1: Connect GitHub Repository
1. Push code to GitHub
2. Connect Vercel to GitHub repository
3. Set framework preset to "Next.js"
4. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`

#### Step 2: Environment Variables
Add these in Vercel dashboard:
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `NEXT_PUBLIC_FB_PIXEL_ID` - Facebook Pixel ID
- `NEXT_PUBLIC_GHL_API_KEY` - GoHighLevel API key

#### Step 3: Custom Domain
1. Add custom domain in Vercel
2. Update DNS records
3. Configure SSL (automatic)

### Option 3: Netlify

#### Step 1: Connect Repository
1. Push to GitHub
2. Connect Netlify to repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

#### Step 2: Form Handling
Netlify can handle forms directly:
- Add `data-netlify="true"` to forms
- Configure form notifications

#### Step 3: Custom Domain
1. Add custom domain
2. Configure DNS
3. Enable HTTPS

## GoHighLevel Integration

### Form Submissions
To connect forms to GoHighLevel:

#### Method 1: Native Integration
1. In GoHighLevel, create a form
2. Get the form embed code
3. Replace forms in Next.js with GoHighLevel embed

#### Method 2: Zapier/Webhook
1. Create webhook endpoint
2. Send form data to webhook
3. Zapier forwards to GoHighLevel
4. Map fields in Zapier

#### Method 3: Direct API
```javascript
// Example API route for form submission
// app/api/submit-lead/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  
  // Send to GoHighLevel
  const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.email,
      phone: data.phone,
      firstName: data.firstName,
      lastName: data.lastName,
      tags: ['Website Lead', data.loanType],
      customField: {
        loan_amount: data.loanAmount,
        property_type: data.propertyType,
      }
    }),
  });
  
  return NextResponse.json({ success: true });
}
```

## Post-Deployment

### Immediate (Day 1)
- [ ] Test all forms
- [ ] Check all links
- [ ] Verify mobile view
- [ ] Test page speed
- [ ] Submit sitemap to Google
- [ ] Verify Google Search Console

### Week 1
- [ ] Monitor analytics
- [ ] Check for 404 errors
- [ ] Test contact form submissions
- [ ] Verify CRM integration
- [ ] Social media announcement

### Month 1
- [ ] Publish first blog post
- [ ] Set up email sequences
- [ ] Create Google Business Profile
- [ ] Request first reviews
- [ ] Analyze traffic sources

## Performance Monitoring

### Tools
- Google Analytics 4
- Google Search Console
- GTmetrix
- PageSpeed Insights
- Hotjar (heatmaps)

### KPIs to Track
- Website visitors
- Pages per session
- Average session duration
- Bounce rate
- Form submissions
- Quote requests
- Application starts
- Phone calls

## Maintenance Schedule

### Weekly
- Check form submissions
- Review analytics
- Monitor uptime

### Monthly
- Update loan rates
- Publish blog post
- Review and update content
- Check broken links

### Quarterly
- SEO audit
- Competitor analysis
- Content strategy review
- Performance optimization

## Support Contacts

### Technical Issues
- Developer: [Your Name]
- Email: [Your Email]
- Phone: [Your Phone]

### GoHighLevel Support
- Support Portal: help.gohighlevel.com
- Phone: [GHL Support Number]

### Hosting Support
- WP Engine: support.wpengine.com
- Vercel: vercel.com/support
- Netlify: netlify.com/support

## Rollback Plan

If deployment fails:
1. Keep previous site backup
2. DNS can be reverted quickly
3. Git history for code rollback
4. Database backups (if applicable)

## Launch Announcement

### Email to Existing Clients
Subject: "New Website + Free Deal Analysis Tool"
- Highlight new features
- Link to Deal Analyzer
- Offer to run numbers on current deals

### Social Media
- LinkedIn post
- Facebook announcement
- Instagram story

### Partners
- Email referral partners
- Update email signatures
- Add to business cards

---

**Estimated deployment time:** 2-4 hours
**Recommended deployment window:** Weekday morning (Tuesday-Thursday)
**Rollback window:** Keep old site live for 24-48 hours as backup
