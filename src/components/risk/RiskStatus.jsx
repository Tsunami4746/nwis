import StatusBadge from '../ui/StatusBadge'

function RiskStatus({ label, value, detail }) {
  return (
    <div className="border-b border-nwis-border py-4">
      <div className="mb-2 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">{label}</div>
      <div className="flex items-center justify-between gap-4">
        <div className="text-2xl text-nwis-text">{value}</div>
        <StatusBadge status={value} />
      </div>
      {detail && <div className="mt-2 text-sm text-nwis-muted">{detail}</div>}
    </div>
  )
}

export default RiskStatus
