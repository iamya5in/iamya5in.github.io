const expertiseData = [
  {
    title: 'Mobile Development',
    desc: 'Crafting high-performance, pixel-perfect native Android apps and cross-platform Flutter applications used by millions of users globally.',
    tags: ['Android', 'Flutter', 'Kotlin', 'Dart'],
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: 'SDK Engineering',
    desc: 'Architecting and publishing production-grade SDKs adopted by developers worldwide — with robust API design, documentation, and developer advocacy.',
    tags: ['Android SDK', 'Flutter SDK', 'API Design', 'Dev Advocacy'],
    icon: (
      <svg viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'FinTech & Payments',
    desc: 'Implementing secure payment solutions including NFC contactless payments, EMV POS integrations, and in-app purchase flows for global financial platforms.',
    tags: ['NFC & POS', 'Payment Gateways', 'In-App Purchase', 'EMV'],
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
];

export default function CoreExpertise() {
  return (
    <div className="expertise-bg">
      <div className="section">
        <div className="expertise-header">
          <div className="section-label">What I Do</div>
          <h2 className="section-title">Core Expertise</h2>
          <p className="section-desc">
            Delivering end-to-end mobile solutions with a focus on performance, security, and developer experience.
          </p>
        </div>
        <div className="expertise-grid">
          {expertiseData.map((item) => (
            <div className="expertise-card" key={item.title}>
              <div className="expertise-icon">{item.icon}</div>
              <h3 className="expertise-card-title">{item.title}</h3>
              <p className="expertise-card-desc">{item.desc}</p>
              <div className="tags">
                {item.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
