import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../data/translations'
import Button from '../components/ui/Button'

function Login() {
  const navigate = useNavigate()
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-nwis-bg text-nwis-text">

      <main className="relative mx-auto grid max-w-[1500px] gap-8 px-4 pb-10 pt-20 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <section className="relative overflow-hidden px-0 py-4 md:px-0 md:py-6">
          <div className="max-w-[720px]">
            <h1 className="max-w-[620px] text-5xl leading-[0.92] tracking-[-2px] text-nwis-text md:text-[5rem] md:tracking-[-2px]">
              {t.login.headingMain}
              <span className="block">{t.login.headingMiddle}</span>
              <span className="block tracking-[-6px] font-bolder text-[#EE8104]">{t.login.headingAccent}</span>
            </h1>
          </div>

          <div className="mt-10 max-w-[540px] text-base leading-relaxed tracking-[-1px] text-nwis-muted md:text-[1.4rem] md:leading-[1.25] md:tracking-[-1px]">
            {t.login.heroIntro}
            <span className="block">{t.login.heroSub}</span>
          </div>
        </section>

        <section className="relative border border-nwis-border bg-[#0d1418]/90 p-6 md:p-8">
          <div className="mb-8 flex gap-3 rounded-full border border-nwis-border bg-[#161f24] p-1">
            <button type="button" className="flex-1 rounded-full border border-[#8db7c5] bg-[#1a2c34] px-4 py-3 text-[10px] uppercase tracking-[0.24em] text-[#dfeef2]">
              {t.login.fieldEngineer}
            </button>
            <button type="button" className="flex-1 rounded-full border border-transparent px-4 py-3 text-[10px] uppercase tracking-[0.24em] text-nwis-muted">
              {t.login.officeAdmin}
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-[0.26em] text-nwis-muted">{t.login.email}</label>
              <input type="email" defaultValue="engineer@nwis.io" className="w-full border border-nwis-border bg-[#0b1114] px-4 py-3 text-nwis-text outline-none placeholder:text-nwis-muted" />
            </div>

            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-[0.26em] text-nwis-muted">{t.login.password}</label>
              <input type="password" defaultValue="password" className="w-full border border-nwis-border bg-[#0b1114] px-4 py-3 text-nwis-text outline-none placeholder:text-nwis-muted" />
            </div>

            <Button className="w-full rounded-[10px] text-[11px] font-medium tracking-[0.18em]" onClick={() => navigate('/dashboard')}>
              {t.login.signIn}
              <ArrowRight size={14} className="ml-2" />
            </Button>
          </div>
        </section>

        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[260px] w-[85%] -translate-x-1/2 bg-[url('/drilling-rig-silhouette.svg')] bg-contain bg-bottom bg-no-repeat opacity-25" />
      </main>
    </div>
  )
}

export default Login
