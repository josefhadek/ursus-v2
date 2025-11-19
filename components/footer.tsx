import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-forest text-sand py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Organizer Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber">Pořadatel</h3>
            <p className="text-lg leading-relaxed">
              Junák – český skaut, kraj Praha, z. s.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber">Kontakt</h3>
            <div className="space-y-2">
              <p className="text-lg">
                Matylda Kocianová – Matylda
              </p>
              <a 
                href="mailto:ursus@skaut.cz" 
                className="flex items-center gap-2 text-amber hover:text-amber/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
                ursus@skaut.cz
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-sand/20 text-center text-sm text-sand/70">
          <p>© {new Date().getFullYear()} Vlk Ursus. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}
