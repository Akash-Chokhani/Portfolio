import styles from './Projects.module.css'

const projects = [
  {
    name: 'AI Vid Summary',
    description: 'A SaaS platform to get instant summaries of youtube videos and also chat with AI about them.',
    tags: ['React', 'Node.js', 'OpenRouter', 'Railway'],
    github: null,
    live: 'https://www.aividsummary.com/',
  },
  {
    name: 'Car Honk Detection',
    description: 'Real-time car honk detection for on-the-go application using lightweight deep learning model',
    tags: ['Python', 'Keras', 'Tensorflow', 'Flutter'],
    github: 'https://github.com/Akash-Chokhani/Car-Honk-Detection',
    live: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span className={styles.accent}>02.</span> Projects
        </h2>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.cardHeader}>
                  <span className={styles.folderIcon}>{'{ }'}</span>
                  <div className={styles.cardLinks}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className={styles.cardLink} aria-label="GitHub">
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className={styles.cardLink} aria-label="Live site">
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>
              </div>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
