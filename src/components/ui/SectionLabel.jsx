function SectionLabel({ children, className = '' }) {
  return (
    <div className={`text-[10px] uppercase tracking-[0.28em] text-nwis-muted ${className}`}>{children}</div>
  )
}

export default SectionLabel
