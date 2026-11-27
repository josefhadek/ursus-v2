// Veškeré texty webu na jednom místě.
// Data o ročníku 2027 převzata z ursus.skauting.cz (listopad 2026).
// Hodnoty v [HRANATÝCH ZÁVORKÁCH] jsou placeholdery – doplnit před spuštěním.

export const ROCNIK = 2027

export const links = {
  skautis: 'https://is.skaut.cz',
  // Kurz Ursus 2027 ve SkautISu – upozornění na spuštění přihlašování
  skautisKurz: 'https://is.skaut.cz/Junak/Events/Education/CourseReminderInsert.aspx?ID_EventEducationCourse=3688&IsLoggedIn=1',
  analyza: 'https://forms.gle/BBJTXdZcRXzCJcwdA',
  zonerama: 'https://ursusvlk.zonerama.com/',
  facebook: 'https://www.facebook.com/vlk.ursus/',
  instagram: 'https://www.instagram.com/vlk_ursus/',
  email: 'ursus@skaut.cz',
  rad: 'https://krizovatka.skaut.cz/spisovna/rady/rad-pro-vzdelavani-cinovnic-a-cinovniku',
  cekatelka21:
    'https://zpravodajstvi.skaut.cz/clanek/zkuseni-uchazeci-o-vudcovskou-zkousku-starsi-21-let-nove-nemusi-mit-cekatelskou-zkousku-rozdilova-zkouska-byla-zrusena-novelou-smernice-k-obsahu-vybranych-cinovnickych-kvalifikaci',
}

export const nav = [
  { href: '#o-kurzu', label: 'O kurzu' },
  { href: '#stezka', label: 'Stezka' },
  { href: '#prihlaska', label: 'Přihláška' },
  { href: '#terminy', label: 'Ročník 2027' },
  { href: '#tym', label: 'Tým' },
  { href: '#faq', label: 'Časté otázky' },
]

export const hero = {
  badge: `Vůdcovský kurz · ${ROCNIK}`,
  titleStart: 'Vůdcovský lesní kurz',
  titleAccent: 'Ursus',
  lead: 'Kurz pro budoucí vůdkyně a vůdce oddílů Junáka – českého skauta.',
  // Štítek přes fotku v úvodu
  label: 'Kurz pro budoucí vůdkyně a vůdce oddílů',
}

export const about = {
  title: 'O kurzu',
  paragraphs: [
    'Vůdcovský lesní kurz Ursus jsou pohodové vůdcovky plné kreativních programů, na kterých se snažíme předávat nejen obsah, ale také formu. Nenajdeš u nás nudné přednášky. Velký prostor dáváme pro **vzájemné sdílení** vašich otázek, problémů a jejich možných řešení.',
  ],
  // Výrazná karta s odkazem na sekci Stezka (zvýraznění podle podkladů od Hadky, varianta „na okru“)
  stezkaLink: { statement: 'Náš kurz nemá zkoušky, máme **svou\u00a0stezku**', text: 'Po jejím splnění máš zkoušku hotovou.', cta: 'Jak stezka funguje', href: '#stezka' },
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
  title: 'Stezka Cesta Ursu',
  lead: 'Náš kurz nemá zkouškový víkend. Vůdcovské kompetence ověřujeme průběžně pomocí stezky Cesta Ursu, která je stejně jako kurz rozdělená do osmi kapitol. Za každou splněnou kapitolu dostaneš nálepku – se všemi osmi (a dalšími podmínkami podle Řádu pro vzdělávání, např. ZZA) máš nárok na vůdcovskou kvalifikaci.',
  items: [
    {
      slug: 'myslenkove',
      title: 'Myšlenkové základy a historie skautingu',
      // kostička podle Hadčiných dvojic barev
      tile: 'bg-serik text-serik-tmavy',
      questions: ['Co vlastně dělá skauting skautingem?', 'Z jakých kořenů, hodnot a zásad vychází?', 'Jaké je jeho postavení a role v současné společnosti?'],
    },
    {
      slug: 'metodika',
      title: 'Metodika',
      // kostička podle Hadčiných dvojic barev
      tile: 'bg-okr text-kakao',
      questions: ['Jak tvořit činnost oddílu tak, aby moje členy všestranně rozvíjel, vedl je k samostatnosti a sebevýchově?', 'Jak pracovat s přírodou, družinovým systémem, stezkami, službou, rituály?'],
    },
    {
      slug: 'administrativa',
      title: 'Administrativa a zajištění',
      // kostička podle Hadčiných dvojic barev
      tile: 'bg-maslova text-kakao',
      questions: ['Jak postavit a zajistit letní tábor?', 'Jak odevzdat registraci nebo hlášenku?', 'K čemu je mi středisko?', 'Jak sestavit rozpočet a vyúčtovat akci?'],
    },
    {
      slug: 'prevence',
      title: 'Prevence a zvládání krizových situací',
      // kostička podle Hadčiných dvojic barev
      tile: 'bg-terakota text-krem',
      questions: ['Jak předcházet šrámům na těle i na duši?', 'Co dělat, abych se nemusel/a bát, že skončím ve vězení?', 'Jak jednat v okamžicích krize?', 'Jak poskytnout první pomoc?'],
    },
    {
      slug: 'spoluprace',
      title: 'Spolupráce a vedení',
      // kostička podle Hadčiných dvojic barev
      tile: 'bg-kakao text-maslova',
      questions: ['Jak dobře vést oddílovou radu i celý oddíl?', 'Jak mu dát vizi a směr?', 'Jak podporovat motivaci?', 'Jak komunikovat s rodiči, rovery, úředníky?'],
    },
    {
      slug: 'planovani',
      title: 'Plánování',
      // kostička podle Hadčiných dvojic barev
      tile: 'bg-okr-svetly text-terakota',
      questions: ['Jak určit cíle činnosti oddílu?', 'Jak je uvést do reality?', 'Jak odhadnout realisticky možnosti své i oddílu?', 'Kdy se držet plánu a kdy improvizovat?'],
    },
    {
      slug: 'seberozvoj',
      title: 'Seberozvoj',
      // kostička podle Hadčiných dvojic barev
      tile: 'bg-palena text-krem',
      questions: ['Čím můžu oddíl obohatit a na co nestačím?', 'Co mi skauting dává a co bere?', 'Mám na to?', 'Jak získám a dám dobrou zpětnou vazbu?'],
    },
    {
      slug: 'pedagogika',
      title: 'Pedagogika a psychologie',
      // kostička podle Hadčiných dvojic barev
      tile: 'bg-bila text-terakota',
      questions: ['Jaké jsou dnešní děti, čím se liší v různém věku a napříč pohlavími?', 'Čím je každý člověk jedinečný?', 'Jak pracovat s lidmi se speciálními potřebami?'],
    },
  ],
}

export const stezkaPreview = {
  cta: 'Prolistuj ukázku stezky',
  note: 'Cesta Ursu 2027 · obálka a 3 ukázkové strany',
  pages: [
    { src: '/stezka/obalka.webp', alt: 'Obálka stezky Cesta Ursu 2027' },
    { src: '/stezka/priroda.webp', alt: 'Ukázka úkolu Příroda z kapitoly Metodika' },
    { src: '/stezka/vzajemne-uceni.webp', alt: 'Ukázka úkolů Vzájemné učení, 2 v 1 a Družinová zpětná vazba z kapitoly Seberozvoj' },
    { src: '/stezka/muj-pokrok.webp', alt: 'Strana Můj pokrok s přehledem kapitol a úkolů' },
  ],
}

export const countdown = {
  // 4. 1. 2027 12:00 a 10. 1. 2027 12:00 středoevropského času (UTC+1)
  start: '2027-01-04T11:00:00Z',
  end: '2027-01-10T11:00:00Z',
  before: { title: 'Přihlašování spouštíme **4.\u00a01.\u00a02027** ve\u00a012:00', counter: 'Do spuštění zbývá', text: 'Přihlášky budeme přijímat do 10. 1. 2027 ve 12:00. Připrav si přístup do SkautISu.' },
  running: { title: 'Přihlašování končí **10.\u00a01.\u00a02027** ve\u00a012:00', counter: 'Do konce zbývá', text: 'Přihlašování na ročník 2027 právě běží – do 10. 1. 2027 ve 12:00 musíš stihnout oba kroky.' },
  over: { title: 'Přihlašování **skončilo**', counter: '', text: 'Přihlašování na ročník 2027 je uzavřené. Děkujeme všem, kdo se přihlásili.' },
  reminder: links.skautisKurz,
}

export const registration = {
  title: 'Přihláška ve dvou krocích',
  intro: 'Přihláška má dva kroky. Oba musíš stihnout do konce přihlašování, na pořadí nezáleží.',
  steps: [
    { title: 'Přihlas se ve SkautISu', text: 'Bez přihlášky ve SkautISu tě do losování nezařadíme.', cta: 'Do SkautISu', href: links.skautisKurz },
    { title: 'Vyplň analýzu oddílu', text: 'Vstupní úkol. Dotazník můžeš vyplnit už před začátkem přihlašování.', cta: 'Vyplnit analýzu', href: links.analyza },
  ],
  after: {
    title: 'Co bude potom',
    items: [
      { label: 'Losování', text: 'Po konci přihlašování účastníky náhodně losujeme. Kdo už dřív na vůdcovský kurz přijatý nebyl, toho v losování zohledňujeme.' },
      { label: '26 míst', text: 'Snažíme se o vyrovnaný poměr dívek a chlapců (nejvýš 16:10).' },
      { label: 'Ze střediska', text: 'Pokud se přihlásí víc než 3 lidé z jednoho střediska, můžeme jejich počet omezit.' },
    ],
  },
}

export const dates = {
  title: `Termíny běhů ${ROCNIK}`,
  items: [
    { label: 'Jarní víkend', date: '12.–14. 3. 2027', place: 'Nymburk (Tortuga)', map: 'https://mapy.com/s/gevahanovu', tone: 'okr' as const },
    { label: 'Letní běh', date: '13.–22. 8. 2027', place: 'Chválkov', map: 'https://mapy.com/s/gujazotagu', tone: 'bila' as const },
    { label: 'Podzimní víkend', date: '17.–19. 9. 2027', place: 'Trutnov', map: 'https://mapy.com/s/jebomefusa', tone: 'bila' as const },
  ],
  warning:
    'Kurz je postavený tak, abys požadavky k vůdcovské zkoušce splnil/a na konci letního běhu. Velká část samostatné práce proto probíhá mezi jarním víkendem a letním během – zrovna když bývají maturity. Zvaž prosím své časové možnosti.',
}

export const conditions = [
  {
    title: 'Kdo se může přihlásit',
    text: 'Členky a členové Junáka – českého skauta narození před 18. 9. 2009 se složenou čekatelskou zkouškou. Pokud je ti přes 21, čekatelku mít nemusíš. Kurz se zaměřuje na vedení světlušek, vlčat, skautek a skautů, jiné zaměření ale nevadí.',
    link: { href: links.cekatelka21, label: 'Proč 21+ nepotřebuje čekatelku' },
  },
  {
    title: 'Podmínky absolvence',
    text: 'Aktivní účast na všech částech kurzu (čl. 151 ŘVČČJ). Kvalifikace zdravotníka nebo první pomoci není podmínkou přihlášení, ale až složení vůdcovské zkoušky (čl. 76 ŘVČČJ).',
    link: { href: links.rad, label: 'Řád pro vzdělávání činovnic a činovníků' },
  },
  {
    title: 'Cena',
    big: 'cca 4 500 Kč',
    text: 'Účastnický poplatek je nevratný, v případě nemoci se domluvíme individuálně.',
  },
]

export const team = {
  title: 'Naši instruktoři a instruktorky',
}

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
