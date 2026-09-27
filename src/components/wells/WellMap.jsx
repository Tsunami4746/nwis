import { useState } from 'react'
import { MapPin, Radar } from 'lucide-react'
import { wells } from '../../data/nwisData'

const radii = [1, 2, 5, 10]

function WellMap() {
  const [radius, setRadius] = useState(5)
  const [selected, setSelected] = useState('NW-187')

  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
      <div className="relative overflow-hidden border border-nwis-border bg-[#0b1114] p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-[0.26em] text-nwis-muted">Well Field</div>
          <div className="flex gap-2">
            {radii.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRadius(value)}
                className={`rounded-sm border px-2 py-1 text-[10px] uppercase tracking-[0.2em] ${
                  radius === value ? 'border-nwis-primary bg-nwis-primary/10 text-nwis-primary' : 'border-nwis-border text-nwis-muted'
                }`}
              >
                {value} km
              </button>
            ))}
          </div>
        </div>

        <div className="relative h-[420px] rounded-sm border border-nwis-border bg-[radial-gradient(circle_at_center,_rgba(229,160,85,0.10),transparent_35%),linear-gradient(180deg,#0c1316,#090e11)]">
          <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-nwis-border/70" style={{ width: `${radius * 52}px`, height: `${radius * 52}px` }} />
          <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-nwis-primary bg-nwis-primary/70" />
          <div className="absolute left-1/2 top-1/2 text-[10px] uppercase tracking-[0.2em] text-nwis-primary">NW-204</div>

          {wells.filter((well) => well.id !== 'NW-204').map((well, index) => {
            const angle = (index + 1) * 62
            const x = 50 + Math.cos(angle * (Math.PI / 180)) * (radius * 14 + index * 8)
            const y = 50 + Math.sin(angle * (Math.PI / 180)) * (radius * 12 + index * 8)
            const isSelected = selected === well.id

            return (
              <button
                key={well.id}
                type="button"
                onClick={() => setSelected(well.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className={`flex items-center gap-2 ${isSelected ? 'text-nwis-primary' : 'text-nwis-muted'}`}>
                  <MapPin size={14} />
                  <span className="text-[10px] uppercase tracking-[0.18em]">{well.id}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <aside className="border border-nwis-border bg-nwis-surface p-5">
        <div className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-nwis-muted">
          <Radar size={14} className="text-nwis-primary" />
          Selected well
        </div>

        {(() => {
          const well = wells.find((item) => item.id === selected)
          return (
            <>
              <h3 className="text-3xl text-nwis-text">{well.name}</h3>
              <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-nwis-muted">{well.distance} km from current well</div>

              <div className="mt-6 space-y-4 border-t border-b border-nwis-border py-4 text-sm text-nwis-muted">
                <div className="flex justify-between"><span>Formation</span><span className="text-nwis-text">{well.formation}</span></div>
                <div className="flex justify-between"><span>Total depth</span><span className="text-nwis-text">{well.totalDepth} m</span></div>
                <div className="flex justify-between"><span>Historical events</span><span className="text-nwis-text">{well.events.length}</span></div>
              </div>

              <div className="mt-6 space-y-2 text-sm text-nwis-muted">
                <div className="flex justify-between"><span>Mud Loss</span><span className="text-nwis-text">2</span></div>
                <div className="flex justify-between"><span>Stuck Pipe</span><span className="text-nwis-text">1</span></div>
                <div className="flex justify-between"><span>Torque Spike</span><span className="text-nwis-text">1</span></div>
              </div>

              <button type="button" className="mt-8 inline-flex border border-nwis-border px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-nwis-text">
                View Well History
              </button>
            </>
          )
        })()}
      </aside>
    </div>
  )
}

export default WellMap
