import { useState } from 'react'
import { ArrowUpRight, MapPin, Radar } from 'lucide-react'
import { wells } from '../../data/nwisData'

const radii = [1, 2, 5, 10]
const riskColors = { HIGH: '#e5765b', MEDIUM: '#e5a055', LOW: '#5dbb9a' }

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

          <div className="relative h-[420px] overflow-hidden rounded-sm border border-nwis-border bg-[radial-gradient(circle_at_50%_50%,rgba(229,160,85,0.12),transparent_34%),linear-gradient(180deg,#0c1316,#090e11)]">
          <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(rgba(48,55,58,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(48,55,58,0.45) 1px, transparent 1px)', backgroundSize: '12.5% 20%' }} />
          {[0.25, 0.5, 0.75].map((scale) => <div key={scale} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-nwis-border/70" style={{ width: `${scale * radius * 104}px`, height: `${scale * radius * 104}px` }} />)}
          <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-nwis-primary bg-nwis-primary/80 shadow-[0_0_0_5px_rgba(229,160,85,0.12)]" />
          <div className="absolute left-[calc(50%+14px)] top-[calc(50%-7px)] text-[10px] uppercase tracking-[0.2em] text-nwis-primary">NW-204</div>

          {wells.filter((well) => well.id !== 'NW-204').map((well) => {
            const x = 50 + ((well.longitude - 71.628) / 0.04) * 36
            const y = 50 - ((well.latitude - 22.584) / 0.04) * 36
            const isSelected = selected === well.id

            return (
              <button
                key={well.id}
                type="button"
                onClick={() => setSelected(well.id)}
                className={`absolute z-10 -translate-y-1/2 ${well.id === 'NW-221' ? '-translate-x-[90%]' : '-translate-x-1/2'}`}
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className={`flex items-center gap-1.5 whitespace-nowrap rounded-sm border px-1.5 py-1 ${isSelected ? 'border-nwis-primary bg-[#0d1418] text-nwis-primary' : 'border-transparent text-nwis-muted hover:border-nwis-border hover:bg-[#0d1418]'}`}>
                  <MapPin size={13} style={{ color: riskColors[well.risk] }} />
                  <span className="text-[10px] uppercase tracking-[0.16em]">{well.id}</span>
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
              <div className="flex items-start justify-between gap-3"><h3 className="text-3xl text-nwis-text">{well.name}</h3><span className="mt-1 inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em]" style={{ color: riskColors[well.risk] }}><i className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: riskColors[well.risk] }} />{well.risk} risk</span></div>
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

              <button type="button" className="mt-8 inline-flex items-center gap-2 border border-nwis-border px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-nwis-text hover:border-nwis-primary hover:text-nwis-primary">
                View Well History <ArrowUpRight size={13} />
              </button>
            </>
          )
        })()}
      </aside>
    </div>
  )
}

export default WellMap
