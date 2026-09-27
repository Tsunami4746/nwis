import { Menu, ShieldCheck } from 'lucide-react'

function Navbar({ _menuOpen, onToggleMenu }) {
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
          <a href="#" className="transition hover:text-nwis-text">FAQs</a>
          <a href="#" className="transition hover:text-nwis-text">Policy</a>
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
