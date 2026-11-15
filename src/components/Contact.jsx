import Reveal, { Label } from './Reveal.jsx'
import WhatsAppLink, { WhatsAppIcon } from './WhatsAppLink.jsx'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact__bg" aria-hidden="true"><div className="orb orb--c" /><div className="grid-lines" /></div>
      <div className="wrap contact__inner">
        <Label n="07">Next step</Label>
        <Reveal as="h2" className="h2 h2--xl">Start with a <em>free conversation.</em></Reveal>
        <Reveal as="p" className="contact__lead">
          45 minutes on Zoom. Send me a message on WhatsApp with a little about you and your team, and we’ll find
          a time that works.
        </Reveal>
        <Reveal className="contact__actions" delay={0.1}>
          <WhatsAppLink className="btn btn--primary btn--lg btn--wa">
            <WhatsAppIcon /> Message me on WhatsApp <span className="arrow">→</span>
          </WhatsAppLink>
        </Reveal>
        <Reveal as="ul" className="contact__points" delay={0.2}>
          <li>Not a sales call</li>
          <li>Zoom, at a time that suits you</li>
          <li>Weekly one-on-one coaching</li>
        </Reveal>
      </div>
    </section>
  )
}
