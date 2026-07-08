import Image from 'next/image';

const projects = [
  {
    title: 'Samsung Pay SDK',
    image: '/project-samsung-pay.png',
    desc: 'Led end-to-end development of the Samsung Pay Android & Flutter SDKs. Includes comprehensive sample apps and documentation supporting global developer adoption across Samsung devices.',
    tags: ['Kotlin', 'Flutter', 'SDK', 'Android'],
    demoUrl: 'https://developer.samsung.com/samsung-pay',
    githubUrl: 'https://github.com/iamya5in',
  },
  {
    title: 'Samsung IAP Flutter SDK',
    image: '/project-flutter-iap.png',
    desc: 'Spearheaded architecture and implementation of the Samsung In-App Purchase Flutter SDK — enabling cross-platform monetization for developers building on Samsung Galaxy Store.',
    tags: ['Flutter', 'Dart', 'SDK', 'Galaxy Store'],
    demoUrl: 'https://developer.samsung.com/iap',
    githubUrl: 'https://github.com/iamya5in',
  },
  {
    title: 'TapnPay POS Agent',
    image: '/project-tapnpay.png',
    desc: 'Engineered a multi-terminal Android POS agent app with NFC contactless payments, thermal printing, and serial port communications. Achieved 40% performance uplift through native rewrite.',
    tags: ['Android', 'NFC', 'Bluetooth', 'FinTech'],
    demoUrl: null,
    githubUrl: 'https://github.com/iamya5in',
  },
];

export default function ProjectsGrid() {
  return (
    <div className="section">
      <div className="section-label">My Work</div>
      <h1 className="section-title">Featured Projects</h1>
      <p className="section-desc">
        A selection of production mobile engineering work — spanning SDK platforms,
        payment terminals, and cross-platform applications used in the real world.
      </p>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <Image
              src={p.image}
              alt={p.title}
              width={400}
              height={200}
              className="project-img"
            />
            <div className="project-body">
              <h2 className="project-title">{p.title}</h2>
              <p className="project-desc">{p.desc}</p>
              <div className="tags" style={{ marginBottom: '1rem' }}>
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                {p.demoUrl && (
                  <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo
                    <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                  </a>
                )}
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link project-link-gh">
                  GitHub
                  <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
