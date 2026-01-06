# EmailJS Setup Instructions

To enable real email functionality on your contact form, you need to set up EmailJS:

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (100 emails/month free)

## Step 2: Create Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your email account (kanwalrai09@gmail.com)
5. Note your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Use these template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
4. Set "To Email" to: `kanwalrai09@gmail.com`
5. Note your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "General" in your EmailJS dashboard
2. Copy your **Public Key**

## Step 5: Update contact.js
Open `js/contact.js` and replace these values:
- `EMAILJS_PUBLIC_KEY` - Your Public Key
- `EMAILJS_SERVICE_ID` - Your Service ID  
- `EMAILJS_TEMPLATE_ID` - Your Template ID

## Alternative: Use Formspree
If you prefer Formspree instead:
1. Go to https://formspree.io/
2. Create a free account
3. Create a new form
4. Get your form endpoint URL
5. Update the form action in `contact.html` to use Formspree endpoint

