import { profile, contact } from '../data/portfolio'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span className={styles.accent}>05.</span> Get In Touch
        </h2>
        <p className={styles.text}>{contact.text}</p>
        <div className={styles.btns}>
          <a href={`mailto:${profile.email}`} className={styles.btn}>
            Say Hello ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles.btn}>
            Let's Connect ↗
          </a>
        </div>
      </div>
    </section>
  )
}
