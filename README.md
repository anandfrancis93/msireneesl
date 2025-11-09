# Irene - Modern Portfolio Website

A modern, minimal dark-themed portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimal interface following Human Interface Guidelines
- **Dark Theme**: Strictly dark-themed for reduced eye strain and modern aesthetics
- **Fully Responsive**: Seamlessly adapts to all screen sizes (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **Type-Safe**: Written in TypeScript for better developer experience
- **Form Validation**: Contact form with Zod validation and React Hook Form
- **SEO Ready**: Optimized metadata and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/          # API routes
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript types
├── public/              # Static assets
└── package.json
```

## Design System

### Colors

- **Background**: #0a0a0a (dark-bg)
- **Surface**: #121212 (dark-surface)
- **Elevated**: #1e1e1e (dark-elevated)
- **Accent Primary**: #6366f1 (indigo)
- **Accent Secondary**: #8b5cf6 (purple)

### Typography

- **Font Family**: Inter (system fallback)
- **Heading Sizes**: 7xl, 5xl, 4xl, 3xl
- **Body Sizes**: lg, base, sm

## Customization

### Update Content

Edit the component files in `src/components/` to customize:
- Personal information in `Hero.tsx`
- About section content in `About.tsx`
- Services offered in `Services.tsx`
- Portfolio projects in `Portfolio.tsx`
- Contact information in `Contact.tsx`

### Update Colors

Modify the color scheme in `tailwind.config.ts`

### Add Email Service

To enable actual email sending, update `src/app/api/contact/route.ts` with your preferred email service:
- SendGrid
- Resend
- Nodemailer
- AWS SES

## License

MIT License - feel free to use this for your own portfolio!

## Author

Created by Irene
