import { useRef } from 'react'
import { m, useScroll, useTransform } from 'motion/react'
import Reveal from './Reveal.jsx'

export default function Statement() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section className="statement" aria-label="Philosophy" ref={ref}>
      <div className="statement__bg" aria-hidden="true">
        <m.img style={{ y }} src="img/session.webp" alt="" width="1800" height="1013" loading="lazy" decoding="async" />
      </div>
      <div className="wrap">
        <Reveal as="p" className="statement__line">Authority is <em>given</em> to you.</Reveal>
        <Reveal as="p" className="statement__line statement__line--accent" delay={0.15}>
          Influence is <em>earned</em> in other people’s heads.
        </Reveal>
        <Reveal as="p" className="statement__note" delay={0.3}>
          Every business problem has a human layer. A lot of times, it starts with the person at the top, and
          that’s where we work.
        </Reveal>
      </div>
    </section>
  )
}
