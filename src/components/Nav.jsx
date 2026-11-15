import { useEffect, useState } from 'react'
import { nav } from '../content.js'
import WhatsAppLink, { WhatsAppIcon } from './WhatsAppLink.jsx'

export function Brand() {
  return (
    <a href="#top" className="brand" aria-label="Vineeth Kattakudy — home">
      <span className="brand__mark">VK</span>
      <span className="brand__name">Vineeth Kattakudy</span>
    </a>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link for the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav${scrolled || open ? ' is-scrolled' : ''}`} id="top">
      <div className="nav__inner wrap">
        <Brand />
        <nav className={`nav__links${open ? ' is-open' : ''}`} id="nav-links" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={close} className={active === n.href ? 'is-active' : undefined}>
              {n.label}
            </a>
          ))}
          <WhatsAppLink onClick={close} className="btn btn--sm btn--primary nav__cta">
            <WhatsAppIcon width="17" height="17" /> Book a free conversation
          </WhatsAppLink>
        </nav>
        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  )
}
