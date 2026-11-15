import { useRef } from 'react'
import { m, useScroll, useTransform } from 'motion/react'
import WhatsAppLink, { WhatsAppIcon } from './WhatsAppLink.jsx'

const ease = [0.2, 0.7, 0.2, 1]
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const chipY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section className="hero" ref={ref}>
      <div className="hero__bg" aria-hidden="true">
        <div className="grid-lines" />
        <div className="orb orb--a" />
        <div className="orb orb--b" />
      </div>

      <div className="wrap hero__inner">
        <m.div
          className="hero__copy"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        >
          <m.p className="eyebrow" variants={item}>
            <span className="dot" />Weekly one-on-one coaching for founders &amp; leaders
          </m.p>
          <m.h1 className="display" variants={item}>
            Build a team that <em className="glow-text">doesn’t wait for&nbsp;you.</em>
          </m.h1>
          <m.p className="lead" variants={item}>
            I work one-on-one with founders and leaders who want teams that take ownership and move things
            forward, without everything coming back to them.
          </m.p>
          <m.p className="sub" variants={item}>
            So you spend less time managing every little thing, and more time on what matters most.
          </m.p>
          <m.div className="hero__actions" variants={item}>
            <WhatsAppLink className="btn btn--primary btn--lg">
              <WhatsAppIcon /> Book a free 45-minute conversation <span className="arrow">→</span>
            </WhatsAppLink>
            <a href="#how" className="pill"><span className="pulse" />See how it works</a>
          </m.div>
        </m.div>

        <m.figure
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease }}
        >
          <div className="frame">
            <m.img
              style={{ y: imgY }}
              src="img/portrait-2.webp"
              alt="Vineeth Kattakudy speaking to a room of leaders"
              width="1069"
              height="1400"
              fetchPriority="high"
            />
            <span className="frame__corner frame__corner--tl" />
            <span className="frame__corner frame__corner--br" />
          </div>
          <m.div className="chip chip--float" style={{ y: chipY }}>
            <span className="chip__num">9.8<small>/10</small></span>
            <span className="chip__label">How likely clients are<br />to recommend</span>
          </m.div>
        </m.figure>
      </div>

      <a href="#proof" className="scroll-cue" aria-label="Scroll to next section"><span /></a>
    </section>
  )
}
