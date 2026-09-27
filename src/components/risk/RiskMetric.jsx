function RiskMetric({ label, value, detail }) {
  return (
    <div className="border-b border-nwis-border py-4">
      <div className="text-[10px] uppercase tracking-[0.24em] text-nwis-muted">{label}</div>
      <div className="mt-2 text-2xl text-nwis-text">{value}</div>
      {detail && <div className="mt-2 text-sm text-nwis-muted">{detail}</div>}
    </div>
  )
}

export default RiskMetric
