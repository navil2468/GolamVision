// Shared navigation for the header and footer.

export const INSTAGRAM_URL = 'https://www.instagram.com/golamsvision/'

export const navLinks = [
  { href: '/Portraits', label: 'LIFESTYLE' },
  { href: '/Graduation', label: 'GRAD & PROM' },
  { href: '/Events', label: 'EVENTS' },
  { href: '/Studio', label: 'STUDIO' },
]

export const CONTACT_EMAIL = 'Golamsvision@gmail.com'
export const CONTACT_PHONE = '929-422-9605'
export const INSTAGRAM_HANDLE = 'Golamsvision'

export const contactMethods = [
  { label: 'EMAIL', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: 'INSTAGRAM', value: `@${INSTAGRAM_HANDLE}`, href: INSTAGRAM_URL, external: true },
  { label: 'PHONE', value: CONTACT_PHONE, href: `tel:+1${CONTACT_PHONE.replace(/-/g, '')}` },
]
