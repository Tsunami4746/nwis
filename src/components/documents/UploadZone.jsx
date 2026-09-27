import { UploadCloud } from 'lucide-react'

function UploadZone() {
  return (
    <div className="flex min-h-[220px] items-center justify-center border border-dashed border-nwis-border bg-nwis-surface p-8 text-center">
      <div>
        <div className="mb-4 flex justify-center">
          <UploadCloud size={32} className="text-nwis-primary" />
        </div>
        <div className="text-[10px] uppercase tracking-[0.28em] text-nwis-muted">Drop documents here</div>
        <div className="mt-3 text-sm text-nwis-muted">or</div>
        <button type="button" className="mt-3 border border-nwis-border px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-nwis-text">
          + Upload
        </button>
      </div>
    </div>
  )
}

export default UploadZone
