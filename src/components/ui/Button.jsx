function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-[10px] border px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition duration-150'
  const variants = {
    primary: 'border-transparent bg-[#EE8104] text-[#111a1f] hover:bg-[#f18a1a] shadow-[inset_0_0_4px_4px_rgba(235,250,255,0.4)]',
    secondary: 'border-nwis-border bg-nwis-surface text-nwis-text hover:border-nwis-primary/40',
    ghost: 'border-transparent bg-transparent text-nwis-muted hover:text-nwis-text',
  }

  return (
    <button type="button" className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
