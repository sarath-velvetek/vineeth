import { useCallback, useEffect, useRef, useState } from 'react'
import Reveal, { Label } from './Reveal.jsx'
import { questions } from '../content.js'

const pad = (n) => String(n).padStart(2, '0')

export default function Questions() {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const last = questions.length - 1

  // Derive the active slide from the scroll position so swipe, trackpad and buttons all agree.
  useEffect(() => {
    const track = trackRef.current
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const slides = [...track.children]
        const origin = slides[0].offsetLeft
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) return setIndex(last)
        let best = 0
        slides.forEach((s, i) => {
          if (Math.abs(s.offsetLeft - origin - track.scrollLeft) < Math.abs(slides[best].offsetLeft - origin - track.scrollLeft)) best = i
        })
        setIndex(best)
      })
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [last])

  const go = useCallback((i) => {
    const track = trackRef.current
    const slides = track.children
    const target = Math.max(0, Math.min(last, i))
    track.scrollTo({ left: slides[target].offsetLeft - slides[0].offsetLeft })
    setIndex(target)
  }, [last])

  const onKey = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1) }
  }

  return (
    <section className="section section--alt" id="questions">
      <div className="wrap">
        <header className="section__head section__head--row">
          <div>
            <Label n="03">What your team is asking</Label>
            <Reveal as="h2" className="h2">
              Everyone around you is quietly answering <em>four questions.</em>
            </Reveal>
          </div>
          <Reveal className="slider__controls">
            <span className="slider__count" aria-live="polite">
              <b>{pad(index + 1)}</b> / {pad(questions.length)}
            </span>
            <button className="icon-btn" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous question">←</button>
            <button className="icon-btn" onClick={() => go(index + 1)} disabled={index === last} aria-label="Next question">→</button>
          </Reveal>
        </header>

        <Reveal className="slider">
          <div
            className="slider__track"
            ref={trackRef}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Four questions — swipe or use arrow keys"
            onKeyDown={onKey}
          >
            {questions.map((item, i) => (
              <article
                className={`slide${i === index ? ' is-active' : ''}`}
                key={item.q}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${questions.length}`}
                onClick={() => i !== index && go(i)}
              >
                <span className="slide__n">Q{i + 1}</span>
                <h3 className="slide__q">“{item.q}”</h3>
                <p className="slide__a"><span>Decides</span>{item.a}</p>
              </article>
            ))}
          </div>
          <div className="slider__dots">
            {questions.map((item, i) => (
              <button
                key={item.q}
                className={i === index ? 'is-active' : undefined}
                onClick={() => go(i)}
                aria-label={`Go to question ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
