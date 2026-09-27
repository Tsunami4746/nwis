import PageHeader from '../components/layout/PageHeader'
import WellMap from '../components/wells/WellMap'

function WellMapPage() {
  return (
    <div className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <PageHeader eyebrow="Field view" title="Well Map" subtitle="Current well and surrounding historical activity." />
      <WellMap />
    </div>
  )
}

export default WellMapPage
