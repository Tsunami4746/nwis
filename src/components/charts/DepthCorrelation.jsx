function DepthCorrelation() {
  const depths = [2400, 2460, 2500, 2600, 2800, 2840, 2900, 3000]

  return (
    <div className="border border-nwis-border bg-nwis-surface p-5">
      <div className="mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-nwis-muted">
        <span>2400 m</span>
        <span>Current well</span>
        <span>3000 m</span>
      </div>

      <div className="relative h-[324px] overflow-hidden border border-nwis-border bg-[#0b1114] px-4 py-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0,transparent_96%,rgba(255,255,255,0.06)_96%,rgba(255,255,255,0.06)_100%)]" />

        {[0, 1, 2, 3, 4].map((line) => (
          <div key={line} className="absolute inset-x-4 border-t border-nwis-border/70" style={{ top: `${15 + line * 20}%` }} />
        ))}

        <div className="absolute left-6 right-6 top-10 bottom-10">
          <div className="absolute left-[18%] top-0 h-full w-[52%] border border-dashed border-nwis-primary/60" />

          {depths.map((depth, index) => {
            const left = 8 + index * 10
            const isCurrent = depth === 2840
            const isRiskStart = depth === 2800
            const isRiskEnd = depth === 2900
            return (
              <div key={depth} className="absolute bottom-0" style={{ left: `${left}%` }}>
                <div className={`h-16 w-px ${isCurrent ? 'bg-nwis-primary' : 'bg-nwis-border'}`} />
                <div className="mt-2 text-[10px] uppercase tracking-[0.16em] text-nwis-muted">{depth} m</div>
                {isRiskStart && <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-nwis-primary">Risk zone begins</div>}
                {isRiskEnd && <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-nwis-primary">Risk zone ends</div>}
                {isCurrent && <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-nwis-primary">Current well</div>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DepthCorrelation
