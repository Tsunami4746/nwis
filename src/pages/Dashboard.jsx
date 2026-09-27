import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { activeWell, wells } from '../data/nwisData'
import PageHeader from '../components/layout/PageHeader'
import SectionLabel from '../components/ui/SectionLabel'
import StatusBadge from '../components/ui/StatusBadge'

function Dashboard() {
  const riskEvents = [
    { name: 'Mud Loss', risk: 'HIGH' },
    { name: 'Stuck Pipe', risk: 'MEDIUM' },
    { name: 'Torque Spike', risk: 'LOW' },
    { name: 'Overpressure', risk: 'LOW' },
  ]

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <PageHeader eyebrow="Executive view" title="Dashboard" />

      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="border border-nwis-border bg-nwis-surface p-6 md:p-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-nwis-muted">Active well</div>
              <div className="mt-3 text-5xl text-nwis-text">{activeWell.name}</div>
            </div>
            <StatusBadge status={activeWell.risk} />
          </div>

          <div className="mt-8 text-[10px] uppercase tracking-[0.28em] text-nwis-muted">{activeWell.basin}</div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-nwis-muted">{activeWell.formation}</div>

          <div className="mt-10 border-t border-nwis-border pt-6">
            <div className="text-[10px] uppercase tracking-[0.28em] text-nwis-muted">Current drilling depth</div>
            <div className="mt-3 text-6xl font-medium leading-none text-nwis-text md:text-7xl">2,840 m</div>
          </div>

          <div className="mt-10 space-y-6">
            <div className="border-b border-nwis-border pb-4">
              <div className="text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Risk status</div>
              <div className="mt-3 text-2xl text-nwis-text">HIGH</div>
            </div>

            <div className="border-b border-nwis-border pb-4">
              <div className="text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Primary alert</div>
              <div className="mt-3 text-2xl text-nwis-text">Approaching a historical risk zone</div>
            </div>

            <div className="text-base leading-relaxed text-nwis-muted">
              Similar wells experienced drilling incidents<br />
              between 2,800 — 2,900 m in the Upper Sandstone formation.
            </div>
          </div>
        </section>

        <aside className="border border-nwis-border bg-nwis-surface p-6">
          <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-nwis-muted">Depth timeline</div>
          <div className="mb-6 flex justify-between text-[10px] uppercase tracking-[0.2em] text-nwis-muted">
            {['2500', '2600', '2700', '2800', '2900', '3000', '3100'].map((tick) => (
              <span key={tick}>{tick}</span>
            ))}
          </div>

          <div className="relative h-28 border border-nwis-border bg-[#0d1418] px-3 py-5">
            <div className="absolute inset-x-3 bottom-3 top-3">
              <div className="absolute left-[18%] right-[12%] top-[40%] h-0.5 bg-nwis-primary/80" />
              <div className="absolute left-[18%] right-[12%] top-[40%] h-[20%] border border-dashed border-nwis-primary/60" />
              {[0.2, 0.34, 0.46, 0.61, 0.76, 0.86].map((value, index) => (
                <div
                  key={index}
                  className="absolute bottom-0 top-0 w-2 rounded-full"
                  style={{ left: `${value * 100}%`, backgroundColor: ['#16D968', '#FFB454', '#FF1F1F', '#16D968', '#16D968', '#FFB454'][index] }}
                />
              ))}
              <div className="absolute left-[62%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-nwis-primary bg-nwis-primary" />
            </div>
          </div>

          <div className="mt-8 text-[10px] uppercase tracking-[0.26em] text-nwis-muted">Historical risk zone</div>
          <div className="mt-3 text-xl text-nwis-text">2,800 — 2,900 m</div>
        </aside>
      </div>

      <section className="mt-10 border-t border-nwis-border pt-8">
        <SectionLabel className="mb-5">Operational signals</SectionLabel>
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
          <SectionLabel>Nearby wells</SectionLabel>
          <Link to="/well-map" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-nwis-primary">
            Open map <ChevronRight size={14} />
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
