import Image from 'next/image';

export default function Hero() {
  return (
    <div className="hero">
      {/* Real photo — portrait orientation, centered on right side */}
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '75%' }}>
        <Image
          src="/hero-bg.png"
          alt="Yasin Hosain at his developer workstation"
          fill
          className="hero-bg-img"
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Dark gradient overlay — solid left, fades right so person + desk visible */}
      <div className="hero-overlay" />

      {/* Text content — left aligned */}
      <div className="hero-content">
        <div className="hero-kicker">
          Hi, I&apos;m Yasin.
          <span className="hero-cursor" aria-hidden="true" />
        </div>
        <h1 className="hero-headline">
          A Passionate Senior<br />
          Software Engineer<br />
          Building Impactful Applications.
        </h1>
        <p className="hero-sub">
          Specializing in Android, Flutter, FinTech and Product-specific SDKs.
        </p>
        <a href="#projects" className="hero-btn">
          View Projects
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
