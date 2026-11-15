// All page copy lives here so it can be edited without touching components.

// WhatsApp number in international format, digits only (e.g. 919876543210 for +91 98765 43210).
export const WHATSAPP_NUMBER = '919048507549'

export const WHATSAPP_MESSAGE =
  'Hi Vineeth, I found your website and would like to book a free 45-minute conversation about my team.'

export const whatsappLink = (text = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

export const nav = [
  { href: '#problem', label: 'The problem' },
  { href: '#how', label: 'How we work' },
  { href: '#about', label: 'About' },
]

export const stats = [
  { value: 9.8, decimals: 1, suffix: ' / 10', text: 'How likely they are to recommend me' },
  { value: 5, suffix: ' of 5', text: 'Said it was worth more than they invested', aside: '(3 said much more)' },
  { value: 4, suffix: ' of 5', text: 'Said the help is still with them, months or years later' },
]

export const symptoms = [
  'When you travel, decisions stop.',
  'You hired good managers, but they still check with you first.',
  'You hear about problems late, usually once they’re expensive.',
  'Your best people either leave or go quiet.',
  'You have the title, but people still look to the person before you.',
]

export const steps = [
  { tag: 'Free · 45 min', title: 'A free first conversation', text: '45 minutes on Zoom. A real conversation about what’s going on, not a sales call.' },
  { tag: 'Weekly · 60 min', title: 'A weekly call', text: '60 minutes on Zoom, every week. We look at what’s happening with your people and your part in it.' },
  { tag: 'Anytime', title: 'WhatsApp in between', text: 'Check in when something comes up: a hard conversation, a decision, a moment you want to think through.' },
  { tag: 'Every call', title: 'Follow-through', text: 'Every call ends with one agreed action, and the next one starts with what happened.' },
]

export const questions = [
  { q: 'Can I tell you the truth?', a: 'Whether bad news reaches you early or late.' },
  { q: 'Do you believe in me?', a: 'Whether people bring their best or play safe.' },
  { q: 'Do I believe in where we’re going?', a: 'Whether they follow willingly or only comply.' },
  { q: 'Can I act without you?', a: 'Whether things move when you’re not in the room.' },
]

export const outcomes = [
  'Seeing their business from a new angle',
  'Clarity on where to take it next',
  'Acting on decisions instead of waiting',
  'Breaking a pattern that held them back',
  'Deciding with less second-guessing',
]

export const fitYes = [
  'You run a business, are taking one over, or lead a team that depends on you more than you’d like.',
  'You’re genuinely curious about how your people experience your leadership.',
  'You’re willing to look at your own role in the challenges you’re facing.',
  'You want people to think for themselves, take ownership and make decisions, even when they do things differently from you.',
  'You believe becoming a better leader starts with looking at yourself.',
]

export const fitNo = [
  'You believe the problem is entirely with your people.',
  'You’re looking for another framework, formula or management system to implement.',
  'You want someone to tell you exactly what to do without questioning how you currently lead.',
  'You’re unwilling to act on uncomfortable insights.',
  'You’d rather hear what confirms your existing beliefs than discover something unexpected.',
]
