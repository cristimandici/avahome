# AvaHome — site de prezentare

Site static de prezentare pentru casele modulare AvaHome:

- **House Mirror** — casă modulară cu fațadă oglindă, integrată în peisaj
- **House Boat** — casă plutitoare modulară pe structură de ponton

## Structură

```
index.html          — pagina principală (modele, avantaje, proces, contact)
house-mirror.html   — pagina modelului House Mirror
house-boat.html     — pagina modelului House Boat
assets/css/style.css
assets/js/main.js
assets/img/         — ilustrații (de înlocuit cu fotografii reale)
```

## Rulare locală

Nu necesită build — deschide `index.html` în browser sau rulează:

```bash
python3 -m http.server 8000
```

apoi accesează http://localhost:8000.

## Publicare

Fiind un site static, poate fi publicat direct pe GitHub Pages, Netlify,
Vercel sau orice hosting web.

## De înlocuit când există materiale reale

- Ilustrațiile SVG din `assets/img/` cu fotografii/randări reale
- Placeholder-ele din galeriile de pe paginile de model
- Datele de contact (telefon, email) din `index.html`
- Specificațiile exacte (suprafețe, prețuri) din tabelele de pe paginile de model
