# Shiyang Pan — research hub

Source for [waaaaaterfall.github.io](https://WaAaaAterfall.github.io). Plain HTML and CSS, no build step.

## Layout

- `index.html` — the whole home page: intro, research, publications, background, contact
- `research/*.html` — longer notes for individual projects (copy `glow-splat.html` to start a new one)
- `assets/css/style.css` — all styling; colours are the variables at the top
- `assets/img/`, `assets/pdf/cv.pdf` — photo, figures, CV

## Adding a project

In `index.html`, copy an `<article class="project">` block under **Research**.
Give it the class `ongoing` while it's active (filled dot), and move it under "Earlier" when it's done.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Pushing to `master` deploys to the `gh-pages` branch via `.github/workflows/deploy.yml`.
