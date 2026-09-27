function StatusBadge({ status, className = '' }) {
  const tones = {
    HIGH: 'border-[#ff3d3d]/40 bg-[#ff3d3d]/10 text-[#ff7a7a]',
    MEDIUM: 'border-[#ffb454]/40 bg-[#ffb454]/10 text-[#ffc66c]',
    LOW: 'border-[#16d968]/40 bg-[#16d968]/10 text-[#5be49a]',
    SAFE: 'border-[#16d968]/40 bg-[#16d968]/10 text-[#5be49a]',
    COMPLETE: 'border-[#3B91A5]/40 bg-[#3B91A5]/10 text-[#7ac4d6]',
    PENDING: 'border-[#ffb454]/40 bg-[#ffb454]/10 text-[#ffc66c]',
  }

  const safeStatus = status?.toUpperCase() || 'LOW'

  return (
    <span className={`inline-flex items-center rounded-sm border px-2 py-1 text-[10px] uppercase tracking-[0.22em] ${tones[safeStatus] || tones.LOW} ${className}`}>
      {safeStatus}
    </span>
  )
}

export default StatusBadge
