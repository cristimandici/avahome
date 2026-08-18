# AvaHome — presentation website

Static presentation site for AvaHome premium modular homes:

- **Movable Cottage** — mirror-facade modular home that melts into the landscape
- **House Boat** — modular floating home on a pontoon structure

## Structure

```
index.html            — homepage (models, benefits, process, contact)
movable-cottage.html  — Movable Cottage model page (photos, videos, renders)
house-boat.html       — House Boat model page (renders)
assets/css/style.css  — premium dark monochrome theme
assets/js/main.js     — nav, reveal animations, gallery lightbox
assets/img/           — optimized photography and renders
assets/video/         — real footage tours
```

## Run locally

No build step — open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Publishing

Being fully static, the site deploys directly to GitHub Pages, Netlify,
Vercel or any web host.

## Still to fill in

- Real contact details (phone, email) in `index.html`
- Exact specifications and pricing in the model spec tables
