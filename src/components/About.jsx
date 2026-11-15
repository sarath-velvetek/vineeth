import { m } from 'motion/react'
import Reveal, { Label } from './Reveal.jsx'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <m.figure
          className="about__img"
          initial={{ opacity: 0, clipPath: 'inset(12% 12% 12% 12% round 28px)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 28px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <img src="img/portrait.webp" alt="Vineeth Kattakudy listening during a leadership session" width="1120" height="1400" loading="lazy" decoding="async" />
        </m.figure>
        <div className="about__copy">
          <Label n="06">About me</Label>
          <Reveal as="h2" className="h2">I’m Vineeth <em>Kattakudy.</em></Reveal>
          <Reveal as="p">
            I work with founders and leaders at the point where their title stops being enough. I co-founded{' '}
            <strong>LeadCorp Human Solutions</strong>, where we’ve spent years in rooms with teams and their leaders.
          </Reveal>
          <Reveal as="p">
            What I’ve learned is that every business problem has a human layer, and a lot of times it starts with the
            person at the top.
          </Reveal>
          <Reveal as="blockquote">
            I don’t hand leaders a framework. I help them see what their people see, and change what only they can change.
          </Reveal>
        </div>
      </div>
    </section>
  )
}
