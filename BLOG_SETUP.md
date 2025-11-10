# How to Add Blog Posts

## Adding Blog Posts from ANY Device

You can add blog posts from your phone, tablet, or computer using GitHub's web interface. No setup required!

### Step-by-Step Guide:

1. **Go to your blog folder:**
   - Visit: https://github.com/anandfrancis93/msireneesl/tree/main/content/blog

2. **Click "Add file" → "Create new file"**

3. **Name your file:**
   - Example: `my-first-blog-post.md`
   - Must end with `.md`
   - Use lowercase and hyphens (e.g., `great-teaching-tips.md`)

4. **Copy and paste this template:**

```markdown
---
title: "Your Blog Post Title Here"
date: "2024-03-20"
category: "Teaching"
excerpt: "A brief summary of your blog post"
---

Write your blog content here.

You can use **bold text**, *italic text*, and other formatting.

## Add Headings

- Bullet points
- More points

[Add links](https://example.com)

Write as much or as little as you want!
```

5. **Edit the content:**
   - Change the title to your blog post title
   - Update the date to today's date (format: YYYY-MM-DD)
   - Choose a category (see options below)
   - Write a brief excerpt (1-2 sentences)
   - Write your blog post content below the `---`

6. **Click "Commit changes"** (green button at bottom)
   - Add a commit message like "Add new blog post"
   - Click "Commit changes" again

7. **Wait 1-2 minutes** - Vercel automatically rebuilds your site

8. **Done!** View your blog at https://msireneesl.vercel.app/blog

## Important Information

### Date Format
- **Must be:** `YYYY-MM-DD`
- **Examples:** `2024-03-20`, `2024-12-25`
- **Today's date:** Use the current date

### Categories
Choose one of these categories:
- **Teaching** - General teaching topics
- **Teaching Tips** - Practical classroom strategies
- **Culture** - Cultural awareness and diversity
- **Technology** - EdTech and digital tools
- **Personal** - Personal experiences and stories
- **General** - Other topics

### File Naming
- Use lowercase letters
- Replace spaces with hyphens
- End with `.md`
- **Good:** `my-teaching-journey.md`
- **Bad:** `My Teaching Journey.txt`

## Markdown Formatting Guide

You can use these formatting options in your blog posts:

```markdown
# Large Heading
## Medium Heading
### Small Heading

**Bold text**
*Italic text*

- Bullet point
- Another point

1. Numbered item
2. Another item

[Link to a website](https://example.com)

> This is a quote
```

## Editing Existing Posts

1. Go to: https://github.com/anandfrancis93/msireneesl/tree/main/content/blog
2. Click on the post you want to edit
3. Click the pencil icon (✏️) at the top right
4. Make your changes
5. Click "Commit changes"
6. Wait 1-2 minutes for site to rebuild

## Troubleshooting

**Q: My blog post isn't showing up**
- Wait 1-2 minutes for Vercel to rebuild your site
- Check that the date format is correct (YYYY-MM-DD)
- Make sure the file ends with `.md`
- Verify you committed the changes

**Q: The formatting looks wrong**
- Check that you have `---` before and after the front matter
- Make sure there are no extra spaces in the front matter
- Look at the example posts for reference

**Q: Can I write posts in advance?**
- Yes! Posts are automatically sorted by date (newest first)
- You can create posts with future dates

## Tips

✅ **Do:**
- Write naturally and conversationally
- Use headings to organize your content
- Add bullet points for easy reading
- Include your personal experiences
- Proofread before committing

❌ **Don't:**
- Forget to update the date
- Leave the template title unchanged
- Skip the excerpt (helps readers know what to expect)

## Need Help?

- Check the example posts in the `content/blog/` folder
- See `content/blog/README.md` for quick reference
- All posts automatically sort by date (newest first)
- Read time is calculated automatically based on word count
