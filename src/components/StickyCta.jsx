import { useEffect, useState } from 'react'
import WhatsAppLink, { WhatsAppIcon } from './WhatsAppLink.jsx'

// Floating WhatsApp button: appears after the hero, hides while the contact section is on screen.
export default function StickyCta() {
  const [pastHero, setPastHero] = useState(false)
  const [atContact, setAtContact] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('.hero')
    const contact = document.getElementById('contact')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.target === hero) setPastHero(!e.isIntersecting)
        if (e.target === contact) setAtContact(e.isIntersecting)
      })
    })
    hero && io.observe(hero)
    contact && io.observe(contact)
    return () => io.disconnect()
  }, [])

  const visible = pastHero && !atContact
  return (
    <WhatsAppLink
      className={`sticky-cta btn btn--primary${visible ? ' is-visible' : ''}`}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <WhatsAppIcon /> <span className="sticky-cta__text">Book a free conversation</span>
    </WhatsAppLink>
  )
}
