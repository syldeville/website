# Syldeville Studio

Personal site for Sylvia: a showcase of the apps she's made, her sewing
projects and her music (coming soon). Built with [Astro](https://astro.build) and hosted free on
GitHub Pages.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
```

## Edit content

| What | Where |
|---|---|
| Site name, Web3Forms key, GitHub link | `src/site.ts` |
| Homepage text | `src/pages/index.astro` |
| Apps | `src/content/apps/*.md` (one file per app; `featured: true` puts it on the homepage) |
| App screenshots | `public/apps/`, referenced as `image: apps/screenshot.png` |
| Sewing projects | `src/content/sewing/*.md` (one file per project) |
| Sewing photos | `public/sewing/`, referenced as `image: sewing/photo.jpg` |
| Music page | `src/pages/music.astro` |
| Colors, light and dark themes | `src/styles/global.css` (the tokens at the top) |

### Add an app

Make a new file in `src/content/apps/`, for example `budget-buddy.md`:

```md
---
title: Budget Buddy
kind: iOS app
date: 2026-08-01
summary: One sentence about what it does.
tech: [Swift, SwiftUI]
url: https://apps.apple.com/...      # optional "Try it" button
repo: https://github.com/syldeville/... # optional "Source code" button
image: apps/budget-buddy.png
imageAlt: The Budget Buddy home screen
featured: true                       # show on the homepage (up to 3)
---

What it does, why you made it, what you're proud of.
```

Delete the `example-app-*.md` files once you've added real ones.

### Add a sewing project

Make a new file in `src/content/sewing/`, for example `linen-shirt.md`:

```md
---
title: Linen shirt
category: Garments        # Garments, Costumes, Accessories or Home
date: 2026-10-01
pattern: "Pattern name"
fabric: "Washed linen"
summary: One sentence about it.
image: sewing/linen-shirt.jpg
imageAlt: A blue linen shirt on a dress form
---

Notes about the project.
```

Delete the three `example-*.md` files once you've added real ones.

### Connect the contact form

The contact and music sign-up forms use [Web3Forms](https://web3forms.com),
which is free. Enter the email address you want messages sent to, then paste
the access key it gives you into `web3formsKey` in `src/site.ts`. The key is
safe to make public.

## Deploying

Every push to `main` builds and deploys the site with
`.github/workflows/deploy.yml`. One-time setup: in the repository's
**Settings**, open **Pages** and set **Source** to **GitHub Actions**.

The site lives at https://syldeville.github.io/website/. To use your own
domain instead, see [DOMAINS.md](DOMAINS.md).
