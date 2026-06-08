# Jilly Web

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Create a New Blog Post

Blog posts are Markdown files in the `docs` directory. The filename becomes the post slug.

Create a new file:

```txt
docs/my-new-post.md
```

Add frontmatter and Markdown content:

```md
---
title: "My New Post"
excerpt: "Short summary shown in the blog preview."
date: "2026-06-08"
author: "Jilly"
---

Write your post content here in Markdown.

### Section title

More content...
```

Then regenerate the post data:

```bash
pnpm node scripts/generate-posts.mjs
```

The generated file is `src/generated/posts.data.ts`. Do not edit it manually.

The post will be available at:

```txt
/blog/my-new-post
```

## Build

```bash
pnpm build
```

The build runs `scripts/generate-posts.mjs` automatically via the `prebuild` script.

## Deploy to Cloudflare Workers

This project is configured to deploy the Next.js app to Cloudflare Workers with `@opennextjs/cloudflare`.

The important files are:

- `wrangler.jsonc` controls the Cloudflare Worker entrypoint, Worker name, compatibility date, and static assets binding.
- `open-next.config.ts` enables the OpenNext Cloudflare adapter.
- `package.json` contains the `preview`, `deploy`, and `cf-typegen` scripts.

First-time setup:

```bash
pnpm install
pnpm exec wrangler login
```

Preview the Cloudflare Worker locally:

```bash
pnpm preview
```

Deploy to Cloudflare Workers:

```bash
pnpm deploy
```

The deployed Worker name comes from `wrangler.jsonc`:

```jsonc
{
  "name": "jilly-web"
}
```

After deployment, Wrangler will print the deployed Worker URL in the terminal. If you want to use a custom domain, connect it from the Cloudflare dashboard under the deployed Worker settings.

Useful references:

- [Cloudflare Workers Next.js guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/)
- [OpenNext Cloudflare adapter](https://opennext.js.org/cloudflare)
- [Wrangler deploy command](https://developers.cloudflare.com/workers/wrangler/commands/workers/#deploy)
