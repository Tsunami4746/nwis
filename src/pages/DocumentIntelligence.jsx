import { documents } from '../data/nwisData'
import { useLanguage } from '../data/translations'
import PageHeader from '../components/layout/PageHeader'
import UploadZone from '../components/documents/UploadZone'
import ProcessingStatus from '../components/documents/ProcessingStatus'
import ExtractedField from '../components/documents/ExtractedField'

function DocumentIntelligence() {
  const { t } = useLanguage()
  const document = documents[0]

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <PageHeader eyebrow={t.page.documentIntelligence} title={t.page.documentIntelligence} subtitle="Turn historical drilling reports into searchable knowledge." />

      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-8">
          <UploadZone />
          <ProcessingStatus document={document} />
        </section>

        <aside className="border border-nwis-border bg-nwis-surface p-5">
          <div className="mb-5 text-[10px] uppercase tracking-[0.26em] text-nwis-muted">{t.labels.extractedFields}</div>
          <div className="space-y-3">
            {document.fields.map((field) => (
              <ExtractedField key={field.label} label={field.label} value={field.value} confidence={field.confidence} />
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}

export default DocumentIntelligence
