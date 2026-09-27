import { Menu, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../../data/translations'

function Navbar({ _menuOpen, onToggleMenu }) {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="sticky top-0 z-40 border-b border-nwis-border bg-nwis-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-sm border border-nwis-primary/60 bg-nwis-elevated text-[9px] font-semibold text-nwis-primary">
            NW
          </div>
          <div className="text-lg font-medium tracking-[0.28em] text-nwis-text">NWIS</div>
        </div>

        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.24em] text-nwis-muted md:flex">
          <a href="#" className="transition hover:text-nwis-text">{t.nav.faqs}</a>
          <a href="#" className="transition hover:text-nwis-text">{t.nav.policy}</a>
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="rounded-sm border border-nwis-border bg-nwis-surface px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-nwis-text transition hover:border-nwis-primary/60 hover:text-nwis-primary"
            aria-label="Toggle language"
          >
            {language === 'en' ? t.common.hindi : t.common.english}
          </button>
          <button
            type="button"
            aria-label="Open navigation"
            onClick={onToggleMenu}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-nwis-border bg-nwis-surface text-nwis-text transition hover:border-nwis-primary/60 hover:text-nwis-primary"
          >
            <Menu size={18} />
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ShieldCheck size={16} className="text-nwis-primary" />
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="rounded-sm border border-nwis-border bg-nwis-surface px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-nwis-text"
            aria-label="Toggle language"
          >
            {language === 'en' ? 'हिंदी' : 'EN'}
          </button>
          <button
            type="button"
            onClick={onToggleMenu}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-nwis-border bg-nwis-surface text-nwis-text"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
