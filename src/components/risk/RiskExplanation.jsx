function RiskExplanation({ title, contributions, summary }) {
  return (
    <div className="border border-nwis-border bg-nwis-surface p-5">
      <div className="mb-5 text-[10px] uppercase tracking-[0.26em] text-nwis-muted">Why is {title} high?</div>

      <div className="space-y-4">
        {contributions.map((item) => (
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

      <div className="mt-6 border-t border-nwis-border pt-4">
        <div className="mb-3 text-[10px] uppercase tracking-[0.26em] text-nwis-muted">System explanation</div>
        <p className="text-base leading-relaxed text-nwis-text">{summary}</p>
      </div>
    </div>
  )
}

export default RiskExplanation
