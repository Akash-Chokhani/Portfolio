import styles from './Skills.module.css'

const skillGroups = [
  {
    category: 'Languages',
    skills: ['C++', 'Python', 'HTML/CSS', 'TypeScript'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Flutter'],
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'PostgreSQL'],
  },
  {
    category: 'DevOps & Cloud',
    skills: ['AWS', 'Azure', 'Docker', 'GitHub Actions'],
  },
  {
    category: 'AI Integration',
    skills: ['API Integration', 'Prompt Engineering', 'RAG', 'Knowledge Graph'],
  },
  {
    category: 'AI Model Training',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face'],
  }
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span className={styles.accent}>04.</span> Skills
        </h2>
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.category} className={styles.group}>
              <h3 className={styles.category}>{group.category}</h3>
              <ul className={styles.list}>
                {group.skills.map(skill => (
                  <li key={skill} className={styles.skill}>
                    <span className={styles.bullet}>▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
