import { Label } from './Reveal.jsx'
import { outcomes } from '../content.js'

export default function Outcomes() {
  // The list is rendered twice so the marquee can loop seamlessly.
  const loop = [...outcomes, ...outcomes]
  return (
    <section className="outcomes" aria-label="What coaching helped with">
      <div className="wrap">
        <Label n="04">From the feedback — what it helped them with, most often</Label>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {loop.map((o, i) => (
            <span className="marquee__item" key={i}><span>{o}</span><i>✦</i></span>
          ))}
        </div>
      </div>
      <ul className="sr-only">
        {outcomes.map((o) => <li key={o}>{o}</li>)}
      </ul>
    </section>
  )
}
