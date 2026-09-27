function RiskContribution({ risk }) {
  return (
    <div className="border border-nwis-border bg-nwis-surface p-5">
      <div className="mb-6 text-[10px] uppercase tracking-[0.28em] text-nwis-muted">{risk.type}</div>
      <div className="mb-5 text-2xl text-nwis-text">{risk.severity}</div>

      <div className="space-y-4">
        {risk.contributions.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-nwis-muted">
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>
            <div className="h-px w-full bg-nwis-border">
              <div className="h-full bg-nwis-primary" style={{ width: `${item.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RiskContribution
