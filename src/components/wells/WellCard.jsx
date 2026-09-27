import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import StatusBadge from '../ui/StatusBadge'

function WellCard({ well, active = false }) {
  return (
    <Link
      to={`/well/${well.id}`}
      className={`block border p-4 transition ${active ? 'border-nwis-primary/60 bg-nwis-surface' : 'border-nwis-border bg-nwis-bg hover:border-nwis-primary/30'}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-nwis-muted">Well</div>
          <div className="mt-1 text-2xl text-nwis-text">{well.name}</div>
        </div>
        <StatusBadge status={well.risk} />
      </div>

      <div className="mb-4 flex items-center gap-2 text-sm text-nwis-muted">
        <MapPin size={14} className="text-nwis-primary" />
        {well.distance} km from current well
      </div>

      <div className="space-y-3 text-sm text-nwis-muted">
        <div className="flex justify-between"><span>Formation</span><span className="text-nwis-text">{well.formation}</span></div>
        <div className="flex justify-between"><span>Total Depth</span><span className="text-nwis-text">{well.totalDepth} m</span></div>
        <div className="flex justify-between"><span>Events</span><span className="text-nwis-text">{well.events.length}</span></div>
      </div>
    </Link>
  )
}

export default WellCard
