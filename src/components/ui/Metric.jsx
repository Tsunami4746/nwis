function Metric({ label, value, detail, accent = false }) {
  return (
    <div className="border-b border-nwis-border pb-4 pt-1">
      <div className="mb-2 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">{label}</div>
      <div className={`text-3xl font-medium leading-none ${accent ? 'text-nwis-primary' : 'text-nwis-text'} md:text-4xl`}>{value}</div>
      {detail && <div className="mt-2 text-sm text-nwis-muted">{detail}</div>}
    </div>
  )
}

export default Metric
