# How to Add Blog Posts

## Creating a New Blog Post

1. Create a new file in this folder (`content/blog/`) with a `.md` extension
2. The filename should be lowercase with hyphens (e.g., `my-blog-post.md`)
3. Add the following at the top of the file:

```markdown
---
title: "Your Blog Post Title"
date: "2024-03-20"
category: "Category Name"
excerpt: "A brief description of your blog post (optional)"
---

Write your blog content here using Markdown formatting.

## You can use headings

- Bullet points
- More points

**Bold text** and *italic text*

[Links](https://example.com)

And more!
```

## Important Notes

- The date format must be: YYYY-MM-DD (e.g., "2024-03-20")
- Posts are automatically sorted by date (newest first)
- Read time is calculated automatically
- Excerpt is optional - if not provided, first 150 characters are used
- All fields in the `---` section are required except `excerpt`

## Example

See the existing `.md` files in this folder for examples.
