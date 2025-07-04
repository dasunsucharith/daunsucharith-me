# Production Deployment Guide

This guide shows how to configure environment variables for email functionality in production deployment.

## 🚀 Popular Deployment Platforms

### 1. **Vercel** (Recommended for Next.js)

Vercel is the easiest platform for Next.js deployment and environment variables:

#### Via Vercel Dashboard:
1. Go to your project on [vercel.com](https://vercel.com)
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:

```
SMTP_HOST = mail.dasunsucharith.me
SMTP_PORT = 465
SMTP_USER = info@dasunsucharith.me
SMTP_PASS = Alphadsp@25
EMAIL_FROM = info@dasunsucharith.me
EMAIL_TO = sucharith.dasun@gmail.com
NODE_ENV = production
```

#### Via Vercel CLI:
```bash
vercel env add SMTP_HOST
vercel env add SMTP_PORT
vercel env add SMTP_USER
vercel env add SMTP_PASS
vercel env add EMAIL_FROM
vercel env add EMAIL_TO
```

After adding variables, redeploy:
```bash
vercel --prod
```

### 2. **Netlify**

#### Via Netlify Dashboard:
1. Go to your site dashboard on [netlify.com](https://netlify.com)
2. Navigate to **Site Settings** → **Environment Variables**
3. Click **Add Environment Variable** for each:

```
SMTP_HOST = mail.dasunsucharith.me
SMTP_PORT = 465
SMTP_USER = info@dasunsucharith.me
SMTP_PASS = Alphadsp@25
EMAIL_FROM = info@dasunsucharith.me
EMAIL_TO = sucharith.dasun@gmail.com
NODE_ENV = production
```

#### Via Netlify CLI:
```bash
netlify env:set SMTP_HOST mail.dasunsucharith.me
netlify env:set SMTP_PORT 465
netlify env:set SMTP_USER info@dasunsucharith.me
netlify env:set SMTP_PASS Alphadsp@25
netlify env:set EMAIL_FROM info@dasunsucharith.me
netlify env:set EMAIL_TO sucharith.dasun@gmail.com
```

### 3. **Railway**

#### Via Railway Dashboard:
1. Go to your project on [railway.app](https://railway.app)
2. Navigate to **Variables** tab
3. Add each variable manually

#### Via Railway CLI:
```bash
railway variables set SMTP_HOST=mail.dasunsucharith.me
railway variables set SMTP_PORT=465
railway variables set SMTP_USER=info@dasunsucharith.me
railway variables set SMTP_PASS=Alphadsp@25
railway variables set EMAIL_FROM=info@dasunsucharith.me
railway variables set EMAIL_TO=sucharith.dasun@gmail.com
```

### 4. **Heroku**

#### Via Heroku Dashboard:
1. Go to your app on [heroku.com](https://heroku.com)
2. Navigate to **Settings** → **Config Vars**
3. Click **Reveal Config Vars** and add each variable

#### Via Heroku CLI:
```bash
heroku config:set SMTP_HOST=mail.dasunsucharith.me
heroku config:set SMTP_PORT=465
heroku config:set SMTP_USER=info@dasunsucharith.me
heroku config:set SMTP_PASS=Alphadsp@25
heroku config:set EMAIL_FROM=info@dasunsucharith.me
heroku config:set EMAIL_TO=sucharith.dasun@gmail.com
```

### 5. **DigitalOcean App Platform**

1. Go to your app on [cloud.digitalocean.com](https://cloud.digitalocean.com)
2. Navigate to **Settings** → **App-Level Environment Variables**
3. Add each variable with the values above

### 6. **AWS Amplify**

1. Go to your app on [aws.amazon.com/amplify](https://aws.amazon.com/amplify)
2. Navigate to **App Settings** → **Environment Variables**
3. Add each variable with the values above

## 🔧 Environment Variables Reference

Copy these exact values for your production deployment:

```env
SMTP_HOST=mail.dasunsucharith.me
SMTP_PORT=465
SMTP_USER=info@dasunsucharith.me
SMTP_PASS=Alphadsp@25
EMAIL_FROM=info@dasunsucharith.me
EMAIL_TO=sucharith.dasun@gmail.com
NODE_ENV=production
```

## 🛡️ Security Best Practices

### 1. **Never Commit Sensitive Data**
- ✅ `.env.local` is in `.gitignore`
- ✅ Environment variables are set on hosting platform
- ❌ Never put passwords in your code

### 2. **Use Different Environments**
You can set different variables for different environments:

- **Development**: `.env.local` (your local machine)
- **Preview**: Environment variables in hosting platform
- **Production**: Environment variables in hosting platform

### 3. **Validate Environment Variables**
The API route already checks for missing environment variables and will show helpful error messages.

## 🚀 Deployment Steps

1. **Push your code to GitHub** (without `.env.local`)
2. **Connect your repository** to your hosting platform
3. **Add environment variables** using one of the methods above
4. **Deploy** your application
5. **Test the contact form** on your live site

## ✅ Testing Production Environment

After deployment, test your contact form:

1. **Visit your live website**
2. **Fill out the contact form**
3. **Check your email** (sucharith.dasun@gmail.com)
4. **Check deployment logs** if there are issues

## 🔍 Troubleshooting

### Common Issues:

1. **Environment variables not loaded**:
   - Redeploy after adding variables
   - Check variable names match exactly
   - Ensure no extra spaces in values

2. **Email not sending**:
   - Check deployment logs
   - Verify SMTP credentials are correct
   - Test SMTP connection from production environment

3. **500 errors**:
   - Check server logs in hosting platform dashboard
   - Verify all required environment variables are set

## 📋 Quick Copy-Paste for Hosting Platforms

**Variable Names and Values:**
```
SMTP_HOST = mail.dasunsucharith.me
SMTP_PORT = 465
SMTP_USER = info@dasunsucharith.me
SMTP_PASS = Alphadsp@25
EMAIL_FROM = info@dasunsucharith.me
EMAIL_TO = sucharith.dasun@gmail.com
NODE_ENV = production
```

This ensures your contact form will work perfectly in production! 🎉