# Email Configuration Setup Guide

This guide will help you configure SMTP email functionality for the contact form using the dasunsucharith.me email server.

## 📧 Email Service Setup

### Custom Email Server (dasunsucharith.me)

The contact form is configured to use your custom email server with the following settings:

- **SMTP Server**: mail.dasunsucharith.me
- **Port**: 465 (SSL)
- **Username**: info@dasunsucharith.me
- **Authentication**: Required

1. **Configure Environment Variables**:
   ```bash
   cp .env.example .env.local
   ```

2. **Update `.env.local`** with your credentials:
   ```env
   SMTP_HOST=mail.dasunsucharith.me
   SMTP_PORT=465
   SMTP_USER=info@dasunsucharith.me
   SMTP_PASS=your-email-password
   EMAIL_FROM=info@dasunsucharith.me
   EMAIL_TO=info@dasunsucharith.me
   ```

### Option 2: Other Email Providers

#### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

#### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

#### Custom SMTP
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587 # or 465 for SSL
```

## 🚀 Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Set Environment Variables**:
   - Copy `.env.example` to `.env.local`
   - Fill in your SMTP credentials

3. **Test the Setup**:
   ```bash
   npm run dev
   ```
   - Navigate to the contact section
   - Fill out and submit the form
   - Check your email for the message

## 🔧 Configuration Details

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server hostname | `mail.dasunsucharith.me` |
| `SMTP_PORT` | SMTP server port | `465` |
| `SMTP_USER` | Your email address | `info@dasunsucharith.me` |
| `SMTP_PASS` | Your email password | `your-secure-password` |
| `EMAIL_FROM` | Sender email address | `info@dasunsucharith.me` |
| `EMAIL_TO` | Recipient email address | `info@dasunsucharith.me` |

### Email Template

The contact form sends emails with:
- **Subject**: "New Contact Form Submission from [Name]"
- **HTML formatted content** with styling
- **Sender information** (name and email)
- **Message content** with proper formatting
- **Timestamp** of submission

## 🛠️ Troubleshooting

### Common Issues

1. **"Invalid credentials" error**:
   - Verify the email address: `info@dasunsucharith.me`
   - Check the password for the email account
   - Ensure authentication is enabled on the email server

2. **"Connection refused" error**:
   - Verify SMTP host and port settings
   - Check if your hosting provider blocks SMTP connections

3. **"Email not received"**:
   - Check spam/junk folder  
   - Verify the `EMAIL_TO` address: `info@dasunsucharith.me`
   - Check the email server logs

4. **SSL/TLS connection issues**:
   - The server uses SSL on port 465
   - If you encounter certificate issues, the config includes `rejectUnauthorized: false`
   - Ensure your hosting provider allows SSL connections

### Security Notes

- Never commit `.env.local` to version control
- Use strong passwords for your email account
- Consider implementing rate limiting for production use

## 📧 Email Preview

The sent emails will look like this:

```
Subject: New Contact Form Submission from John Doe

┌─────────────────────────────────────────┐
│ New Contact Form Submission             │
├─────────────────────────────────────────┤
│ From: John Doe                          │
│ Email: john@example.com                 │
│                                         │
│ Message:                                │
│ Hi, I'm interested in working with you  │
│ on a new project...                     │
│                                         │
│ Sent on: January 15, 2024 at 3:30 PM   │
└─────────────────────────────────────────┘
```

## 🔒 Production Considerations

For production deployment:

1. **Use environment variables** on your hosting platform
2. **Consider dedicated email services**:
   - SendGrid
   - Mailgun
   - Amazon SES
   - Resend

3. **Implement rate limiting** to prevent spam
4. **Add CAPTCHA** for additional security
5. **Monitor email delivery** and bounce rates

## ✅ Testing Checklist

- [ ] Environment variables configured
- [ ] Dependencies installed
- [ ] Development server running
- [ ] Form submits without errors
- [ ] Email received in inbox
- [ ] Email formatting looks correct
- [ ] Error handling works for invalid inputs