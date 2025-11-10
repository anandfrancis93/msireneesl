# Admin Page Setup Guide

## Overview

You now have a custom `/admin` page where you can create blog posts with just a title and content!

## Quick Start

1. Go to: `https://msireneesl.vercel.app/admin`
2. Enter password: `irene2024`
3. Fill in the form and click "Publish"
4. Your blog post appears in 1-2 minutes!

## One-Time Setup (Required)

### Step 1: Create GitHub Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: `Blog Admin Token`
4. Set expiration: `No expiration` (or choose your preference)
5. Check the box for: **`repo`** (Full control of private repositories)
6. Scroll down and click "Generate token"
7. **IMPORTANT**: Copy the token (starts with `ghp_...`) - you won't see it again!

### Step 2: Add Token to Vercel

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project: `msireneesl`
3. Go to: Settings → Environment Variables
4. Add a new variable:
   - **Name**: `GITHUB_TOKEN`
   - **Value**: Paste your token (ghp_...)
   - **Environment**: Check all (Production, Preview, Development)
5. Click "Save"
6. Go to Deployments tab → Click "..." on latest deployment → "Redeploy"

### Step 3: (Optional) Change Admin Password

Edit `src/app/admin/page.tsx` and find this line:
```typescript
if (password === 'irene2024') {
```

Change `'irene2024'` to your preferred password.

## Using the Admin Page

### Creating a Blog Post

1. **Go to**: `https://msireneesl.vercel.app/admin`
2. **Login** with your password
3. **Fill in the form**:
   - **Title**: Your blog post title
   - **Category**: Choose from dropdown
   - **Excerpt**: (Optional) Short summary
   - **Content**: Your blog post content
4. **Click "Publish"**
5. **Wait 1-2 minutes** for Vercel to rebuild your site
6. **Done!** Visit your blog to see the new post

### Content Formatting

You can use Markdown formatting in the content:

```markdown
## Headings
Use ## for headings

**Bold text**
Use **bold** for emphasis

*Italic text*
Use *italic* for emphasis

- Bullet points
- Another point

1. Numbered lists
2. Another item

[Links](https://example.com)
Use [text](url) for links
```

## Features

✅ **Simple Interface**: Just enter title and content
✅ **Auto-Generated**: Slug, date, and read time are automatic
✅ **Password Protected**: Only you can access
✅ **Mobile Friendly**: Works on phone, tablet, or computer
✅ **Instant Publishing**: Direct to GitHub, auto-deploys

## Automatic Features

- **Slug**: Automatically generated from title (e.g., "My Post" → `my-post.md`)
- **Date**: Today's date added automatically
- **Excerpt**: Uses your excerpt or first 150 characters of content
- **Read Time**: Calculated automatically based on word count
- **Sorting**: Posts automatically sorted newest first

## Troubleshooting

### "Failed to create blog post"
- Check that your GitHub token is set in Vercel
- Make sure the token has `repo` permissions
- Verify the token hasn't expired

### Post not showing up
- Wait 1-2 minutes for Vercel to rebuild
- Check Vercel deployments to ensure build succeeded
- Verify the post was created in GitHub repository

### Can't login to admin
- Check your password in `src/app/admin/page.tsx`
- Default password is `irene2024`

### Post already exists with same title
- The system will update the existing post
- Or use a different title to create a new post

## Security Notes

- The admin page is password protected
- GitHub token is stored securely in Vercel environment variables
- Token is never exposed to the client
- Change the default password immediately
- Consider using a strong, unique password

## Alternative Method

If you prefer, you can still add posts via GitHub web interface:
- Go to: https://github.com/anandfrancis93/msireneesl/tree/main/content/blog
- Click "Add file" → "Create new file"
- See `BLOG_SETUP.md` for details

## Need Help?

- Check Vercel deployment logs if posts aren't publishing
- Verify GitHub token has correct permissions
- Make sure `.env.local` is not committed to GitHub (it's in `.gitignore`)
