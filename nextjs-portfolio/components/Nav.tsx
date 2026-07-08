'use client';
import { useEffect, useState } from 'react';

const links = [
  { href: '#home',     label: 'Home'     },
  { href: '#about',    label: 'About'    },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact'  },
];

export default function Nav() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = links.map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // fires when section crosses the middle of viewport
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#home" className="nav-logo" onClick={(e) => scrollTo(e, 'home')}>
          Yasin Hosain
        </a>
        <ul className="nav-links">
          {links.map(({ href, label }) => {
            const id = href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  className={active === id ? 'active' : ''}
                  onClick={(e) => scrollTo(e, id)}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <a href="mailto:nameisyasin@gmail.com" className="nav-hire-btn">
          Hire Me
        </a>
      </div>
    </nav>
  );
}
