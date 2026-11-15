import { Brand } from './Nav.jsx'
import WhatsAppLink from './WhatsAppLink.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <Brand />
        <nav className="footer__links" aria-label="Footer">
          <a href="https://vineethkattakudy.in/">Blog</a>
          <a href="#how">How we work</a>
          <a href="#about">About</a>
          <WhatsAppLink>WhatsApp</WhatsAppLink>
        </nav>
        <p className="footer__copy">
          © {new Date().getFullYear()} Vineeth Kattakudy · Co-founder, LeadCorp Human Solutions
        </p>
      </div>
    </footer>
  )
}
