import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'
import styles from './Navbar.module.css'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = e => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <nav className={styles.nav}>
      <a href="#about" className={styles.logo} onClick={() => setOpen(false)}>
        <span className={styles.accent}>&gt;</span> {profile.name}
      </a>
      <button
        type="button"
        className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen(o => !o)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul id="nav-links" className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
        {links.map(link => (
          <li key={link.href}>
            <a href={link.href} className={styles.link} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
