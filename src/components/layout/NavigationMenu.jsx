import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navItems } from '../../data/nwisData'

function NavigationMenu({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition duration-200 ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-[#050a0c]/80 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md border-l border-nwis-border bg-nwis-elevated p-6 text-nwis-text transition duration-200 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <div className="text-[11px] uppercase tracking-[0.26em] text-nwis-muted">Workspace</div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-nwis-border bg-nwis-bg text-nwis-text"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-8">
          <div>
            <div className="mb-5 text-[10px] uppercase tracking-[0.28em] text-nwis-muted">Workspace</div>
            <div className="space-y-2">
              {navItems.slice(0, 3).map((item) => (
                <Link
                  key={item.route}
                  to={item.route}
                  onClick={onClose}
                  className="block rounded-sm border border-transparent px-2 py-2 text-lg text-nwis-text transition hover:border-nwis-border hover:bg-nwis-surface"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 text-[10px] uppercase tracking-[0.28em] text-nwis-muted">Intelligence</div>
            <div className="space-y-2">
              {navItems.slice(3, 9).map((item) => (
                <Link
                  key={item.route}
                  to={item.route}
                  onClick={onClose}
                  className="block rounded-sm border border-transparent px-2 py-2 text-lg text-nwis-text transition hover:border-nwis-border hover:bg-nwis-surface"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 text-[10px] uppercase tracking-[0.28em] text-nwis-muted">Administration</div>
            <div className="space-y-2">
              <Link
                to={navItems[9].route}
                onClick={onClose}
                className="block rounded-sm border border-transparent px-2 py-2 text-lg text-nwis-text transition hover:border-nwis-border hover:bg-nwis-surface"
              >
                {navItems[9].label}
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default NavigationMenu
