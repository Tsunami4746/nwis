import PageHeader from '../components/layout/PageHeader'
import DepthCorrelation from '../components/charts/DepthCorrelation'

function DepthCorrelationPage() {
  return (
    <div className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <PageHeader eyebrow="Depth intelligence" title="Depth Correlation" subtitle="Where has history already happened?" />
      <DepthCorrelation />
    </div>
  )
}

export default DepthCorrelationPage
