# Art of Receiving website

Public bilingual website for the shared exhibition series **身接体受 / Art of Receiving**.

- Context repository: parent CITAble workspace one level up
- Remote: `git@github.com:Arcadia-Wellness/art-of-receiving-website.git`
- Locales: `/zh/` (default) and `/en/`
- One-page homepage with poster-component scroll (tree, person, moon, letter, map); artists remain a separate page
- Copy follows audience-split messaging hierarchies in the CITAble `brand/` band

## Commands

```bash
npm install
npm run dev
npm run build
```

`dev` and `preview` bind to `0.0.0.0` for Tailnet access.

## GitHub Pages

`.github/workflows/deploy.yml` builds on push to `main` (and `workflow_dispatch`) and deploys the Astro `dist/` output with GitHub Pages.

Configured project URL: `https://arcadia-wellness.github.io/art-of-receiving-website/`

In the GitHub repo settings, set Pages source to **GitHub Actions**.

## Boundaries

Read `AGENTS.md`. Do not publish medical claims or final waiver text as live legal copy.
