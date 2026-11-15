import Reveal, { Label } from './Reveal.jsx'
import { steps } from '../content.js'

export default function HowWeWork() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <header className="section__head">
          <Label n="02">How we work together</Label>
          <Reveal as="h2" className="h2">
            One conversation a week. <em>Someone to think with in between.</em>
          </Reveal>
        </header>

        <ol className="steps">
          {steps.map((s, i) => (
            <Reveal as="li" className="step" key={s.title} delay={i * 0.1}>
              <div className="step__top">
                <span className="step__n">{String(i + 1).padStart(2, '0')}</span>
                <span className="tag">{s.tag}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal as="aside" className="note">
          <span className="note__icon" aria-hidden="true">↻</span>
          <p>
            <strong>Why the follow-through?</strong> Some people told me the clarity from our conversations faded
            once the sessions ended. So I changed how I work. Insight matters only if it turns into something you do.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
