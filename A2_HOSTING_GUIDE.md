# A2 Hosting Deployment Guide

A2 Hosting shared hosting has limitations with Next.js applications. Here are your options:

## ⚠️ **Important Note About Shared Hosting**

A2 Hosting shared hosting **does not support Next.js applications** because:
- No Node.js runtime environment
- No support for API routes
- No server-side rendering capabilities
- Cannot install npm packages like nodemailer

## 🚀 **Recommended Solutions**

### Option 1: **A2 Hosting VPS/Dedicated Server** (Recommended)

If you want to stay with A2 Hosting, upgrade to their VPS or dedicated server plans:

1. **Upgrade your hosting plan** to VPS or dedicated
2. **Install Node.js** on your server
3. **Deploy your Next.js app** using PM2 or similar process manager
4. **Set environment variables** in your server's environment

#### Setting Environment Variables on A2 VPS:

1. **SSH into your server**:
   ```bash
   ssh username@your-server-ip
   ```

2. **Create environment file**:
   ```bash
   nano /home/username/.env
   ```

3. **Add your variables**:
   ```bash
   export SMTP_HOST=mail.dasunsucharith.me
   export SMTP_PORT=465
   export SMTP_USER=info@dasunsucharith.me
   export SMTP_PASS=Alphadsp@25
   export EMAIL_FROM=info@dasunsucharith.me
   export EMAIL_TO=sucharith.dasun@gmail.com
   export NODE_ENV=production
   ```

4. **Load variables**:
   ```bash
   source ~/.env
   ```

### Option 2: **Static Export + External Form Service** (For Shared Hosting)

Keep your shared hosting but use an external service for the contact form:

#### Step 1: Export Static Next.js Site

1. **Update `next.config.js`**:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

2. **Remove API routes** (they won't work in static export)
3. **Build static site**:
   ```bash
   npm run build
   ```

4. **Upload the `out/` folder** to your A2 Hosting public_html directory

#### Step 2: Use External Form Service

Replace your contact form with one of these services:

##### A. **Formspree** (Recommended)
1. Go to [formspree.io](https://formspree.io)
2. Create account and get form endpoint
3. Update your contact form:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });
    
    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  } catch (error) {
    setError('Failed to send message');
  } finally {
    setIsLoading(false);
  }
};
```

##### B. **Netlify Forms** (Free)
1. Deploy to Netlify (free)
2. Add `netlify` attribute to your form
3. Forms are handled automatically

##### C. **EmailJS** (Client-side)
1. Go to [emailjs.com](https://emailjs.com)
2. Set up email service
3. Send emails directly from the browser

### Option 3: **Hybrid Approach**

Use A2 Hosting for static files + separate API hosting:

1. **Deploy static site** to A2 Hosting
2. **Deploy API routes** to Vercel/Netlify Functions
3. **Update form endpoint** to point to external API

```tsx
const response = await fetch('https://your-api.vercel.app/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

## 📋 **Quick Implementation: Static Site + Formspree**

This is the fastest solution for A2 Hosting shared hosting:

### Step 1: Create next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### Step 2: Update Contact Form
```tsx
// Replace the API call with Formspree
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setError('');
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    setError('Failed to send message. Please try again.');
  } finally {
    setIsLoading(false);
  }
};
```

### Step 3: Build and Deploy
```bash
npm run build
# Upload the 'out' folder contents to public_html
```

## 🔗 **Alternative Hosting Recommendations**

If you want to keep your Next.js app with full functionality:

1. **Vercel** - Free tier, perfect for Next.js
2. **Netlify** - Free tier with good features  
3. **Railway** - Simple deployment
4. **A2 Hosting VPS** - If you want to stay with A2

## 💡 **My Recommendation**

For your current setup, I recommend:

1. **Keep A2 Hosting** for your domain and any other websites
2. **Deploy this specific Next.js app to Vercel** (free)
3. **Point a subdomain** (like app.dasunsucharith.me) to Vercel
4. **Keep full Next.js functionality** including your email system

This way you get the best of both worlds: your existing A2 hosting setup + modern Next.js deployment.

Would you like me to help you implement any of these solutions?