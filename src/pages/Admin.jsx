import PageHeader from '../components/layout/PageHeader'

function Admin() {
  return (
    <div className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <PageHeader eyebrow="Administration" title="Data Ingestion" subtitle="Historical drilling knowledge." />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        <div className="border border-nwis-border bg-nwis-surface p-5">
          <div className="text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Documents</div>
          <div className="mt-3 text-4xl text-nwis-text">1,248</div>
        </div>
        <div className="border border-nwis-border bg-nwis-surface p-5">
          <div className="text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Processed</div>
          <div className="mt-3 text-4xl text-nwis-text">1,103</div>
        </div>
        <div className="border border-nwis-border bg-nwis-surface p-5">
          <div className="text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Pending validation</div>
          <div className="mt-3 text-4xl text-nwis-text">98</div>
        </div>
        <div className="border border-nwis-border bg-nwis-surface p-5">
          <div className="text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Failed</div>
          <div className="mt-3 text-4xl text-nwis-text">47</div>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <section className="border border-nwis-border bg-nwis-surface p-5">
          <div className="mb-5 text-[10px] uppercase tracking-[0.26em] text-nwis-muted">Data quality</div>
          <div className="space-y-5">
            {[
              ['Well information', '98%'],
              ['Depth extraction', '96%'],
              ['Event extraction', '91%'],
              ['Formation mapping', '94%'],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-nwis-muted">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="h-px w-full bg-nwis-border">
                  <div className="h-full bg-nwis-primary" style={{ width: value.replace('%', '') + '%' }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border border-nwis-border bg-nwis-surface p-5">
          <div className="mb-5 text-[10px] uppercase tracking-[0.26em] text-nwis-muted">Processing queue</div>
          <div className="space-y-4 text-sm text-nwis-text">
            <div className="flex items-center justify-between border-b border-nwis-border pb-3"><span>WCR-NW187-03.pdf</span><span className="text-nwis-primary">Validated</span></div>
            <div className="flex items-center justify-between border-b border-nwis-border pb-3"><span>DDR-NW164-02.pdf</span><span className="text-nwis-primary">Processing</span></div>
            <div className="flex items-center justify-between border-b border-nwis-border pb-3"><span>WCR-NW221-11.pdf</span><span className="text-nwis-primary">Awaiting review</span></div>
            <div className="flex items-center justify-between pb-1"><span>MUD-NW156-02.pdf</span><span className="text-nwis-primary">Pending</span></div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Admin
