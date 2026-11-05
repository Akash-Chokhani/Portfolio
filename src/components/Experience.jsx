import { experiences } from '../data/portfolio'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span className={styles.accent}>01.</span> Experience
        </h2>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.period}>{exp.period}</div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.company}>{exp.company}</span>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.tags}>
                  {exp.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
