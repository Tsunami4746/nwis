import { useState } from 'react'
import PageHeader from '../components/layout/PageHeader'
import AlertCard from '../components/risk/AlertCard'
import { alerts } from '../data/nwisData'

function Alerts() {
  const [activeAlert, setActiveAlert] = useState(alerts[0])

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <PageHeader eyebrow="Alerts" title="Alerts" subtitle="Proactive operational guidance." />

      <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
        <section className="space-y-4">
          {alerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} onOpen={setActiveAlert} />
          ))}
        </section>

        <aside className="border border-nwis-border bg-nwis-surface p-6">
          <div className="mb-6 text-[10px] uppercase tracking-[0.26em] text-nwis-muted">Why this alert?</div>
          <div className="mb-6 text-2xl text-nwis-text">{activeAlert.details}</div>

          <div className="mb-6 border-t border-b border-nwis-border py-4">
            <div className="mb-3 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Historical wells</div>
            <div className="space-y-2 text-sm text-nwis-text">
              {activeAlert.relatedWells.map((well) => (
                <div key={well} className="flex justify-between border-b border-nwis-border pb-2">
                  <span>{well}</span>
                  <span className="text-nwis-muted">1.8 km</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-3 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">Recommended review</div>
            <div className="space-y-2 text-sm text-nwis-text">
              <div>Mud parameters</div>
              <div>Historical WCR</div>
              <div>Similar wells</div>
            </div>
          </div>

          <button type="button" className="border border-nwis-border px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-nwis-text">
            Open evidence
          </button>
        </aside>
      </div>
    </div>
  )
}

export default Alerts
