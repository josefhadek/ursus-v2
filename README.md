# VLK Ursus – web

Web vůdcovského lesního kurzu **Ursus** Junáka – českého skauta.

- **Ostrý web:** https://ursus.skauting.cz (LebedaHosting)
- **Náhled:** https://ursus-v2.josefhadek.cz (GitHub Pages, schovaný před vyhledávači)

Next.js se statickým exportem: při buildu vznikne čisté HTML, CSS a obrázky, bez databáze a bez serverové logiky.

## Jak udělat změnu

1. Uprav soubory (texty, fotky, viz níže) ve vlastní větvi.
2. Založ pull request do `main`.
3. Po mergi se web sám nasadí na obě adresy, obvykle do minuty.

### Kde co je

| Co měníš | Soubor |
| :-- | :-- |
| Texty webu (úvod, o kurzu, stezka, přihláška, termíny, podmínky, časté otázky, patička) | `lib/content.ts` |
| Tým: instruktoři, kuchaři a MTZ | `lib/team.ts` |
| Fotky týmu, citace a fotky kurzu | `public/images/`, `public/carousel/` |
| Ukázka stezky a medvědi kapitol | `public/stezka/`, `public/medvedi/` |
| Grafiky s citacemi | `components/sections.tsx` (`quoteGraphics`) |
| Název, popis a klíčová slova pro vyhledávače | `lib/site.ts` |
| Barvy, fonty a tlačítka | `app/globals.css` |

Fotky ukládej jako `.webp`, nejvýš asi 800 px na šířku. Web je tak rychlý a nahrávání malé.

## Lokální vývoj

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # statický export do out/
```

Je potřeba Node 20 a pnpm 10.

## Nasazení

Oba workflow se spouští po každém pushi do `main`:

| Workflow | Kam | Poznámka |
| :-- | :-- | :-- |
| `.github/workflows/deploy.yml` | GitHub Pages → ursus-v2.josefhadek.cz | Build s `NEXT_PUBLIC_NOINDEX=1`, aby náhled nekonkuroval ostrému webu |
| `.github/workflows/deploy-lebeda.yml` | FTP → `www/` na LebedaHostingu → ursus.skauting.cz | Potřebuje secret `FTP_PASSWORD` |

Workflow pro LebedaHosting jde spustit i ručně (Actions → „Nasadit na ursus.skauting.cz“ → Run workflow). Ve výchozím nastavení je to **zkušební běh**: jen vypíše obsah složky na serveru a co by se nahrálo.

### Jak funguje hosting na LebedaHostingu

- Soubory se nahrávají přes `lftp` (FTPS). Server vyžaduje znovupoužití TLS session na datovém spojení a běžné FTP akce pro GitHub na tom padají.
- Nahrávání **nic nemaže**. Na serveru tak zůstávají starší složky (`dokumenty/`, `fotky_archiv/` …) i soubory WordPressu.
- Soubory se nahrávají pod dočasným jménem a pak se přejmenují. Nejdřív jdou obrázky, CSS a JS, až potom HTML. Návštěvník tak během nasazení nedostane rozbitou stránku.
- Úvodní stránku obsluhuje přímo `index.html`.
- Ostatní adresy řeší `public/index.php` (přes `public/.htaccess`):
  - `/tym` a další stránky nového webu,
  - staré stránky WordPressu, které nový web nahradil (`/ursus-2027/`, `/tym-ursu/` …), přesměruje 301 na sekce webu,
  - **staré články a archiv** dál obsluhuje původní WordPress, aby fungovaly odkazy z Googlu a odjinud,
  - co nezná ani WordPress, vrátí jako 404 nového webu.

### Proměnné prostředí

| Proměnná | Význam | Výchozí |
| :-- | :-- | :-- |
| `NEXT_PUBLIC_SITE_URL` | Adresa webu (canonical, sitemap, náhledový obrázek) | `https://ursus.skauting.cz` |
| `NEXT_PUBLIC_NOINDEX` | `1` = schovat před vyhledávači | nenastaveno |

## Struktura

```
app/            stránky, layout, metadata, sitemap, robots, globální styly, fonty
components/     sekce webu (sections.tsx) a interaktivní části (odpočet, kapitoly, citace, tým)
lib/            obsah webu (content.ts, team.ts) a nastavení SEO (site.ts)
public/         obrázky, favicony, index.php a .htaccess pro LebedaHosting
```

## Vizuál

- **Paleta** podle Hadky:

  | Barva | Kód |
  | :-- | :-- |
  | krém | `#f7f0e6` |
  | kakao | `#45201f` |
  | okr | `#ee9a2e` |
  | terakota | `#c8603f` |
  | šeřík | `#d7bce6` |
  | máslová | `#f5e3a0` |
  | pálená terakota | `#a04b2b` |
  | písek | `#e9dcc9` |
  | okr světlý | `#fcebcd` |
  | šeřík tmavý | `#7a4e9a` |

  Nikdy nepoužívej okr ani terakotu jako drobný text na krému, bílou na okru ani kakao na terakotě.
- **Fonty:**
  - SKAUT Bold jen na hlavní nadpisy (h1 a h2), umí jen velká písmena.
  - TheMix na všechno ostatní.
  - Oba jsou v `app/fonts`.
