// Tým Ursu 2027 – převzato z ursus.skauting.cz/tym-ursu (listopad 2026).
// Abe, Matylda, Kámen, Pepa, Ilča a Petarda: nové medailonky z Notionu Ursu (Web Medailonky instruktorů).
// Odstavce v popisu odděluj pomocí <br>.

export type TeamMember = { name: string; nickname: string; role?: string; description?: string; image: string }

export const teamMembers: TeamMember[] = [
  {
    name: 'Hana Kolářová',
    nickname: 'Hadka',
    description:
      'Hadka je z plzeňského oddílu Kalahari, který několik let vedla. Vystudovala bakaláře korejských studií, což jí přivedlo k nejbizarnějším pár měsícům studia v lesích poblíž Soulu. Ze studia si odnesla především schopnost vyrábět kimči a porozumět špatným korejským telenovelám, a tak se raději vydala studovat média.<br>Teď pracuje v komunikačním týmu Junáka – českého skauta, kde se věnuje sociálním sítím, grafice a podpoře regionální komunikace. Potají ale stále sní o navrhování počítačových her.',
    image: '/images/hadka.webp',
  },
  {
    name: 'Martin Zámečník',
    nickname: 'Komár',
    description:
      'Komár je členem ratbořského střediska (poblíž Kolína), kde se od svých 15 let věnuje oddílu skautů a působil i jako vedoucí střediska, či jako člen revizní komise.<br>Jeho vášní je pivovarství a biotechnologie (což také úspěšně vystudoval) a vše, co se týká techniky a technologií. Kromě hraní počítačových her či koukání na filmy ho také baví čtení, chození do posilovny, kolečkové brusle, squash či občasné posezení u dobrého jídla a piva.',
    image: '/images/komar.webp',
  },
  {
    name: 'Václav Hlaváč',
    nickname: 'Abe',
    description:
      'Abe pochází z vesničky nedaleko malebného historického města Kutná Hora. V Kutné Hoře do nedávna skautoval v čistě chlapeckém oddíle, ale před pár lety zde založil a vedl nový koedukovaný oddíl – ten úspěšně předal mladšímu vedení a teď napůl z povzdálí pozoruje, jak jim to jde a sem tam jim s něčím pomůže. V Praze vystudoval informatiku na ČVUTu. Po studiích se vrátil do Kutné Hory a do Prahy teď dojíždí jednou týdně do práce.<br>Na Ursu ho určitě potkáte večer u táboráku s kytarou, nebo na některém z hudebních budíčků. Obojí totiž miluje, podobně jako sport nebo přírodu.',
    image: '/images/abe.webp',
  },
  {
    name: 'Matylda Kocianová',
    nickname: 'Matylda',
    description:
      'Matylda je Pražačka tělem, duší i mluvou. V jednom z místních dívčích oddílů kdysi sama vyrůstala a dnes se podílí na jeho vedení. Mimo skauting se snaží vystudovat učitelství na Karlovce a vydělávat si svojí prací v čokoládovně.<br>Ve volných chvílích ráda vaří, kreslí, poslouchá hudbu a tráví čas s kamarády, nejlépe u něčeho dobrého k pití (ať už je to kafe nebo pivo), a taky moc ráda a často yappuje. Jejími dalšími zálibami jsou odpočinek a odkládání věcí na později, přičemž v obou disciplínách má slušně našlápnuto.',
    image: '/images/matylda.webp',
  },
  {
    name: 'Ondřej Ston',
    nickname: 'Kámen',
    description:
      'Amatérský (bas)kytarista, profesionální klaun a kavárenský intelektuál, dočasný student medicíny (jakože to snad dokončím), vášnivý běžec, chodec (po horách) i ležec (v posteli), megayapper a aktuálně úřadující vedoucí střediska Prosek Praha.<br>Bydlí v pražských Satalicích (a kdyby někdo tvrdil, že to není Praha, tak mu nevěřte), ale nejradši se nachází někde v lese, nebo v nějakém kulturním zařízení s přáteli (divadlo, hospoda, kino, kavárna). Má ale rád i svůj čas o samotě, ať už s knihou, sluchátky na uších nebo s kytarou v ruce.',
    image: '/images/kamen.webp',
  },
  {
    name: 'Josef Hádek',
    nickname: 'Pepa',
    description:
      'Pepa pochází z vesničky u Jičína, ale většinu času teď tráví v Praze, kde dokončuje vysokoškolská studia informatiky. V minulosti byl aktivním střediskovým hospodářem.<br>Pracovně se věnuje digitalizaci a AI v realitním developmentu. A když zrovna nepřebíhá mezi školami a prací, rád běhá a chodí v přírodě s batohem na zádech po horách a plážích, pije kafe (nebo matchu) a s kámošstvem provozuje klaunství. Vlastní gorilu. A taky OČK yapping.',
    image: '/images/pepa.webp',
  },
  {
    name: 'Bohdana Štěpánková',
    nickname: 'Drobek',
    description:
      'Drobek je milovnicí postindustriální krajiny a proto se narodila v Ostravě, kde je doma dodnes. Skautsky se angažuje v revizní komisi střediska a okresu a na rádcovském kurzu.<br>Pracovně ji živí vlastní environmentální žal, nutričně italská kuchyně a duševně hudba, vysoká i nízká literatura a husky v těle maďarského ohaře.',
    image: '/images/drobek.webp',
  },
  {
    name: 'Ilona Jůdová',
    nickname: 'Ilča',
    description:
      'Ilča pochází z Velkého Meziříčí, malého města na Vysočině. V domovském středisku vede oddíl skautů a skautek. S dětmi se setkává i ve svém profesním životě, po studiu speciální pedagogiky začala pracovat jako paní učitelka ve škole pro žáky se sluchovým postižením.<br>Má ráda čas strávený s kamarády, ať už na procházce, ve fitku, nebo doma u deskovek (které stejně pořád nechápe). Radost jí dělá fenka šeltie, Astrid, se kterou ráda běhá a učí se různé triky.',
    image: '/images/ilca.webp',
  },
  {
    name: 'Petr Hejl',
    nickname: 'Petarda',
    description:
      'Petarda je z Klobúk u Brna, což je takové velké maloměsto u Hodonína. V tamním středisku dělá zástupca vedúcího střediska, což je pro něho role nová, takže se na kurzu bude učit společně s vama. Už pátým rokem se snaží neco naučit aj na právech v Olomócu.<br>Rád sa zasměje, pokecá o čemkoliv, chodí na vandry, paří na kompu, kouká na seriály, chodí za kulturou, bývá s kamošama a hraje frisbee či spikeball. Občas má krátkozraké herecké tendence, keré sa obzvlášť na Ursu projevujú tak, že hraje v těch fest trapných scénkách.',
    image: '/images/petarda.webp',
  },
]

export const externists: TeamMember[] = []

export const cooks: TeamMember[] = [
  { name: 'Petr Varmus', nickname: 'Hardy', image: '/images/hardy.webp' },
  { name: 'Anna Dvořáková', nickname: 'Anče', image: '/images/ance.webp' },
  { name: 'Matouš Černík', nickname: 'Fufník', image: '/images/fufnik.webp' },
]
