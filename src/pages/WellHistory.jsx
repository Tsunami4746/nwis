import { useParams } from 'react-router-dom'
import { wells } from '../data/nwisData'
import PageHeader from '../components/layout/PageHeader'

function WellHistory() {
  const { wellId } = useParams()
  const well = wells.find((item) => item.id === wellId) || wells[0]

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <PageHeader eyebrow="Well history" title={well.name} subtitle="Historical drilling record and event timeline." />

      <div className="mb-8 grid gap-6 border border-nwis-border bg-nwis-surface p-5 md:grid-cols-3">
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-nwis-muted">Basin</div>
          <div className="mt-2 text-lg text-nwis-text">{well.basin}</div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-nwis-muted">Formation</div>
          <div className="mt-2 text-lg text-nwis-text">{well.formation}</div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-nwis-muted">Distance</div>
          <div className="mt-2 text-lg text-nwis-text">{well.distance} km</div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="border border-nwis-border bg-nwis-surface p-5">
          <div className="mb-4 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Well profile</div>
          <div className="space-y-4 text-sm text-nwis-muted">
            <div className="flex justify-between"><span>Total depth</span><span className="text-nwis-text">{well.totalDepth} m</span></div>
            <div className="flex justify-between"><span>Trajectory</span><span className="text-nwis-text">{well.trajectory}</span></div>
            <div className="flex justify-between"><span>Risk</span><span className="text-nwis-text">{well.risk}</span></div>
          </div>
        </aside>

        <section className="border border-nwis-border bg-nwis-surface p-5">
          <div className="mb-6 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Timeline</div>
          <div className="space-y-6">
            {well.events.map((event, index) => (
              <div key={`${event.type}-${index}`} className="relative pl-6">
                <div className="absolute left-0 top-1 h-3 w-3 rounded-full border border-nwis-bg bg-nwis-primary" />
                <div className="text-[10px] uppercase tracking-[0.22em] text-nwis-muted">{event.depth.toLocaleString()} m</div>
                <div className="mt-2 text-xl text-nwis-text">{event.type}</div>
                <div className="mt-2 text-sm text-nwis-muted">Severity: {event.severity}</div>
                {index < well.events.length - 1 && <div className="mt-5 h-8 border-l border-nwis-border" />}
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-10 border border-nwis-border bg-nwis-surface p-5">
        <div className="mb-6 text-[10px] uppercase tracking-[0.22em] text-nwis-muted">Selected event</div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <div className="mb-2 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Event</div>
            <div className="text-3xl text-nwis-text">Stuck Pipe</div>
          </div>
          <div>
            <div className="mb-2 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Depth</div>
            <div className="text-3xl text-nwis-text">2,890 m</div>
          </div>
          <div>
            <div className="mb-2 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Severity</div>
            <div className="text-lg text-nwis-text">HIGH</div>
          </div>
          <div>
            <div className="mb-2 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Cause</div>
            <div className="text-lg text-nwis-text">Differential sticking</div>
          </div>
          <div>
            <div className="mb-2 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Action</div>
            <div className="text-lg text-nwis-text">Circulated with modified mud program</div>
          </div>
          <div>
            <div className="mb-2 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Source document</div>
            <div className="text-lg text-nwis-text">WCR-NW187-03.pdf</div>
          </div>
        </div>
        <button type="button" className="mt-6 border border-nwis-border px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-nwis-text">
          View Source
        </button>
      </div>
    </div>
  )
}

export default WellHistory
