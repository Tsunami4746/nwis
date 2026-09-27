import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { activeWell, wells } from '../data/nwisData'
import { useLanguage } from '../data/translations'
import PageHeader from '../components/layout/PageHeader'
import SectionLabel from '../components/ui/SectionLabel'
import StatusBadge from '../components/ui/StatusBadge'

function Dashboard() {
  const { t } = useLanguage()
  const riskEvents = [
    { name: 'Mud Loss', risk: 'HIGH' },
    { name: 'Stuck Pipe', risk: 'MEDIUM' },
    { name: 'Torque Spike', risk: 'LOW' },
    { name: 'Overpressure', risk: 'LOW' },
  ]

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <PageHeader eyebrow={t.dashboard.executiveView} title={t.dashboard.dashboard} />

      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="border border-nwis-border bg-nwis-surface p-6 md:p-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-nwis-muted">{t.dashboard.activeWell}</div>
              <div className="mt-3 text-5xl text-nwis-text">{activeWell.name}</div>
            </div>
            <StatusBadge status={activeWell.risk} />
          </div>

          <div className="mt-8 text-[10px] uppercase tracking-[0.28em] text-nwis-muted">{activeWell.basin}</div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-nwis-muted">{activeWell.formation}</div>

          <div className="mt-10 border-t border-nwis-border pt-6">
            <div className="text-[10px] uppercase tracking-[0.28em] text-nwis-muted">{t.dashboard.currentDepth}</div>
            <div className="mt-3 text-6xl font-medium leading-none text-nwis-text md:text-7xl">2,840 m</div>
          </div>

          <div className="mt-10 space-y-6">
            <div className="border-b border-nwis-border pb-4">
              <div className="text-[10px] uppercase tracking-[0.24em] text-nwis-muted">{t.dashboard.riskStatus}</div>
              <div className="mt-3 text-2xl text-nwis-text">HIGH</div>
            </div>

            <div className="border-b border-nwis-border pb-4">
              <div className="text-[10px] uppercase tracking-[0.24em] text-nwis-muted">{t.dashboard.primaryAlert}</div>
              <div className="mt-3 text-2xl text-nwis-text">{t.dashboard.primaryAlertText}</div>
            </div>

            <div className="text-base leading-relaxed text-nwis-muted">
              {t.dashboard.historicalRiskText}<br />
              between 2,800 — 2,900 m in the Upper Sandstone formation.
            </div>
          </div>
        </section>

        <aside className="border border-nwis-border bg-nwis-surface p-6">
          <div className="mb-5 text-[10px] uppercase tracking-[0.3em] text-nwis-muted">{t.labels.timeline}</div>
          <div className="mb-5 flex justify-between text-[10px] uppercase tracking-[0.2em] text-nwis-muted">
            {['2500', '2600', '2700', '2800', '2900', '3000', '3100'].map((tick) => (
              <span key={tick}>{tick}</span>
            ))}
          </div>

          <div className="relative overflow-hidden border border-nwis-border bg-[#0b1114] px-3 py-5">
            <div className="relative h-28">
              <div className="absolute left-0 right-0 top-[56%] h-px -translate-y-1/2 bg-[#586267]" />

              <div className="absolute left-[60%] top-[52%] h-10 w-[22%] -translate-y-1/2 border border-[#D08A3F]/70 bg-[#8E4026]/15" style={{ left: '42%', width: '22%' }} />

              <div className="absolute left-[20%] top-[56%] h-14 w-[3px] -translate-x-1/2 -translate-y-1/2 bg-[#16D968]" />
              <div className="absolute left-[33%] top-[56%] h-14 w-[3px] -translate-x-1/2 -translate-y-1/2 bg-[#FFB454]" />
              <div className="absolute left-[46%] top-[56%] h-14 w-[3px] -translate-x-1/2 -translate-y-1/2 bg-[#FF1F1F]" />
              <div className="absolute left-[58%] top-[56%] h-14 w-[3px] -translate-x-1/2 -translate-y-1/2 bg-[#16D968]" />
              <div className="absolute left-[71%] top-[56%] h-14 w-[3px] -translate-x-1/2 -translate-y-1/2 bg-[#16D968]" />
              <div className="absolute left-[82%] top-[56%] h-14 w-[3px] -translate-x-1/2 -translate-y-1/2 bg-[#FFB454]" />

              <div className="absolute left-[90%] top-[56%] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#EE8104] bg-[#EE8104] shadow-[0_0_0_4px_rgba(235,250,255,0.4)]" />
            </div>
          </div>

          <div className="mt-8 text-[10px] upp ercase tracking-[0.26em] text-nwis-muted">{t.dashboard.historicRiskZone}</div>
          <div className="mt-3 text-xl text-nwis-text">2,800 — 2,900m</div>
        </aside>
      </div>

      <section className="mt-10 border-t border-nwis-border pt-8">
        <SectionLabel className="mb-5">{t.dashboard.operationalSignals}</SectionLabel>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {riskEvents.map((event) => (
            <div key={event.name} className="border-b border-nwis-border pb-4">
              <div className="mb-2 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">{event.name}</div>
              <div className="flex items-center justify-between gap-3">
                <div className="text-2xl text-nwis-text">{event.risk}</div>
                <StatusBadge status={event.risk} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 border-t border-nwis-border pt-8">
        <div className="mb-5 flex items-center justify-between">
          <SectionLabel>{t.dashboard.nearbyWells}</SectionLabel>
          <Link to="/well-map" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-nwis-primary">
            {t.dashboard.openMap} <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {wells.filter((well) => well.id !== 'NW-204').slice(0, 6).map((well) => (
            <div key={well.id} className="border border-nwis-border bg-nwis-surface p-4">
              <div className="mb-2 flex items-center justify-between">
                <div className="text-xl text-nwis-text">{well.name}</div>
                <StatusBadge status={well.risk} />
              </div>
              <div className="text-sm text-nwis-muted">{well.distance} km</div>
              <div className="mt-4 text-[10px] uppercase tracking-[0.22em] text-nwis-muted">{well.formation}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Dashboard
