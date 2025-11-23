import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TeamMemberCard } from '@/components/team-member-card'

const teamMembers = [
    {
        name: 'Jan Sadílek',
        nickname: 'Hanys',
        role: 'Vůdce kurzu',
        description: 'Vůdce kurzu, který se stará o to, aby vše klapalo tak, jak má. Má na starosti celkovou vizi a směřování kurzu.',
        image: '/images/team-placeholder.jpg',
    },
    {
        name: 'Ondřej Ston',
        nickname: 'Kámen',
        role: 'Zástupce vůdce',
        description: 'Říše: Nerosty; Kmen: Roverská Banánová Republika; Třída: Medik; Řád: Nemá (jako správný pankáč). Rozšíření: Praha – 2. lékařská fakulta UK, středisko Prosek Praha; v létě migruje do hor. Potrava: Všežravec, nejraději konzumuje kávu. Způsob života: Když se neučí nebo se neoddává výkonu funkce prezidenta Roverské Banánové Republiky, běhá po lesích nebo hraje na kytaru.',
        image: '/images/team-placeholder.jpg',
    },
    {
        name: 'Magdaléna Medková',
        nickname: 'Pulec',
        role: 'Hospodářka',
        description: 'Pulec je z malé vesničky vedle Prahy, takže za Pražačku se nepovažuje. Od mala ale vyrůstala v jednom pražském dívčím oddíle, který teď dokonce vede. Spoustu času tráví studiem zvířátek na ČZU, ale nejraději je zabalená v dece na gauči s knížkou nebo seriálem. Baví ji učit se háčkovat, něco dobrého kuchtit a trávit čas s kamarády.',
        image: '/images/team-placeholder.jpg',
    },
    {
        name: 'Josef Hádek',
        nickname: 'Pepa',
        role: 'Web & IT',
        description: 'Pepa pochází z malé vesničky nedaleko lesa Řáholce, v samém srdci Českého ráje u Jičína. Většinu času tráví v Praze, kde studuje informatiku na PEF ČZU. Rád chodí v přírodě s batohem na zádech a v poslední době si oblíbil matcha latte.',
        image: '/images/team-placeholder.jpg',
    },
    {
        name: 'Matylda Kocianová',
        nickname: 'Matylda',
        role: 'Program',
        description: 'Matylda je rodilá Pražačka duší i mluvou, která se zde podílí zejména na vedení dívčího oddílu na Bílé Hoře. Také tam nyní studuje pedagogickou fakultu na UK a pracuje v čokoládovně. Když se zrovna nevěnuje práci, studiu nebo skautingu, s radostí si jen tak chilluje doma, zkouší nové recepty v kuchyni.',
        image: '/images/team-placeholder.jpg',
    },
    // Duplicates to reach 12 members
    {
        name: 'Jan Sadílek',
        nickname: 'Hanys',
        role: 'Vůdce kurzu',
        description: 'Vůdce kurzu, který se stará o to, aby vše klapalo tak, jak má. Má na starosti celkovou vizi a směřování kurzu.',
        image: '/images/team-placeholder.jpg',
    },
    {
        name: 'Ondřej Ston',
        nickname: 'Kámen',
        role: 'Zástupce vůdce',
        description: 'Říše: Nerosty; Kmen: Roverská Banánová Republika; Třída: Medik; Řád: Nemá (jako správný pankáč). Rozšíření: Praha – 2. lékařská fakulta UK, středisko Prosek Praha; v létě migruje do hor. Potrava: Všežravec, nejraději konzumuje kávu. Způsob života: Když se neučí nebo se neoddává výkonu funkce prezidenta Roverské Banánové Republiky, běhá po lesích nebo hraje na kytaru.',
        image: '/images/team-placeholder.jpg',
    },
    {
        name: 'Magdaléna Medková',
        nickname: 'Pulec',
        role: 'Hospodářka',
        description: 'Pulec je z malé vesničky vedle Prahy, takže za Pražačku se nepovažuje. Od mala ale vyrůstala v jednom pražském dívčím oddíle, který teď dokonce vede. Spoustu času tráví studiem zvířátek na ČZU, ale nejraději je zabalená v dece na gauči s knížkou nebo seriálem. Baví ji učit se háčkovat, něco dobrého kuchtit a trávit čas s kamarády.',
        image: '/images/team-placeholder.jpg',
    },
    {
        name: 'Josef Hádek',
        nickname: 'Pepa',
        role: 'Web & IT',
        description: 'Pepa pochází z malé vesničky nedaleko lesa Řáholce, v samém srdci Českého ráje u Jičína. Většinu času tráví v Praze, kde studuje informatiku na PEF ČZU. Rád chodí v přírodě s batohem na zádech a v poslední době si oblíbil matcha latte.',
        image: '/images/team-placeholder.jpg',
    },
    {
        name: 'Matylda Kocianová',
        nickname: 'Matylda',
        role: 'Program',
        description: 'Matylda je rodilá Pražačka duší i mluvou, která se zde podílí zejména na vedení dívčího oddílu na Bílé Hoře. Také tam nyní studuje pedagogickou fakultu na UK a pracuje v čokoládovně. Když se zrovna nevěnuje práci, studiu nebo skautingu, s radostí si jen tak chilluje doma, zkouší nové recepty v kuchyni.',
        image: '/images/team-placeholder.jpg',
    },
    {
        name: 'Jan Sadílek',
        nickname: 'Hanys',
        role: 'Vůdce kurzu',
        description: 'Vůdce kurzu, který se stará o to, aby vše klapalo tak, jak má. Má na starosti celkovou vizi a směřování kurzu.',
        image: '/images/team-placeholder.jpg',
    },
    {
        name: 'Ondřej Ston',
        nickname: 'Kámen',
        role: 'Zástupce vůdce',
        description: 'Říše: Nerosty; Kmen: Roverská Banánová Republika; Třída: Medik; Řád: Nemá (jako správný pankáč). Rozšíření: Praha – 2. lékařská fakulta UK, středisko Prosek Praha; v létě migruje do hor. Potrava: Všežravec, nejraději konzumuje kávu. Způsob života: Když se neučí nebo se neoddává výkonu funkce prezidenta Roverské Banánové Republiky, běhá po lesích nebo hraje na kytaru.',
        image: '/images/team-placeholder.jpg',
    },
]

const externists = [
    {
        name: 'Kateřina Škopová',
        nickname: 'Cibule',
        role: 'Externistka',
        description: 'Cibule je z Prahy, kde vystudovala učitelství na FTVS a PřF. Nově učí ve státní škole. Věnuje se také domškolakům skrze tělocvik a pobyt v přírodě. Ráda bere děti za sobě rovné. Nepohrdne cyklistikou, běháním, skandinávskou přírodou, kajakem, pohybovými hrami nebo třeba zdravovědou.',
        image: '/images/team-placeholder.jpg',
    },
    {
        name: 'Jan Šimbera',
        nickname: 'Prófa',
        role: 'Externista - Právo',
        description: 'Prófa je Pražák z Nového Města nad Metují. Vystudovaný kartograf, pracuje jako datový analytik v energetice a fušuje do komunální politiky. Skautsky působil hlavně ve vzdělávání, svůj polodůchod tráví v Náčelnictvu Junáka. Nadšenec do koloběžek. Má rád čokoládu, lyže, hraní na kytaru a svou ženu.',
        image: '/images/team-placeholder.jpg',
    },
    {
        name: 'Kateřina Škopová',
        nickname: 'Cibule',
        role: 'Externistka',
        description: 'Cibule je z Prahy, kde vystudovala učitelství na FTVS a PřF. Nově učí ve státní škole. Věnuje se také domškolakům skrze tělocvik a pobyt v přírodě. Ráda bere děti za sobě rovné. Nepohrdne cyklistikou, běháním, skandinávskou přírodou, kajakem, pohybovými hrami nebo třeba zdravovědou.',
        image: '/images/team-placeholder.jpg',
    },
]

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-sand flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-skaut text-forest mb-6">Tým Ursu</h1>
                        <p className="text-lg text-forest/80">
                            Seznamte se s lidmi, kteří pro vás připravují VLK Ursus. Jsme parta nadšenců, kteří věří, že vzdělávání může být zábava.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard key={index} {...member} />
                        ))}
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold font-skaut text-forest mb-8 text-center">Externisté</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {externists.map((externist, index) => (
                                <TeamMemberCard key={index} {...externist} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
