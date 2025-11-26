import { Mail, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer id="kontakt" className="bg-forest text-sand py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Organizer Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber">Pořadatel</h3>
            <div className="text-lg leading-relaxed space-y-1">
              <p className="font-semibold">Junák – český skaut, kraj Praha, z. s.</p>
              <p>Senovážné náměstí 24</p>
              <p>110 00 Praha 1</p>
              <p className="mt-4 text-sand/80">IČO: 61387959</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber">Kontakt</h3>
            <div className="space-y-4">
              <div>
                <p className="text-base text-sand/60 mb-1">Komunikace</p>
                <p className="text-lg font-medium">Matylda Kocianová – Matylda</p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:ursus@skaut.cz"
                  className="flex items-center gap-3 text-sand hover:text-amber transition-colors group"
                >
                  <div className="bg-sand/10 p-2 rounded-full group-hover:bg-amber/10 transition-colors">
                    <Mail className="w-5 h-5 text-amber" />
                  </div>
                  <span>ursus@skaut.cz</span>
                </a>

                <a
                  href="https://www.facebook.com/vlk.ursus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sand hover:text-amber transition-colors group"
                >
                  <div className="bg-sand/10 p-2 rounded-full group-hover:bg-amber/10 transition-colors">
                    <Facebook className="w-5 h-5 text-amber" />
                  </div>
                  <span>VLK Ursus</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-sand/20 text-center text-base text-sand/70">
          <p>© {new Date().getFullYear()} VLK Ursus. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}
