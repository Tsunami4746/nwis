function WellTimeline({ events }) {
  return (
    <div className="relative ml-4 border-l border-nwis-border pl-8">
      {events.map((event, index) => (
        <div key={`${event.type}-${index}`} className="relative pb-8 last:pb-0">
          <div className="absolute -left-[2.18rem] top-1.5 h-3 w-3 rounded-full border border-nwis-bg bg-nwis-primary" />
          <div className="mb-1 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">{event.depth.toLocaleString()} m</div>
          <div className="text-lg text-nwis-text">{event.type}</div>
          <div className="mt-1 text-sm text-nwis-muted">Severity: {event.severity}</div>
        </div>
      ))}
    </div>
  )
}

export default WellTimeline
