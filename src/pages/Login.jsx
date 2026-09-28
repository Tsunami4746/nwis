import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../data/translations'
import Button from '../components/ui/Button'

function Login() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [role, setRole] = useState('engineer')

  function signIn(event) {
    event.preventDefault()
    navigate(role === 'admin' ? '/admin' : '/dashboard')
  }

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
          <div className="mb-8 flex gap-3 border border-nwis-border bg-[#161f24] p-1" role="tablist" aria-label="Select workspace role">
            <button type="button" role="tab" aria-selected={role === 'engineer'} onClick={() => setRole('engineer')} className={`flex-1 border px-4 py-3 text-[10px] uppercase tracking-[0.24em] transition ${role === 'engineer' ? 'border-[#8db7c5] bg-[#1a2c34] text-[#dfeef2]' : 'border-transparent text-nwis-muted hover:text-nwis-text'}`}>
              {t.login.fieldEngineer}
            </button>
            <button type="button" role="tab" aria-selected={role === 'admin'} onClick={() => setRole('admin')} className={`flex-1 border px-4 py-3 text-[10px] uppercase tracking-[0.24em] transition ${role === 'admin' ? 'border-nwis-primary/70 bg-nwis-primary/10 text-nwis-primary' : 'border-transparent text-nwis-muted hover:text-nwis-text'}`}>
              {t.login.officeAdmin}
            </button>
          </div>

          <form className="space-y-6" onSubmit={signIn}>
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-[0.26em] text-nwis-muted">{t.login.email}</label>
              <input type="email" defaultValue={role === 'admin' ? 'admin@nwis.io' : 'engineer@nwis.io'} key={role} className="w-full border border-nwis-border bg-[#0b1114] px-4 py-3 text-nwis-text outline-none placeholder:text-nwis-muted focus:border-nwis-primary" />
            </div>

            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-[0.26em] text-nwis-muted">{t.login.password}</label>
              <input type="password" defaultValue="password" className="w-full border border-nwis-border bg-[#0b1114] px-4 py-3 text-nwis-text outline-none placeholder:text-nwis-muted" />
            </div>

            <Button type="submit" className="w-full rounded-[10px] text-[11px] font-medium tracking-[0.18em]">
              {t.login.signIn}
              <ArrowRight size={14} className="ml-2" />
            </Button>
          </form>
        </section>

        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[260px] w-[85%] -translate-x-1/2 bg-[url('/drilling-rig-silhouette.svg')] bg-contain bg-bottom bg-no-repeat opacity-25" />
      </main>
    </div>
  )
}

export default Login
