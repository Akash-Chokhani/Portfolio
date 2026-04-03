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
    skills: ['FastAPI', 'Django', 'Node.js', 'Express.js'],
  },
  {
    category: 'AI Integration',
    skills: ['OpenAI', 'Gemini Image', 'OpenRouter', 'Tensorflow'],
  },
  {
    category: 'DevOps & Cloud',
    skills: ['Azure', 'Docker', 'GitHub Actions', 'Railway'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'VS Code', 'Claude Code', 'Linux'],
  },
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
