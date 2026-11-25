// Veškeré texty webu na jednom místě.
// Data o ročníku 2027 převzata z ursus.skauting.cz (listopad 2026).
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
  cekatelka21:
    'https://zpravodajstvi.skaut.cz/clanek/zkuseni-uchazeci-o-vudcovskou-zkousku-starsi-21-let-nove-nemusi-mit-cekatelskou-zkousku-rozdilova-zkouska-byla-zrusena-novelou-smernice-k-obsahu-vybranych-cinovnickych-kvalifikaci',
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
  lead: 'Kurz pro budoucí vůdkyně a vůdce oddílů Junáka – českého skauta.',
}

export const facts = [
  { label: 'Přihlašování', value: '4.–10. 1. 2027' },
  { label: 'Kapacita', value: '26 účastnic a účastníků' },
  { label: 'Cena', value: 'cca 4 500 Kč' },
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
  title: 'Cesta Ursu',
  lead: 'Kurz i naše stezka jsou rozdělené do osmi kapitol. Za každou splněnou kapitolu dostaneš nálepku – se všemi osmi (a dalšími podmínkami podle Řádu pro vzdělávání, např. ZZA) máš nárok na vůdcovskou kvalifikaci.',
  items: [
    {
      slug: 'myslenkove',
      title: 'Myšlenkové základy a historie skautingu',
      bg: '#f7e9f4',
      ink: '#5b3a6e',
      questions: ['Co vlastně dělá skauting skautingem?', 'Z jakých kořenů, hodnot a zásad vychází?', 'Jaké je jeho postavení a role v současné společnosti?'],
    },
    {
      slug: 'metodika',
      title: 'Metodika',
      bg: '#dfedd5',
      ink: '#2f5a22',
      questions: ['Jak tvořit činnost oddílu tak, aby moje členy všestranně rozvíjel, vedl je k samostatnosti a sebevýchově?', 'Jak pracovat s přírodou, družinovým systémem, stezkami, službou, rituály?'],
    },
    {
      slug: 'administrativa',
      title: 'Administrativa a zajištění',
      bg: '#fbe5d8',
      ink: '#7a3f14',
      questions: ['Jak postavit a zajistit letní tábor?', 'Jak odevzdat registraci nebo hlášenku?', 'K čemu je mi středisko?', 'Jak sestavit rozpočet a vyúčtovat akci?'],
    },
    {
      slug: 'prevence',
      title: 'Prevence a zvládání krizových situací',
      bg: '#fad7d7',
      ink: '#8a1f1a',
      questions: ['Jak předcházet šrámům na těle i na duši?', 'Co dělat, abych se nemusel/a bát, že skončím ve vězení?', 'Jak jednat v okamžicích krize?', 'Jak poskytnout první pomoc?'],
    },
    {
      slug: 'spoluprace',
      title: 'Spolupráce a vedení',
      bg: '#d3e2f5',
      ink: '#1f4778',
      questions: ['Jak dobře vést oddílovou radu i celý oddíl?', 'Jak mu dát vizi a směr?', 'Jak podporovat motivaci?', 'Jak komunikovat s rodiči, rovery, úředníky?'],
    },
    {
      slug: 'planovani',
      title: 'Plánování',
      bg: '#cfe9e9',
      ink: '#1d5c58',
      questions: ['Jak určit cíle činnosti oddílu?', 'Jak je uvést do reality?', 'Jak odhadnout realisticky možnosti své i oddílu?', 'Kdy se držet plánu a kdy improvizovat?'],
    },
    {
      slug: 'seberozvoj',
      title: 'Seberozvoj',
      bg: '#f7efd7',
      ink: '#6a5410',
      questions: ['Čím můžu oddíl obohatit a na co nestačím?', 'Co mi skauting dává a co bere?', 'Mám na to?', 'Jak získám a dám dobrou zpětnou vazbu?'],
    },
    {
      slug: 'pedagogika',
      title: 'Pedagogika a psychologie',
      bg: '#fbe3f0',
      ink: '#7c2456',
      questions: ['Jaké jsou dnešní děti, čím se liší v různém věku a napříč pohlavími?', 'Čím je každý člověk jedinečný?', 'Jak pracovat s lidmi se speciálními potřebami?'],
    },
  ],
}

export const stezkaPreview = {
  cta: 'Prolistuj ukázku stezky',
  note: 'Cesta Ursu 2026 · 3 ukázkové strany',
  pages: [
    { src: '/stezka/obalka.webp', alt: 'Obálka stezky Cesta Ursu 2026' },
    { src: '/stezka/predstaveni.webp', alt: 'Strana Představení stezky a příznaky úkolů' },
    { src: '/stezka/ukazka-ukolu.webp', alt: 'Ukázka úkolů z kapitoly Myšlenkové základy a historie skautingu' },
  ],
}

export const registration = {
  title: 'Přihláška ve dvou krocích',
  textBefore: 'Přihlašování probíhá',
  deadline: 'od 4. 1. 2027 12:00 do 10. 1. 2027 12:00',
  textAfter: '. Na pořadí přihlášení nezáleží.',
  steps: [
    { title: 'Přihlas se ve SkautISu', text: 'Bez přihlášky ve SkautISu tě do losování nezařadíme.', cta: 'Vyplň SkautIS', href: links.skautis },
    { title: 'Vyplň analýzu oddílu', text: 'Vstupní úkol. Dotazník můžeš vyplnit už před začátkem přihlašování.', cta: 'Vyplň analýzu', href: links.analyza },
  ],
  notes: [
    'Po konci přihlašování účastníky náhodně losujeme. Uchazeče, kteří už dříve na vůdcovský kurz nebyli přijati, v losování zohledňujeme.',
    'Přijmeme 26 účastnic a účastníků. Snažíme se o vyrovnaný poměr dívek a chlapců (nejvýš 16:10) a můžeme omezit počet lidí z jednoho střediska, pokud by jich bylo víc než 3.',
  ],
}

export const dates = {
  title: `Termíny běhů ${ROCNIK}`,
  items: [
    { label: 'Jarní víkend', date: '12.–14. 3. 2027', place: 'Nymburk (Tortuga)', map: 'https://mapy.com/s/gevahanovu', tone: 'okr' as const },
    { label: 'Letní část', date: '13.–22. 8. 2027', place: 'Chválkov', map: 'https://mapy.com/s/gujazotagu', tone: 'bila' as const },
    { label: 'Podzimní víkend', date: '17.–19. 9. 2027', place: 'Trutnov', map: 'https://mapy.com/s/jebomefusa', tone: 'bila' as const },
  ],
  warning:
    'Kurz je postavený tak, abys požadavky k vůdcovské zkoušce splnil/a na konci letní části. Velká část samostatné práce proto probíhá mezi jarní a letní částí – zrovna když bývají maturity. Zvaž prosím své časové možnosti.',
}

export const conditions = [
  {
    title: 'Kdo se může přihlásit',
    text: 'Členky a členové Junáka narození před 18. 9. 2009 se složenou čekatelskou zkouškou. Pokud je ti přes 21, čekatelku mít nemusíš. Kurz se zaměřuje na vedení světlušek, vlčat, skautek a skautů, jiné zaměření ale nevadí.',
    link: { href: links.cekatelka21, label: 'Proč 21+ nepotřebuje čekatelku' },
  },
  {
    title: 'Podmínky absolvence',
    text: 'Aktivní účast na všech částech kurzu (čl. 151 ŘVČČJ). Kvalifikace zdravotníka nebo první pomoci není podmínkou přihlášení, ale až složení vůdcovské zkoušky (čl. 76 ŘVČČJ).',
    link: { href: links.rad, label: 'Řád pro vzdělávání činovnic a činovníků' },
  },
  {
    title: 'Cena',
    text: 'Přibližně 4 500 Kč. Účastnický poplatek je nevratný, v případě nemoci se domluvíme individuálně.',
  },
]

export const team = {
  title: 'Tým Ursu',
  lead: 'Klikni na fotku a přečti si víc.',
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
    q: 'Nemám čekatelskou zkoušku. Můžu se přihlásit?',
    a: 'Pokud je ti přes 21, ano – u zkušenějších uchazečů lze z dosavadního působení předpokládat naplnění kompetencí čekatelky.',
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
