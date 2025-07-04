# Vercel Deployment Setup

## 🚀 Quick Setup for Vercel

### Step 1: Deploy to Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Import Project" and select your GitHub repository
4. Vercel will automatically detect it's a Next.js project and deploy

### Step 2: Add Environment Variables
After deployment, you need to add the environment variables:

1. **Go to your project dashboard** on Vercel
2. **Click "Settings"** tab
3. **Click "Environment Variables"** in the sidebar
4. **Add each variable** one by one:

```
Name: SMTP_HOST
Value: mail.dasunsucharith.me

Name: SMTP_PORT  
Value: 465

Name: SMTP_USER
Value: info@dasunsucharith.me

Name: SMTP_PASS
Value: Alphadsp@25

Name: EMAIL_FROM
Value: info@dasunsucharith.me

Name: EMAIL_TO
Value: sucharith.dasun@gmail.com

Name: NODE_ENV
Value: production
```

### Step 3: Redeploy
After adding environment variables:
1. **Go to "Deployments" tab**
2. **Click the three dots** on the latest deployment
3. **Click "Redeploy"**
4. **Check "Use existing Build Cache"** and click "Redeploy"

### Step 4: Test Your Contact Form
1. **Visit your live site** (e.g., https://your-project.vercel.app)
2. **Test the API endpoint** by visiting: `https://your-project.vercel.app/api/contact`
   - You should see a JSON response with "Contact API is working"
3. **Submit the contact form** and check for emails

## 🔍 Debugging

### Check API Status
Visit `https://your-site.vercel.app/api/contact` to see:
- ✅ API is working
- ✅ Environment variables are loaded
- ❌ Missing environment variables

### Common Issues:

1. **405 Method Not Allowed**:
   - Environment variables not set
   - API route not deployed properly
   - Try redeploying

2. **500 Internal Server Error**:
   - Check Vercel function logs
   - Verify SMTP credentials
   - Check environment variable spelling

3. **CORS errors**:
   - Should be fixed with the OPTIONS handler

### View Logs
1. Go to **Vercel Dashboard** → **Functions** tab
2. Click on **View Function Logs**
3. Check for any error messages

## 🎉 Success
Once working, your contact form will:
- ✅ Send emails from `info@dasunsucharith.me`
- ✅ Deliver to `sucharith.dasun@gmail.com`  
- ✅ Show success/error messages to users
- ✅ Work on your custom domain once connected