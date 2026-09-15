# Abdallah Namoura — Portfolio

A fast, responsive portfolio for Abdallah Namoura, built as a dependency-free static site and deployed with GitHub Pages.

## Preview locally

```bash
python3 -m http.server 8000 --directory portfolio
```

Then open `http://localhost:8000`.

## Deploy

The included GitHub Actions workflow publishes `portfolio/` after changes reach `main`. If this is the repository's first Pages deployment, open **Settings → Pages** and set **Source** to **GitHub Actions**.

## Structure

- `portfolio/index.html` — content and accessible structure
- `portfolio/styles.css` — responsive visual system
- `portfolio/script.js` — navigation, reveal, and copy-email interactions
- `.github/workflows/deploy-portfolio.yml` — GitHub Pages deployment
