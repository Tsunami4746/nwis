function SearchResult({ result }) {
  return (
    <div className="border border-nwis-border bg-nwis-surface p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.24em] text-nwis-muted">{result.well}</div>
          <div className="mt-2 text-xl text-nwis-text">{result.distance}</div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.24em] text-nwis-primary">{result.event}</div>
      </div>

      <div className="grid gap-4 text-sm md:grid-cols-2">
        <div>
          <div className="text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Depth</div>
          <div className="mt-2 text-nwis-text">{result.depth}</div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Formation</div>
          <div className="mt-2 text-nwis-text">{result.formation}</div>
        </div>
      </div>

      <div className="mt-5 space-y-3 text-sm text-nwis-muted">
        <div><span className="text-[10px] uppercase tracking-[0.2em] text-nwis-muted">Cause:</span> {result.cause}</div>
        <div><span className="text-[10px] uppercase tracking-[0.2em] text-nwis-muted">Action:</span> {result.action}</div>
        <div><span className="text-[10px] uppercase tracking-[0.2em] text-nwis-muted">Source:</span> {result.source}</div>
      </div>
    </div>
  )
}

export default SearchResult
