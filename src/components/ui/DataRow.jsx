function DataRow({ label, value, className = '' }) {
  return (
    <div className={`flex items-baseline justify-between gap-4 border-b border-nwis-border py-3 ${className}`}>
      <span className="text-[10px] uppercase tracking-[0.22em] text-nwis-muted">{label}</span>
      <span className="text-right text-sm text-nwis-text">{value}</span>
    </div>
  )
}

export default DataRow
