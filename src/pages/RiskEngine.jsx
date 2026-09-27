import PageHeader from '../components/layout/PageHeader'
import RiskMetric from '../components/risk/RiskMetric'
import RiskExplanation from '../components/risk/RiskExplanation'
import { riskData } from '../data/nwisData'
import { useLanguage } from '../data/translations'

function RiskEngine() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <PageHeader eyebrow={t.page.riskEngine} title={t.page.riskEngine} subtitle="Understand the signal. Not just the score." />

      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-6">
          {riskData.map((risk) => (
            <div key={risk.type} className="border border-nwis-border bg-nwis-surface p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-[0.24em] text-nwis-muted">{risk.type}</div>
                <div className="text-2xl text-nwis-text">{risk.severity}</div>
              </div>
              <div className="grid gap-4 md:grid-cols-4">
                <RiskMetric label={t.labels.historicalEvents} value={risk.events} />
                <RiskMetric label={t.labels.nearestEvent} value={risk.nearest} />
                <RiskMetric label={t.labels.similarWellsLabel} value={risk.similar} />
                <RiskMetric label={t.labels.depthCorrelationLabel} value={risk.depth} />
              </div>
            </div>
          ))}
        </section>

        <aside className="space-y-6">
          <RiskExplanation title="MUD LOSS" contributions={riskData[0].contributions} summary={riskData[0].explanation} />
        </aside>
      </div>
    </div>
  )
}

export default RiskEngine
