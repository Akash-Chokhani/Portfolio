import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span className={styles.accent}>05.</span> Get In Touch
        </h2>
        <p className={styles.text}>
          I'm currently available for freelance projects. Whether you have a project in mind,
          need help with something specific, or just want to connect — feel free to reach out
          via email or LinkedIn.
        </p>
        <div className={styles.btns}>
          <a href="mailto:akashchokhani99@gmail.com" className={styles.btn}>
            Say Hello ↗
          </a>
          <a href="https://linkedin.com/in/akash-chokhani/" target="_blank" rel="noreferrer" className={styles.btn}>
            Let's Connect ↗
          </a>
        </div>
      </div>
    </section>
  )
}
