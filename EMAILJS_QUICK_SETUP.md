# Quick EmailJS Setup Guide

## Your Current Configuration
✅ **Public Key**: `4i2T4kwO5BTP7qPQ6` (Already added to contact.js)

## Next Steps - Get Your Service ID and Template ID

### Step 1: Get Service ID
1. Go to https://dashboard.emailjs.com/admin
2. Click on **"Email Services"** in the left menu
3. If you don't have a service yet, click **"Add New Service"**
   - Choose **Gmail** (recommended)
   - Connect your Gmail account (kanwalrai09@gmail.com)
   - Click **"Create Service"**
4. Copy the **Service ID** (it looks like: `service_xxxxxxx`)

### Step 2: Create Email Template
1. Go to **"Email Templates"** in the left menu
2. Click **"Create New Template"**
3. Set up your template:
   - **Template Name**: Contact Form
   - **Subject**: `{{subject}}` or `New Contact: {{subject}}`
   - **Content**:
     ```
     From: {{from_name}}
     Email: {{from_email}}
     
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```
   - **To Email**: `kanwalrai09@gmail.com`
   - **From Name**: `{{from_name}}`
   - **Reply To**: `{{from_email}}`
4. Click **"Save"**
5. Copy the **Template ID** (it looks like: `template_xxxxxxx`)

### Step 3: Update contact.js
Open `js/contact.js` and replace:
- Line 18: `EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"` → Your Service ID
- Line 19: `EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"` → Your Template ID

### Step 4: Test
1. Open your contact page
2. Fill out and submit the form
3. Check your email (kanwalrai09@gmail.com) for the message

## Note About Private Key
The "Private Key" you mentioned is not needed for client-side EmailJS integration. Only the Public Key, Service ID, and Template ID are required.

