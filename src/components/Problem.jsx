import Reveal, { Label } from './Reveal.jsx'
import { symptoms } from '../content.js'

// Moves the card's radial highlight to follow the pointer.
const spotlight = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function Problem() {
  return (
    <section className="section" id="problem">
      <div className="wrap">
        <header className="section__head">
          <Label n="01">The problem</Label>
          <Reveal as="h2" className="h2">
            You’ve built something that works. <em>And it still runs through you.</em>
          </Reveal>
          <Reveal as="p" className="section__intro">
            The business has grown past what one person can carry. Your people are loyal and capable. But a lot
            of times, they wait. You might recognise some of this:
          </Reveal>
        </header>

        <ul className="symptoms">
          {symptoms.map((s, i) => (
            <Reveal as="li" className="symptom" key={s} delay={i * 0.07} onMouseMove={spotlight}>
              <span className="symptom__idx">/{String(i + 1).padStart(2, '0')}</span>
              <p>{s}</p>
            </Reveal>
          ))}
          <Reveal as="li" className="symptom symptom--callout" delay={symptoms.length * 0.07}>
            <p>
              None of this is a systems problem first. It’s what happens when <strong>authority is no longer enough.</strong>
            </p>
          </Reveal>
        </ul>
      </div>
    </section>
  )
}
