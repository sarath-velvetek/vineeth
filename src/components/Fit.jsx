import Reveal, { Label } from './Reveal.jsx'
import { fitNo, fitYes } from '../content.js'

export default function Fit() {
  return (
    <section className="section" id="fit">
      <div className="wrap">
        <header className="section__head">
          <Label n="05">Is this right for you?</Label>
          <Reveal as="h2" className="h2">Honest about <em>who this is for.</em></Reveal>
        </header>
        <div className="fit">
          <Reveal className="fit__col fit__col--yes">
            <h3><span className="badge badge--yes" aria-hidden="true">✓</span> This is for you if</h3>
            <ul>{fitYes.map((t) => <li key={t}>{t}</li>)}</ul>
          </Reveal>
          <Reveal className="fit__col fit__col--no" delay={0.12}>
            <h3><span className="badge badge--no" aria-hidden="true">✕</span> Probably not for you if</h3>
            <ul>{fitNo.map((t) => <li key={t}>{t}</li>)}</ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
