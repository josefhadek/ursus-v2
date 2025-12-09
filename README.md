# 🏕️ URSUS V2 - Webový redesign VLK Ursus

Tento repozitář obsahuje statický export webové aplikace, původně vytvořené v **Next.js**, určené pro VLK Ursus

## 🚀 Nasazení (Deployment)

Projekt je nasazen jako **Statická stránka** pomocí **GitHub Pages** a je dostupný na vlastní subdoméně.

| Služba | Adresa | Stav |
| :--- | :--- | :--- |
| **GitHub Repozitář** | `https://github.com/josefhadek/ursus-v2` | Kód |
| **Živý Web** | `https://ursus-v2.josefhadek.cz/` | Produkční URL |

## 🛠️ Technologie

* **Framework:** Next.js (Statický export)
* **Stylování:** Tailwind CSS
* **Nasazení:** GitHub Pages + GitHub Actions

## ⚙️ Jak projekt funguje na Pages

Projekt využívá **GitHub Actions** k automatickému sestavení (Build) statických souborů po každém pushnutí do větve `main`.

1.  Změny v kódu se nahrají do větve `main`.
2.  GitHub Action spustí `pnpm run build` a provede statický export (`output: 'export'`).
3.  Výsledné statické soubory ze složky `out` se nahrají na GitHub Pages.

---

## 🛑 POZOR: Vercel / v0.app

Původní nastavení repozitáře, které bylo spojeno se službami **Vercel** a **v0.app**, je **neaktivní**. Projekt je spravován a nasazován výhradně přes **GitHub Pages**.
