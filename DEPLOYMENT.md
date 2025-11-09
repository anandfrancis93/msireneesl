# Deployment Guide

## Development

To run the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Deployment Options

### 1. Vercel (Recommended)

The easiest way to deploy your Next.js app:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (it will auto-detect Next.js settings)

### 2. Netlify

1. Push code to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### 3. Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t irene-website .
docker run -p 3000:3000 irene-website
```

### 4. Traditional VPS (DigitalOcean, AWS EC2, etc.)

1. Install Node.js on your server
2. Clone your repository
3. Install dependencies: `npm install`
4. Build: `npm run build`
5. Use PM2 to keep the app running:
   ```bash
   npm install -g pm2
   pm2 start npm --name "irene-website" -- start
   pm2 save
   pm2 startup
   ```

## Environment Variables

If you add environment variables later (e.g., for email service), create a `.env.local` file:

```env
# Example
SENDGRID_API_KEY=your_api_key
EMAIL_FROM=noreply@yourdomain.com
```

Don't forget to add these in your deployment platform's settings.

## Custom Domain

### Vercel
1. Go to your project settings
2. Add your custom domain
3. Configure DNS records as instructed

### Other platforms
1. Point your domain's A record to the server IP
2. Or use CNAME to point to the platform's domain

## Performance Tips

- Enable caching headers
- Use a CDN (Cloudflare)
- Enable compression
- Optimize images (use Next.js Image component)
- Monitor with analytics

## Monitoring

Consider adding:
- **Vercel Analytics** for performance monitoring
- **Sentry** for error tracking
- **Google Analytics** for user tracking

Happy deploying!
