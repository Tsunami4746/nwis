function PageHeader({ eyebrow, title, subtitle, action }) {
  return (
    <header className="mb-8 flex flex-col gap-4 border-b border-nwis-border pb-6 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-3 text-[10px] uppercase tracking-[0.28em] text-nwis-muted">{eyebrow}</div>
        <h1 className="text-3xl font-medium leading-none text-nwis-text md:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-3 max-w-2xl text-sm text-nwis-muted md:text-base">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </header>
  )
}

export default PageHeader
