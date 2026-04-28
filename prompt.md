# PORTFOLIO TITOUAN MURE — Prompt de continuité

> Donne ce fichier à Claude si la conversation disparaît pour reprendre exactement là où on en est.

---

## IDENTITÉ

- **Nom** : Titouan MURE (sans accent — jamais MURÉ)
- **Email** : mure.titouan@gmail.com
- **LinkedIn** : https://www.linkedin.com/in/titouan-mure-adminsys/
- **Né le** : 27/07/2005 à Saint-Étienne (42)
- **Tél** : 06 12 74 25 67 · Permis B

---

## FORMATION & SITUATION

- BUT Informatique DACS — IUT de Metz (Université de Lorraine) · Promo 2023–2026
- Stage au Département de la Loire (CD42) — DSI Réseau & Infrastructure · Fév–Juin 2026 · Tuteur : Denis Chabrière
- Futur étudiant CESI · Mastère Management des Infrastructures & Cybersécurité des SI (Bac+5) · Alternance Septembre 2026

---

## STRUCTURE DU PORTFOLIO

```
portfolio/
├── index.html                  <- Page d'accueil
├── projets.html                <- Galerie des projets
├── CONTINUITY.md               <- Ce fichier
├── css/
│   ├── style.css               <- CSS global Apple-inspired
│   └── index.css               <- CSS spécifique index.html
├── js/
│   ├── main.js                 <- JS global (reveal scroll, nav)
│   └── index.js                <- JS spécifique index.html
├── images/
│   ├── photo.jpg               <- Photo de Titouan
│   ├── cv.pdf                  <- CV
│   └── lettre-motivation.pdf   <- Lettre de motivation
└── projets/
    ├── zabbix/                 <- Stage CD42 · Fév–Juin 2026
    ├── optimisation-infra/     <- SAE S6 · 2025–2026
    ├── active-directory/       <- SAE S5 · 2025–2026
    ├── infra-securise/         <- SAE S4 · 2024–2025
    ├── fitpick/                <- SAE S3 · 2024–2025
    ├── mini-jeux/              <- SAE S1 · 2023–2024
    ├── memoryx/                <- SAE S1 · 2023–2024
    ├── backup-script/          <- SAE S1 · 2023–2024
    └── bdd-entreprise/         <- SAE S1 · 2023–2024
```

Chaque dossier projet contient :
```
[projet]/
├── [projet].html
├── css/style.css
├── js/main.js
└── images/
```

---

## DESIGN — RÈGLES ABSOLUES

- Style **Apple-inspired** : fond blanc/gris clair, bleu `#0071e3`, typographie épurée, espaces généreux
- Animations subtiles au scroll (classe `.reveal` + IntersectionObserver dans `js/main.js`)
- 100% responsive mobile/tablette/desktop
- **Jamais MURÉ** — toujours **MURE** sans accent

---

## RÈGLES DE CODAGE

1. CSS toujours dans `css/style.css` (jamais inline sauf exceptions autonomes)
2. Fichiers CSS nommés `style.css`, fichiers JS nommés `main.js`
3. Ne jamais donner de ZIP — toujours les fichiers individuels
4. Toujours préciser où placer chaque fichier
5. Les pages projet sont à 2 niveaux de profondeur (`../../`) pour remonter à la racine

---

## NAV — RÈGLE ABSOLUE sur toutes les pages

**En haut à gauche** : photo ronde + nom "Titouan MURE" — clic = ouvre le CV en popup modal centré avec croix pour fermer.

**En haut à droite** : bouton "Contact" bleu — clic = ouvre un popup centré avec deux choix : Email et LinkedIn.

> Les popups des pages projet sont **autonomes** (CSS embarqué dans un `<style>` dans le HTML)
> car les CSS locaux peuvent écraser les variables du style.css global.

### Code nav standard pour une page projet :

```html
<nav class="nav">
  <button class="nav-logo-photo" onclick="openCvFromNav()" title="Voir mon CV">
    <img src="../../images/photo.jpg" alt="Titouan MURE" class="nav-avatar" />
    <span class="nav-avatar-name">Titouan MURE</span>
  </button>
  <ul class="nav-links">
    <li><a href="../../index.html">Accueil</a></li>
    <li><a href="../../projets.html">Projets</a></li>
    <li><button class="nav-cta" onclick="openNavContact()">Contact</button></li>
  </ul>
</nav>
```

### Les deux blocs autonomes à inclure avant `</body>` sur chaque page projet :

**1. Popup CV** (`openCvFromNav()` / `closeNavCv()`) :
```html
<!-- MODAL CV NAV -->
<style>
  #navCvModal {
    display: none; position: fixed; inset: 0; z-index: 9999;
    background: rgba(0,0,0,0.6); backdrop-filter: blur(10px);
    align-items: center; justify-content: center; padding: 20px;
  }
  #navCvModal.open { display: flex; }
  #navCvModal .ncv-box {
    background: #fff; border-radius: 20px; width: 100%; max-width: 820px;
    max-height: 92vh; overflow: hidden; display: flex; flex-direction: column;
    box-shadow: 0 20px 60px rgba(0,0,0,0.25);
    animation: ncvIn 0.3s cubic-bezier(0.34,1.56,0.64,1);
  }
  @keyframes ncvIn {
    from { opacity:0; transform: scale(0.95) translateY(10px); }
    to   { opacity:1; transform: scale(1) translateY(0); }
  }
  #navCvModal .ncv-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 24px; border-bottom: 1px solid #e8e8ed;
  }
  #navCvModal .ncv-title { font-size: 1rem; font-weight: 600; color: #1d1d1f; }
  #navCvModal .ncv-close {
    width: 30px; height: 30px; border-radius: 50%; background: #f5f5f7;
    border: none; cursor: pointer; font-size: 1rem; display: flex;
    align-items: center; justify-content: center; color: #424245; font-family: inherit;
  }
  #navCvModal .ncv-close:hover { background: #d2d2d7; }
  #navCvModal iframe { width: 100%; height: 78vh; border: none; display: block; }
</style>
<div id="navCvModal" onclick="closeNavCv()">
  <div class="ncv-box" onclick="event.stopPropagation()">
    <div class="ncv-header">
      <span class="ncv-title">CV — Titouan MURE</span>
      <button class="ncv-close" onclick="closeNavCv()">✕</button>
    </div>
    <iframe src="../../images/cv.pdf" title="CV Titouan MURE"></iframe>
  </div>
</div>
<script>
  function openCvFromNav() {
    document.getElementById('navCvModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeNavCv() {
    document.getElementById('navCvModal').classList.remove('open');
    document.body.style.overflow = '';
  }
</script>
```

**2. Popup Contact** (`openNavContact()` / `closeNavContact()`) :
```html
<!-- POPUP CONTACT NAV -->
<style>
  #navContactOverlay {
    display: none; position: fixed; inset: 0; z-index: 9998;
    background: rgba(0,0,0,0.45); backdrop-filter: blur(8px);
    align-items: center; justify-content: center;
  }
  #navContactOverlay.open { display: flex; }
  #navContactOverlay .ncp-box {
    background: #fff; border-radius: 20px; padding: 32px 28px 24px;
    width: 100%; max-width: 360px; position: relative;
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    animation: ncpIn 0.3s cubic-bezier(0.34,1.56,0.64,1);
  }
  @keyframes ncpIn {
    from { opacity:0; transform:scale(0.92) translateY(12px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  #navContactOverlay .ncp-close {
    position: absolute; top: 14px; right: 14px;
    width: 28px; height: 28px; border-radius: 50%;
    background: #f5f5f7; border: none; cursor: pointer;
    font-size: 0.9rem; display: flex; align-items: center;
    justify-content: center; color: #424245; font-family: inherit;
  }
  #navContactOverlay .ncp-close:hover { background: #d2d2d7; }
  #navContactOverlay .ncp-title { font-size: 18px; font-weight: 700; color: #1d1d1f; margin-bottom: 6px; }
  #navContactOverlay .ncp-sub { font-size: 13px; color: #6e6e73; margin-bottom: 24px; }
  #navContactOverlay .ncp-item {
    display: flex; align-items: center; gap: 16px;
    padding: 14px 16px; border-radius: 14px; text-decoration: none;
    color: #1d1d1f; border: 1px solid #e8e8ed; background: #fbfbfd;
    margin-bottom: 10px; transition: all 0.2s;
  }
  #navContactOverlay .ncp-item:last-child { margin-bottom: 0; }
  #navContactOverlay .ncp-item:hover {
    background: #e8f0fe; border-color: rgba(0,113,227,0.3);
    transform: translateY(-2px);
  }
  #navContactOverlay .ncp-icon {
    width: 40px; height: 40px; border-radius: 12px;
    background: #e8f0fe; color: #0071e3;
    display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0;
  }
  #navContactOverlay .ncp-label { font-size: 14px; font-weight: 600; color: #1d1d1f; }
  #navContactOverlay .ncp-val { font-size: 12px; color: #6e6e73; margin-top: 2px; }
</style>
<div id="navContactOverlay" onclick="closeNavContact()">
  <div class="ncp-box" onclick="event.stopPropagation()">
    <button class="ncp-close" onclick="closeNavContact()">✕</button>
    <div class="ncp-title">Me contacter</div>
    <div class="ncp-sub">Choisissez comment vous souhaitez me joindre</div>
    <a href="mailto:mure.titouan@gmail.com" class="ncp-item" onclick="closeNavContact()">
      <div class="ncp-icon">📧</div>
      <div>
        <div class="ncp-label">Email</div>
        <div class="ncp-val">mure.titouan@gmail.com</div>
      </div>
    </a>
    <a href="https://www.linkedin.com/in/titouan-mure-adminsys/" target="_blank" class="ncp-item" onclick="closeNavContact()">
      <div class="ncp-icon">in</div>
      <div>
        <div class="ncp-label">LinkedIn</div>
        <div class="ncp-val">titouan-mure-adminsys</div>
      </div>
    </a>
  </div>
</div>
<script>
  function openNavContact() {
    document.getElementById('navContactOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeNavContact() {
    document.getElementById('navContactOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { closeNavContact(); closeNavCv(); }
  });
</script>
```

---

## ORDRE DES PROJETS (du plus récent au plus ancien)

| # | Projet | SAE / Contexte | Période |
|---|--------|---------------|---------|
| 1 | Supervision & Administration réseau (Zabbix) | Stage CD42 | Fév–Juin 2026 |
| 2 | Optimisation Infrastructure (AD/DNS/GPO) | SAE S6 | 2025–2026 |
| 3 | Active Directory | SAE S5 | 2025–2026 |
| 4 | Infrastructure Virtualisée & Sécurisée | SAE S4 | 2024–2025 |
| 5 | FitPick (full-stack React/Spring Boot) | SAE S3 | 2024–2025 |
| 6 | Mini Jeux en C | SAE S1 | 2023–2024 |
| 7 | Memoryx (Memory + bot IA) | SAE S1 | 2023–2024 |
| 8 | Sauvegarde Automatique (Bash/crontab) | SAE S1 | 2023–2024 |
| 9 | BDD Entreprise (Merise/MySQL) | SAE S1 | 2023–2024 |

---

## POUR AJOUTER UN NOUVEAU PROJET

1. Créer `portfolio/projets/[nom-projet]/` avec `[nom-projet].html`, `css/style.css`, `js/main.js`, `images/`
2. Utiliser le **nav standard** ci-dessus (adapter les chemins `../../` si nécessaire)
3. Inclure les **deux blocs popup autonomes** (CV + Contact) avant `</body>`
4. Ajouter la **carte du projet** dans `projets.html` en respectant l'ordre chronologique
5. Ajouter une **carte aperçu** dans la section "Mes réalisations" de `index.html`
6. Mettre à jour `css/style.css` global pour le style de la nouvelle carte

---

## HÉBERGEMENT

Le portfolio est hébergé sur **Render.com** (plan gratuit).
- Repo GitHub : `zerix-exe/portfolio` (à vérifier)
- Lien : `https://[nom].onrender.com`
- Tout commit sur la branche `main` déclenche un redéploiement automatique

---

*Fichier généré lors de la session de construction du portfolio — Avril 2026*
