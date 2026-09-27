import PageHeader from '../components/layout/PageHeader'
import DepthCorrelation from '../components/charts/DepthCorrelation'
import { useLanguage } from '../data/translations'

function DepthCorrelationPage() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <PageHeader eyebrow={t.page.depthCorrelation} title={t.page.depthCorrelation} subtitle="Where has history already happened?" />
      <DepthCorrelation />
    </div>
  )
}

export default DepthCorrelationPage
