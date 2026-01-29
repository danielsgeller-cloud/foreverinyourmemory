# Deployment Guide - Forever In Your Memory

## Status: Ready for Deployment ✅

Your website is fully configured and ready to deploy to AWS Amplify!

---

## Step 1: Push to GitHub

The repository is already committed locally. You need to push it to GitHub:

```bash
cd /Users/dangeller/Desktop/foreverinyourmemory
git push -u origin main
```

**If you get permission errors**, you may need to:
- Configure your GitHub credentials: `gh auth login`
- Or push using your own GitHub account

The repository URL is: `https://github.com/danielsgeller-cloud/foreverinyourmemory`

---

## Step 2: Deploy to AWS Amplify

### Option A: AWS Console (Recommended)

1. **Go to AWS Amplify Console**
   - Visit: https://console.aws.amazon.com/amplify/
   - Select your region (e.g., us-east-1)

2. **Create New App**
   - Click "New app" → "Host web app"
   - Choose "GitHub" as the source

3. **Connect Repository**
   - Authorize AWS Amplify to access your GitHub account
   - Select repository: `danielsgeller-cloud/foreverinyourmemory`
   - Select branch: `main`

4. **Configure Build Settings**
   - App name: `foreverinyourmemory`
   - The `amplify.yml` file is already in your repo, so it will auto-detect settings
   - Click "Advanced settings" to add environment variables

5. **Add Environment Variables** (CRITICAL!)
   Add these environment variables in the Amplify console:
   ```
   GMAIL_USER = picturesinceramic@gmail.com
   GMAIL_APP_PASSWORD = cazsgjatusmmyrkm
   ADMIN_EMAIL = info@picturesinceramic.com
   NEXT_PUBLIC_SITE_URL = https://main.xxxxx.amplifyapp.com
   ```

   **Note:** Replace the `NEXT_PUBLIC_SITE_URL` with your actual Amplify URL after the first deployment

6. **Review and Deploy**
   - Review all settings
   - Click "Save and deploy"
   - Wait 5-10 minutes for the first build

7. **Update Site URL**
   - After deployment, copy your Amplify app URL (e.g., `https://main.d1234abcd.amplifyapp.com`)
   - Go to "Environment variables" in Amplify console
   - Update `NEXT_PUBLIC_SITE_URL` with your actual URL
   - Redeploy the app

### Option B: AWS CLI (Advanced)

If you prefer using the CLI:

```bash
# Install AWS Amplify CLI if not already installed
npm install -g @aws-amplify/cli

# Configure AWS credentials
amplify configure

# Initialize Amplify in your project
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

---

## Step 3: Configure Custom Domain (Optional)

1. In AWS Amplify Console, go to "Domain management"
2. Click "Add domain"
3. Enter your domain (e.g., `foreverinyourmemory.com`)
4. Follow AWS instructions to configure DNS records
5. Wait for SSL certificate provisioning (can take up to 24 hours)

---

## Environment Variables Reference

Make sure these are set in AWS Amplify:

| Variable | Value | Description |
|----------|-------|-------------|
| `GMAIL_USER` | picturesinceramic@gmail.com | Email account for sending |
| `GMAIL_APP_PASSWORD` | cazsgjatusmmyrkm | Gmail app password |
| `ADMIN_EMAIL` | info@picturesinceramic.com | Admin notification email |
| `NEXT_PUBLIC_SITE_URL` | https://your-amplify-url.com | Your deployed site URL |

---

## Post-Deployment Checklist

- [ ] Test the contact form - send a test message
- [ ] Verify emails are being received at both addresses
- [ ] Check that all pages load correctly
- [ ] Test on mobile devices
- [ ] Set up custom domain (if applicable)
- [ ] Enable HTTPS redirect (should be automatic with Amplify)

---

## Troubleshooting

### Build Fails
- Check the build logs in Amplify console
- Verify environment variables are set correctly
- Make sure `amplify.yml` is present in your repository

### Emails Not Sending
- Verify `GMAIL_USER` and `GMAIL_APP_PASSWORD` are correct
- Check that the Gmail account has "Less secure app access" enabled or is using an app password
- Check Amplify logs for email errors

### 404 Errors
- Make sure the app is deployed to the `main` branch
- Verify build was successful
- Check that Next.js build completed properly

---

## Monitoring & Maintenance

- **Amplify Console**: Check deployment status and build logs
- **CloudWatch**: View application logs and metrics
- **Cost**: Monitor AWS costs in the AWS Billing console

---

## Repository Info

- **GitHub**: https://github.com/danielsgeller-cloud/foreverinyourmemory
- **Branch**: main
- **Build File**: amplify.yml (already configured)

---

**Need Help?**
- AWS Amplify Docs: https://docs.amplify.aws/
- Next.js on Amplify: https://docs.amplify.aws/guides/hosting/nextjs/
