import { useState } from 'react'
import PageHeader from '../components/layout/PageHeader'
import { useLanguage } from '../data/translations'

function Assistant() {
  const { t } = useLanguage()
  const [prompt, setPrompt] = useState('Why is NW-204 considered high risk at 2,840 m?')

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <PageHeader eyebrow={t.nav.aiAssistant} title={t.page.aiAssistant} subtitle="Ask about your well." />

      <div className="space-y-6">
        <div className="border border-nwis-border bg-nwis-surface p-4">
          <input
            type="text"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            className="w-full bg-transparent text-lg text-nwis-text outline-none placeholder:text-nwis-muted"
          />
        </div>

        <div className="border border-nwis-border bg-nwis-surface p-6">
          <div className="mb-4 text-[10px] uppercase tracking-[0.26em] text-nwis-muted">{t.labels.evidenceBackedAnswer}</div>
          <p className="max-w-3xl text-xl leading-relaxed text-nwis-text">
            NW-204 is approaching a historical risk zone between 2,800 and 2,900 m in the Upper Sandstone formation.
            <span className="block mt-3">Three nearby wells experienced drilling incidents within this interval.</span>
            <span className="block mt-3">The closest relevant event occurred in NW-187 at 2,890 m, approximately 1.8 km away.</span>
            <span className="block mt-3">Based on the available historical evidence, mud-loss risk is currently elevated.</span>
          </p>
        </div>

        <div className="border border-nwis-border bg-nwis-surface p-5">
          <div className="mb-4 text-[10px] uppercase tracking-[0.26em] text-nwis-muted">{t.labels.sources}</div>
          <div className="space-y-3 text-sm text-nwis-text">
            <div>WCR-NW187-03</div>
            <div>DDR-NW164-02</div>
            <div>Depth Correlation Analysis</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assistant
