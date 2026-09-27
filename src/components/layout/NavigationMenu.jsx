import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../data/translations'

function NavigationMenu({ isOpen, onClose }) {
  const { t } = useLanguage()

  const translatedNavItems = [
    { label: t.nav.dashboard, route: '/dashboard' },
    { label: t.nav.wellMap, route: '/well-map' },
    { label: t.nav.alerts, route: '/alerts' },
    { label: t.nav.knowledgeRepository, route: '/knowledge' },
    { label: t.nav.documentIntelligence, route: '/documents' },
    { label: t.nav.similarWells, route: '/similar-wells' },
    { label: t.nav.depthCorrelation, route: '/depth-correlation' },
    { label: t.nav.riskEngine, route: '/risk-engine' },
    { label: t.nav.aiAssistant, route: '/assistant' },
    { label: t.nav.dataIngestion, route: '/admin' },
  ]

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
          <div className="text-[11px] uppercase tracking-[0.26em] text-nwis-muted">{t.nav.workspace}</div>
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
            <div className="mb-5 text-[10px] uppercase tracking-[0.28em] text-nwis-muted">{t.nav.workspace}</div>
            <div className="space-y-2">
              {translatedNavItems.slice(0, 3).map((item) => (
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
            <div className="mb-5 text-[10px] uppercase tracking-[0.28em] text-nwis-muted">{t.labels.intelligence}</div>
            <div className="space-y-2">
              {translatedNavItems.slice(3, 9).map((item) => (
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
            <div className="mb-5 text-[10px] uppercase tracking-[0.28em] text-nwis-muted">{t.nav.administration}</div>
            <div className="space-y-2">
              <Link
                to={translatedNavItems[9].route}
                onClick={onClose}
                className="block rounded-sm border border-transparent px-2 py-2 text-lg text-nwis-text transition hover:border-nwis-border hover:bg-nwis-surface"
              >
                {translatedNavItems[9].label}
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default NavigationMenu
