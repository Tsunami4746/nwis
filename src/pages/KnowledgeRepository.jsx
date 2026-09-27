import { useMemo, useState } from 'react'
import PageHeader from '../components/layout/PageHeader'
import SearchBar from '../components/knowledge/SearchBar'
import SearchResult from '../components/knowledge/SearchResult'
import { knowledgeResults } from '../data/nwisData'
import { useLanguage } from '../data/translations'

function KnowledgeRepository() {
  const { t } = useLanguage()
  const [query, setQuery] = useState('stuck pipe incidents around 2500 meters')
  const filtered = useMemo(() => {
    const text = query.toLowerCase()
    return knowledgeResults.filter((result) => {
      const haystack = `${result.well} ${result.event} ${result.cause} ${result.formation} ${result.action}`.toLowerCase()
      return haystack.includes(text) || text === ''
    })
  }, [query])

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
      <PageHeader eyebrow={t.page.knowledgeRepository} title={t.page.knowledgeRepository} subtitle="Search drilling history." />

      <div className="mb-8">
        <SearchBar value={query} onChange={setQuery} placeholder={t.labels.searchPlaceholder} />
      </div>

      <div className="mb-6 text-[10px] uppercase tracking-[0.28em] text-nwis-muted">{filtered.length} {t.labels.results}</div>

      <div className="grid gap-5">
        {filtered.map((result, index) => (
          <SearchResult key={`${result.well}-${index}`} result={result} />
        ))}
      </div>
    </div>
  )
}

export default KnowledgeRepository
