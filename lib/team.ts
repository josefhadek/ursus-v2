export type TeamMember = { name: string; nickname: string; role?: string; description?: string; image: string }

export const teamMembers = [
    {
        name: 'Tereza Kasalová',
        nickname: 'Chroust',
        role: 'Vůdkyně kurzu',
        description: 'Jejím místem narození, pobytu, studia a velkou srdeční záležitostí je Olomouc. Do konce léta 2018 tam vedla dívčí oddíl Světýlka (ve kterém sama vyrostla) a na podzim 2022 předala funkci zástupkyně vedoucí střediska.<br><br>Vystudovala průmyslový design a dějiny umění a po pár letech práce v památkové péči se rozhodla zkusit štěstí s další výškou, takže v současnosti studuje restaurování na VŠCHT v Praze. Ráda zpívá, vaří, pracuje na zahradě a momentálně se snaží ovládnout umění hrnčířské a sklářské. Má problém s dodržováním pitného režimu.',
        image: '/images/chroust.webp',
    },
    {
        name: 'Martin Zámečník',
        nickname: 'Komár',
        role: 'Zástupce vůdkyně, hospodář',
        description: 'Komár je členem ratbořského střediska (poblíž Kolína), kde se od svých 15 let věnuje oddílu skautů a působil i jako vedoucí střediska, či jako člen revizní komise. <br>Jeho vášní je pivovarství a biotechnologie (což také úspěšně vystudoval) a vše, co se týká techniky a technologií. Kromě hraní počítačových her či koukání na filmy ho také baví čtení, chození do posilovny, kolečkové brusle, squash či občasné posezení u dobrého jídla a piva.',
        image: '/images/komar.webp',
    },
    {
        name: 'Hana Kolářová',
        nickname: 'Hadka',
        role: 'Zástupkyně vůdkyně',
        description: 'Hadka je z plzeňského oddílu Kalahari, který několik let vedla. Vystudovala bakaláře korejských studií, což jí přivedlo k nejbizarnějším pár měsícům studia v lesích poblíž Soulu. Ze studia si odnesla především schopnost vyrábět kimči a porozumět špatným korejským telenovelám, a tak se raději vydala studovat média.<br>Teď pracuje v komunikačním týmu Junáka – českého skauta, kde se věnuje sociálním sítím, grafice a podpoře regionální komunikace. Potají ale stále sní o navrhování počítačových her.',
        image: '/images/hadka.webp',
    },
    {
        name: 'Matylda Kocianová',
        nickname: 'Matylda',
        role: 'Komunikace s účastníky',
        description: 'Matylda je rodilá Pražačka duší i mluvou, která se zde podílí zejména na vedení dívčího oddílu na Bílé Hoře, ve kterém sama vyrostla. Také tam nyní studuje pedagogickou fakultu na UK a pracuje v čokoládovně.<br>Když se zrovna nevěnuje práci, studiu nebo skautingu, s radostí si jen tak chilluje doma, zkouší nové recepty v kuchyni, nebo záměrně odkládá jakoukoliv práci do školy.Ráda maluje a kreslí, poslouchá hudbu a užívá si čas strávený s přáteli.',
        image: '/images/matylda.webp',
    },
    {
        name: 'Josef Hádek',
        nickname: 'Pepa',
        role: 'Tajemník',
        description: 'Pepa pochází z malé vesničky nedaleko lesa Řáholce, v samém srdci Českého ráje u Jičína, kde se skautsky aktivně podílí na správě webových stránek a dalších online služeb střediska. V minulosti byl aktivním střediskovým hospodářem. <br> Většinu času tráví v Praze, kde studuje informatiku na PEF ČZU. Rád chodí v přírodě s batohem na zádech a v poslední době si oblíbil matcha latte.',
        image: '/images/pepa.webp',
    },
    {
        name: 'Václav Hlaváč',
        nickname: 'Abe',
        description: 'Abe pochází z vesničky nedaleko malebného historického města Kutná Hora. V Kutné Hoře do nedávna skautoval v čistě chlapeckém oddíle, ale před dvěma lety zde založil a dodnes vede nový koedukovaný oddíl. Přesto je většinu týdne v Praze, kde studuje informatiku na ČVUTu. <br> Na Ursu ho určitě potkáte večer u táboráku s kytarou, nebo na některém z hudebních budíčků. Oboje totiž miluje, podobně jako sport nebo přírodu.',
        image: '/images/abe.webp',
    },
    {
        name: 'Ondřej Ston',
        nickname: 'Kámen',
        description: 'Říše: Nerosty; Kmen: Roverská Banánová Republika; Třída: Medik; Řád: Nemá (jako správný pankáč). Rozšíření: Praha – 2. lékařská fakulta UK, středisko Prosek Praha; v létě migruje do hor. Potrava: Všežravec, nejraději konzumuje kávu. Způsob života: Když se neučí nebo se neoddává výkonu funkce prezidenta Roverské Banánové Republiky, běhá po lesích nebo hraje na kytaru.',
        image: '/images/kamen.webp',
    },
    {
        name: 'Kristina Kekrtová',
        nickname: 'Hakiy',
        description: 'Hakiy se narodila uprostřed Českého ráje, kde je aktivním činovníkem ve středisku Štika Turnov. V minulosti spolupořádala (nejen) vzdělávací akce pro rovery libereckého kraje. Láska k lidské mysli ji zavedla do Prahy, kde studuje neurobiologii  a pracuje jako vědecký pracovník v Národním ústavu duševního zdraví.<br>Když ji nenajdete v laborce, bude asi hrát volejbal, lézt po skalách, nebo posedávat s kamarády v jedné z pražských kaváren.',
        image: '/images/hakiy.webp',
    },
]

export const externists = [
    {
        name: 'Kateřina Škopová',
        nickname: 'Cibule',
        role: 'Externistka',
        description: 'Cibule je z Prahy, kde vystudovala učitelství na FTVS a PřF. Nově učí ve státní škole. Věnuje se také domškolakům skrze tělocvik a pobyt v přírodě. Ráda bere děti za sobě rovné. Nepohrdne cyklistikou, běháním, skandinávskou přírodou, kajakem, pohybovými hrami nebo třeba zdravovědou.',
        image: '/images/cibule.webp',
    },
    {
        name: 'Jan Šimbera',
        nickname: 'Prófa',
        role: 'Externista',
        description: 'Prófa je Pražák z Nového Města nad Metují. Vystudovaný kartograf, pracuje jako datový analytik v energetice a fušuje do komunální politiky. Skautsky působil hlavně ve vzdělávání, svůj polodůchod tráví v Náčelnictvu Junáka. Nadšenec do koloběžek. Má rád čokoládu, lyže, hraní na kytaru a svou ženu.',
        image: '/images/profa.webp',
    },
]

export const cooks = [
    {
        name: 'Petr Varmus',
        nickname: 'Hardy',
        image: '/images/hardy.webp',
    },
    {
        name: 'Anna Dvořáková',
        nickname: 'Anče',
        image: '/images/ance.webp',
    },
]

