import { m } from 'motion/react'

const ease = [0.2, 0.7, 0.2, 1]

// Fades and lifts its children in the first time they scroll into view.
export default function Reveal({ as = 'div', delay = 0, y = 24, children, ...rest }) {
  const Tag = m[as]
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.85, delay, ease }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function Label({ n, children }) {
  return (
    <Reveal as="p" className="label">
      <span>{n}</span> {children}
    </Reveal>
  )
}
