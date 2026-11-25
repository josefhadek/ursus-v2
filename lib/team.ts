// Tým Ursu 2027 – převzato z ursus.skauting.cz/tym-ursu (listopad 2026).
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
      'Abe pochází z vesničky nedaleko malebného historického města Kutná Hora. V Kutné Hoře do nedávna skautoval v čistě chlapeckém oddíle, ale před pár lety zde založil a vedl nový koedukovaný oddíl – ten úspěšně předal mladšímu vedení a teď napůl z povzdálí pozoruje, jak jim to jde a sem tam jim s něčím pomůže. V Praze vystudoval informatiku na ČVUTu. Po studiích se vrátil do Kutné Hory a do Prahy teď dojíždí jednou týdně do práce.<br>Na Ursu ho určitě potkáte večer u táboráku s kytarou, nebo na některém z hudebních budíčků. Oboje totiž miluje, podobně jako sport nebo přírodu.',
    image: '/images/abe.webp',
  },
  {
    name: 'Matylda Kocianová',
    nickname: 'Matylda',
    description:
      'Matylda je Pražačka duší i mluvou, která se zde podílí na vedení dívčího oddílu na Bílé Hoře, ve kterém sama vyrostla. Také tam nyní studuje pedagogickou fakultu na UK a pracuje v čokoládovně.<br>Když se zrovna nevěnuje práci, studiu nebo skautingu, s radostí jen tak odpočívá doma, zkouší nové recepty v kuchyni, nebo záměrně odkládá jakoukoliv práci do školy. Ráda také maluje a kreslí, poslouchá hudbu a tráví čas s přáteli.',
    image: '/images/matylda.webp',
  },
  {
    name: 'Ondřej Ston',
    nickname: 'Kámen',
    description:
      'Říše: Nerosty; Kmen: Roverská Banánová Republika; Třída: Medik; Řád: Nemá (jako správný pankáč); Čeleď: Struthionidae; Rod: Ston; Druh: Ondřej; Alter-ego: Kámen<br>Rozšíření: Praha – 2. lékařská fakulta UK, středisko Prosek Praha; v létě migruje do hor<br>Potrava: Všežravec, nejraději konzumuje kávu<br>Způsob života: Když se neučí nebo se neoddává výkonu funkce prezidenta Roverské Banánové Republiky, běhá po lesích nebo hraje na kytaru.',
    image: '/images/kamen.webp',
  },
  {
    name: 'Josef Hádek',
    nickname: 'Pepa',
    description:
      'Pepa pochází z malé vesničky nedaleko lesa Řáholce, v samém srdci Českého ráje u Jičína, kde se skautsky aktivně podílí na správě webových stránek a dalších online služeb střediska. V minulosti byl aktivním střediskovým hospodářem.<br>Většinu času tráví nyní v Praze, kde studuje informatiku. A když zrovna nepřebíhá mezi školami a prací, rád běhá a chodí v přírodě s batohem na zádech po horách a plážích.',
    image: '/images/pepa.webp',
  },
  {
    name: 'Bohdana Štěpánková',
    nickname: 'Drobek',
    description:
      'Drobek je milovnicí postindustriální krajiny a proto se narodila v Ostravě, kde je doma dodnes. Skautsky se angažuje v revizní komisi střediska a okresu a na rádcovském kurzu.<br>Pracovně ji živí vlastní environmentální žal, nutričně italská kuchyně a duševně hudba, vysoká i nízká literatura a husky v těle maďarského ohaře.',
    image: '/images/drobek.webp',
  },
]

export const externists: TeamMember[] = []

export const cooks: TeamMember[] = [
  { name: 'Petr Varmus', nickname: 'Hardy', image: '/images/hardy.webp' },
  { name: 'Anna Dvořáková', nickname: 'Anče', image: '/images/ance.webp' },
]
