function ProcessingStatus({ document }) {
  return (
    <div className="border border-nwis-border bg-nwis-surface p-5">
      <div className="mb-4 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">{document.name}</div>

      <div className="grid gap-3 text-sm text-nwis-text md:grid-cols-2">
        <div className="flex items-center justify-between border-b border-nwis-border py-2"><span>OCR</span><span className="text-nwis-primary">{document.ocr}</span></div>
        <div className="flex items-center justify-between border-b border-nwis-border py-2"><span>NLP Extraction</span><span className="text-nwis-primary">{document.nlp}</span></div>
        <div className="flex items-center justify-between border-b border-nwis-border py-2"><span>Entity Extraction</span><span className="text-nwis-primary">{document.entities}</span></div>
        <div className="flex items-center justify-between border-b border-nwis-border py-2"><span>Validation</span><span className="text-nwis-primary">{document.validation}</span></div>
      </div>
    </div>
  )
}

export default ProcessingStatus
