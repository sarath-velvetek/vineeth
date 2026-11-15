import { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'
import Reveal from './Reveal.jsx'
import { stats } from '../content.js'

function CountUp({ value, decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const duration = 1600
    let start = 0
    let frame = requestAnimationFrame(function tick(now) {
      start ||= now
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      if (ref.current) ref.current.textContent = (value * eased).toFixed(decimals)
      if (t < 1) frame = requestAnimationFrame(tick)
    })
    return () => cancelAnimationFrame(frame)
  }, [inView, value, decimals])

  return <span ref={ref}>{value.toFixed(decimals)}</span>
}

export default function Proof() {
  return (
    <section className="proof" id="proof" aria-label="Client feedback">
      <div className="wrap">
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal className="stat" key={s.text} delay={i * 0.1}>
              <div className="stat__num">
                <CountUp value={s.value} decimals={s.decimals} />
                <small>{s.suffix}</small>
              </div>
              <p>{s.text} {s.aside && <span className="muted">{s.aside}</span>}</p>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="footnote">From written feedback by five people I’ve coached.</Reveal>
      </div>
    </section>
  )
}
