function ExtractedField({ label, value, confidence }) {
  return (
    <div className="border-b border-nwis-border py-3">
      <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-nwis-muted">
        <span>{label}</span>
        <span>{confidence}%</span>
      </div>
      <div className="text-lg text-nwis-text">{value}</div>
      <div className="mt-2 h-px bg-nwis-border">
        <div className="h-full bg-nwis-primary" style={{ width: `${confidence}%` }} />
      </div>
    </div>
  )
}

export default ExtractedField
