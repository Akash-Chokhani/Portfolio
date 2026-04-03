import styles from './Navbar.module.css'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#about" className={styles.logo}>
        <span className={styles.accent}>&gt;</span> Akash Chokhani
      </a>
      <ul className={styles.links}>
        {links.map(link => (
          <li key={link.href}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
