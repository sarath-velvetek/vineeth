import { LazyMotion, MotionConfig } from 'motion/react'

// Animation features load in a separate chunk so they don't delay first paint.
const loadFeatures = () => import('./motion-features.js').then((mod) => mod.default)
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Proof from './components/Proof.jsx'
import Problem from './components/Problem.jsx'
import Statement from './components/Statement.jsx'
import HowWeWork from './components/HowWeWork.jsx'
import Questions from './components/Questions.jsx'
import Outcomes from './components/Outcomes.jsx'
import Fit from './components/Fit.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import StickyCta from './components/StickyCta.jsx'

export default function App() {
  return (
    <LazyMotion features={loadFeatures} strict>
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Proof />
        <Problem />
        <Statement />
        <HowWeWork />
        <Questions />
        <Outcomes />
        <Fit />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </MotionConfig>
    </LazyMotion>
  )
}
