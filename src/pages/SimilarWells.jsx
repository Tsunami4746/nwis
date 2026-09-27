import PageHeader from '../components/layout/PageHeader'
import { wells } from '../data/nwisData'

function SimilarWells() {
  const ranked = [
    { well: wells[1], similarity: 92, distance: 87, formation: 96, depth: 94, trajectory: 89, events: 93 },
    { well: wells[2], similarity: 84, distance: 82, formation: 91, depth: 86, trajectory: 80, events: 88 },
    { well: wells[6], similarity: 81, distance: 79, formation: 92, depth: 84, trajectory: 88, events: 80 },
  ]

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <PageHeader eyebrow="Similarity" title="Similar Wells" subtitle="Not just nearby. Relevant." />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="border border-nwis-border bg-nwis-surface p-5">
          <div className="text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Current well</div>
          <div className="mt-4 text-4xl text-nwis-text">NW-204</div>
          <div className="mt-6 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">2,840 m</div>
          <div className="mt-2 text-lg text-nwis-text">Upper Sandstone</div>
        </aside>

        <div className="space-y-6">
          {ranked.map(({ well, similarity, distance, formation, depth, trajectory, events }) => (
            <div key={well.name} className="border border-nwis-border bg-nwis-surface p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-nwis-muted">Well</div>
                  <div className="mt-2 text-3xl text-nwis-text">{well.name}</div>
                </div>
                <div className="text-2xl text-nwis-primary">{similarity}%</div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div><div className="text-[10px] uppercase tracking-[0.2em] text-nwis-muted">Distance</div><div className="mt-2 text-lg text-nwis-text">{distance}%</div></div>
                <div><div className="text-[10px] uppercase tracking-[0.2em] text-nwis-muted">Formation</div><div className="mt-2 text-lg text-nwis-text">{formation}%</div></div>
                <div><div className="text-[10px] uppercase tracking-[0.2em] text-nwis-muted">Depth</div><div className="mt-2 text-lg text-nwis-text">{depth}%</div></div>
                <div><div className="text-[10px] uppercase tracking-[0.2em] text-nwis-muted">Trajectory</div><div className="mt-2 text-lg text-nwis-text">{trajectory}%</div></div>
                <div><div className="text-[10px] uppercase tracking-[0.2em] text-nwis-muted">Events</div><div className="mt-2 text-lg text-nwis-text">{events}%</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SimilarWells
