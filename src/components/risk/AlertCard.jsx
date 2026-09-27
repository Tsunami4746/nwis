import { ArrowRight } from 'lucide-react'
import StatusBadge from '../ui/StatusBadge'

function AlertCard({ alert, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(alert)}
      className="w-full border border-nwis-border bg-nwis-surface p-5 text-left transition hover:border-nwis-primary/40"
    >
      <div className="mb-3 flex items-center justify-between">
        <StatusBadge status={alert.severity} />
        <ArrowRight size={16} className="text-nwis-muted" />
      </div>

      <div className="mb-3 text-lg text-nwis-text">{alert.title}</div>

      <div className="space-y-1 text-sm text-nwis-muted">
        <div>{alert.well}</div>
        <div>{alert.depth}</div>
      </div>

      <div className="mt-5 text-[10px] uppercase tracking-[0.22em] text-nwis-primary">View alert</div>
    </button>
  )
}

export default AlertCard
