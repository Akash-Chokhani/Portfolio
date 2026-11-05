import styles from './Experience.module.css'

const experiences = [
  {
    company: 'AI FreedomClub',
    role: 'Co-Founder & CTO',
    period: 'Feb 2026 — Present',
    description: 'Collaborating and building SaaS products for businesses, freelancers, and content creators.',
    tags: ['React', 'Node.js', 'OpenRouter', 'Railway'],
  },
  {
    company: 'Freelance',
    role: 'AI Software Engineer & DL Engineer',
    period: 'Feb 2025 — Present',
    description: 'Worked for clients on projects ranging from AI-website development to custom deep learning model training.',
    tags: ['OpenAI', 'AWS', 'TensorFlow', 'PyTorch'],
  },
  {
    company: 'Hexagon R&D India',
    role: 'Software Engineer',
    period: 'Jul 2024 — Sep 2025',
    description: 'Collaborated and contributed to Global Public Safety and Security project with the team.',
    tags: ['React', 'Redis', 'MySQL', 'Azure'],
  },
  {
    company: 'SEO ORB',
    role: 'Software Developer Intern',
    period: 'Dec 2023 — May 2024',
    description: 'Implemented automation scripts and applications for time consuming manual tasks which boosted the productivity of the teams.',
    tags: ['Python', 'OpenAI', 'FastAPI', 'AWS'],
  },
  {
    company: 'National Institute of Technology Durgapur',
    role: 'Research Intern',
    period: 'May 2023 — Jun 2023',
    description: 'Built and trained lightweight audio detection model and integrated it into a mobile application for real-time detection and feedback.',
    tags: ['Python', 'Keras', 'TensorFlow', 'Flutter'],
  },
]

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
