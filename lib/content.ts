// Veškeré texty webu na jednom místě.
// Hodnoty v [HRANATÝCH ZÁVORKÁCH] jsou placeholdery – doplnit před spuštěním.

export const ROCNIK = 2027

export const links = {
  skautis: 'https://is.skaut.cz',
  // TODO: odkaz na formulář Analýza oddílu pro 2027 (ve v2 byl neplatný placeholder)
  analyza: '#prihlaska',
  zonerama: 'https://ursusvlk.zonerama.com/',
  facebook: 'https://www.facebook.com/vlk.ursus/',
  email: 'ursus@skaut.cz',
  rad: 'https://krizovatka.skaut.cz/spisovna/rady/rad-pro-vzdelavani-cinovnic-a-cinovniku',
}

export const nav = [
  { href: '#o-kurzu', label: 'O kurzu' },
  { href: '#kapitoly', label: 'Kapitoly' },
  { href: '#prihlaska', label: 'Přihláška' },
  { href: '#terminy', label: 'Termíny' },
  { href: '#tym', label: 'Tým' },
  { href: '#faq', label: 'Časté otázky' },
]

export const hero = {
  badge: `Vůdcovský kurz · ${ROCNIK}`,
  titleStart: 'Vůdcovský kurz',
  titleAccent: 'Ursus',
  lead: 'Kurz pro budoucí vůdkyně a vůdce oddílů Junáka – českého skauta. Na konci tě čeká vůdcovská zkouška.',
}

export const facts = [
  { label: 'Přihlašování', value: 'začátkem ledna' },
  { label: 'Kapacita', value: '26 účastnic a účastníků' },
  { label: 'Cena', value: '[CENA] Kč' },
  { label: 'Pořádá', value: 'Junák – český skaut, kraj Praha' },
]

export const about = {
  title: 'O kurzu',
  paragraphs: [
    'Vůdcovský lesní kurz Ursus jsou pohodové vůdcovky plné kreativních programů, na kterých se snažíme předávat nejen obsah, ale také formu. Nenajdeš u nás nudné přednášky. Velký prostor dáváme pro vzájemné sdílení vašich otázek, problémů a jejich možných řešení.',
  ],
  highlight: 'Náš kurz nemá zkoušky, máme totiž svou stezku, po jejíž splnění máš zkoušku hotovou!',
}

export const pillars = [
  {
    title: 'Stezka místo zkoušky',
    image: '/images/stezka.webp',
    text: 'Na konci našeho kurzu nenajdeš zkouškový víkend. Vůdcovské kompetence ověřujeme průběžně pomocí vlastní přehledné stezky Cesta Ursu rozdělené do několika kapitol.',
  },
  {
    title: 'Kreativní programy',
    image: '/images/programy.webp',
    text: 'Na Ursu se snažíme předávat nejen obsah, ale také formu. Nenajdete u nás proto nudné přednášky, ale často si budete věci přímo zkoušet a osahávat reálně, nebo v rámci uměle vytvořeného prostředí.',
  },
  {
    title: 'Sdílení',
    image: '/images/sdileni.webp',
    text: 'Víme, že jsi dospělý/á a mnohdy již fungující vůdce, a proto dáváme na kurzu velký prostor i pro vzájemné sdílení vašich otázek, problémů a jejich možných řešení.',
  },
  {
    title: 'Pohoda',
    image: '/images/pohoda.webp',
    text: 'Pohodu na kurzu vytváříme otevřeností, sdílením, ale také volným prostorem určeným pro to, co zrovna každý z účastníků potřebuje – např. zamyšlení, srovnání myšlenek, dohnání restů.',
  },
]

export const chapters = {
  title: 'Tři kapitoly, jeden tým',
  lead: 'Co tě na kurzu čeká a kdo tě tím provede.',
  items: [
    { n: 1, title: 'Spolupráce a vedení', text: 'Jak vést tým, dávat zpětnou vazbu a nepřetáhnout to.', tone: 'palena' as const },
    { n: 2, title: 'Metodika', text: 'Program, který děti baví a něco jim dá.', tone: 'okr' as const },
    { n: 3, title: 'MZHS', text: '[POPIS KAPITOLY]', tone: 'serik' as const },
  ],
}

export const registration = {
  title: 'Přihláška ve dvou krocích',
  textBefore: 'Registrace se otevírá začátkem ledna. Účast potvrď do',
  deadline: '24. 1.',
  textAfter: ', ať se vidíme na týmovce. Je jedno, v jakém pořadí.',
  steps: [
    { title: 'Vyplň analýzu oddílu', text: 'Vstupní úkol. Dotazník můžeš vyplnit už před začátkem přihlašování.', cta: 'Vyplň analýzu', href: links.analyza },
    { title: 'Přihlas se ve SkautISu', text: 'Bez přihlášky ve SkautISu tě do losování nezařadíme.', cta: 'Vyplň SkautIS', href: links.skautis },
  ],
  notes: [
    'Na pořadí přihlášení nezáleží.',
    'Po konci přihlašování účastníky náhodně losujeme.',
    'Kvůli vyváženosti můžeme omezit počet lidí z jednoho střediska nebo poměr pohlaví.',
  ],
}

export const dates = {
  title: `Termíny běhů ${ROCNIK}`,
  items: [
    { label: 'Týmovka', date: '[TERMÍN]', place: '[MÍSTO]', tone: 'okr' as const },
    { label: 'Jarní víkend', date: '[TERMÍN]', place: '[MÍSTO]', tone: 'bila' as const },
    { label: 'Letní běh', date: `Srpen ${ROCNIK}`, place: '[MÍSTO]', tone: 'bila' as const },
  ],
  warning:
    'Kurz je postavený tak, abys požadavky k vůdcovské zkoušce splnil/a na konci letního běhu. Velká část samostatné práce proto probíhá mezi jarní a letní částí – zrovna když bývají maturity. Zvaž prosím své časové možnosti.',
}

export const conditions = [
  {
    title: 'Kdo se může přihlásit',
    text: 'Členky a členové Junáka se složenou čekatelskou zkouškou, narození před [DATUM]. Pokud je ti 21 a víc, čekatelku mít nemusíš.',
  },
  {
    title: 'Podmínky absolvence',
    text: 'Aktivní účast na všech částech kurzu (čl. 151 ŘVČČJ). Kvalifikace zdravotníka nebo první pomoci není podmínkou přihlášení, ale až dokončení vůdcovské zkoušky (čl. 76 ŘVČČJ).',
    link: { href: links.rad, label: 'Řád pro vzdělávání činovnic a činovníků' },
  },
  {
    title: 'Cena',
    text: '[CENA] Kč. Účastnický poplatek je nevratný, v případě nemoci se domluvíme individuálně.',
  },
]

export const team = {
  title: 'Kdo tě kurzem provede',
  lead: 'Klikni na fotku a přečti si víc.',
  note: '[OVĚŘIT: složení týmu a funkce pro 2027 – zatím tým 2026]',
}

export const quotes = [
  {
    text: 'Ursus mi pomohl otevřít neznámé dveře. Před kurzem jsem si neuměla představit, že bych mohla být dobrou vedoucí oddílu. Ursus mě přesvědčil o opaku.',
    who: 'Sára, účastnice Ursu 2025',
  },
  {
    text: 'Hledal jsem kurz, našel jsem rodinku.',
    who: 'Maty, účastník Ursu 2024',
  },
  {
    text: 'Ursus mne naučil, jak být skvělou vedoucí nejen pro děti, ale především pro svůj tým vedoucích.',
    who: 'Účastnice Ursu 2023',
  },
  {
    text: 'Inspirovalo mě zpracování a provedení toho, jak jde programy tvořit skutečně podle skautské výchovné metody.',
    who: 'Účastník Ursu 2023',
  },
]

export const faq = [
  {
    q: 'Záleží na tom, kdy se přihlásím?',
    a: 'Ne. Na pořadí nezáleží – po konci přihlašování účastníky náhodně losujeme. Stačí stihnout oba kroky (SkautIS a analýzu oddílu) v termínu.',
  },
  {
    q: 'Nemám čekatelskou zkoušku. Můžu jet?',
    a: 'Pokud je ti 21 a víc, ano. U starších uchazečů předpokládáme, že kompetence čekatelky naplňují z dosavadního působení.',
  },
  {
    q: 'Potřebuju zdravotnický kurz?',
    a: 'K přihlášení ne. Kvalifikaci zdravotníka nebo první pomoci potřebuješ až k dokončení vůdcovské zkoušky.',
  },
  {
    q: 'Je na konci zkouškový víkend?',
    a: 'Není. Kompetence ověřujeme průběžně přes stezku Cesta Ursu. Kdo ji splní, má zkoušku hotovou.',
  },
  {
    q: 'Kolik času mi kurz zabere mimo jednotlivé běhy?',
    a: 'Počítej se samostatnou prací hlavně mezi jarní a letní částí. Pokud tě zrovna čekají maturity nebo zkouškové, dobře si to naplánuj.',
  },
  {
    q: 'Vrací se poplatek, když nemůžu jet?',
    a: 'Účastnický poplatek je nevratný. V případě nemoci to řešíme individuálně – napiš nám.',
  },
]

export const footer = {
  organizer: ['Junák – český skaut, kraj Praha, z. s.', 'Senovážné náměstí 24', '110 00 Praha 1', 'IČO: 61387959'],
  // TODO: ověřit kontaktní osobu pro 2027
  contactPerson: 'Matylda Kocianová – Matylda',
}
