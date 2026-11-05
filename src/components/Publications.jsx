import styles from './Publications.module.css'

const publications = [
  {
    title: 'Real-Time Car Honk Detection for On-the-Go Application using Lightweight Deep Learning Model',
    venue: '2024 IEEE International Conference on Advanced Networks and Telecommunications Systems (ANTS)',
    authors: 'Akash Chokhani, et al.',
    // Empty fields are hidden.
    abstract: '',
    link: 'https://ieeexplore.ieee.org/document/10898423',
  },
]

export default function Publications() {
  return (
    <section id="publications" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span className={styles.accent}>03.</span> Publications
        </h2>
        <div className={styles.list}>
          {publications.map((pub, i) => (
            <div key={i} className={styles.item}>
              <h3 className={styles.title}>
                {pub.link ? (
                  <a href={pub.link} target="_blank" rel="noreferrer" className={styles.titleLink}>
                    {pub.title} ↗
                  </a>
                ) : (
                  pub.title
                )}
              </h3>
              <div className={styles.meta}>
                <span className={styles.venue}>{pub.venue}</span>
              </div>
              {pub.authors && <p className={styles.authors}>{pub.authors}</p>}
              {pub.abstract && <p className={styles.abstract}>{pub.abstract}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
