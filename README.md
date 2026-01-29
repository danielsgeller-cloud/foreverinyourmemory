# Forever In Your Memory - Monument Dealer Website

A beautiful, professional website for a monument dealer business.

## Features

- **Elegant Homepage** with hero section, about section, services showcase
- **Contact Form** for customers to reach out
- **Responsive Design** looks great on all devices
- **Beautiful Images** from memorial landscapes
- **Professional Typography** with clean, readable fonts

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) (or port 3001 if 3000 is in use)

## Pages

- **Home (`/`)** - Main landing page with hero, about, services, and CTA sections
- **Contact (`/contact`)** - Contact form for inquiries

## To Do

- [ ] Set up email functionality for the contact form
- [ ] Add actual contact information (email, phone, address)
- [ ] Customize business hours if needed
- [ ] Add more images or replace placeholder images
- [ ] Set up deployment (Vercel, Netlify, AWS Amplify, etc.)

## Email Setup (Coming Soon)

The contact form is ready but needs an email backend. You'll need to:
1. Set up an email service (like SendGrid, AWS SES, or nodemailer with Gmail)
2. Create an API route at `/app/api/contact/route.ts`
3. Update the form submission handler in `/app/contact/page.tsx`

## Customization

- **Colors:** Edit the Tailwind classes throughout the components (currently using amber accent)
- **Images:** Replace images in `/public/` directory
- **Content:** Edit text directly in the page components
- **Styling:** Modify global styles in `/app/globals.css`

## Built With

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel Geist Font** - Typography

## Project Structure

```
foreverinyourmemory/
├── app/
│   ├── contact/
│   │   └── page.tsx          # Contact form page
│   ├── layout.tsx             # Root layout with metadata
│   ├── page.tsx               # Homepage
│   └── globals.css            # Global styles
├── public/
│   ├── field-hero.jpg         # Hero image
│   ├── field-sunset-wide.jpg  # Sunset background
│   ├── contact-headstone-flowers.jpg
│   └── field-soft-repeat.jpg
└── README.md
```

---

**Forever In Your Memory** - Honoring Lives, Preserving Legacies
