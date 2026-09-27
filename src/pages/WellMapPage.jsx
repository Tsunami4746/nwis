import PageHeader from '../components/layout/PageHeader'
import WellMap from '../components/wells/WellMap'
import { useLanguage } from '../data/translations'

function WellMapPage() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <PageHeader eyebrow="Field view" title={t.page.wellMap} subtitle="Current well and surrounding historical activity." />
      <WellMap />
    </div>
  )
}

export default WellMapPage
