import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">Yasin Hosain</span>
        <ul className="footer-links">
          <li><a href="https://www.linkedin.com/in/iamya5in" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/iamya5in" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="mailto:nameisyasin@gmail.com">Email</a></li>
        </ul>
        <span className="footer-copy">© 2026 Yasin Hosain. All rights reserved.</span>
      </div>
    </footer>
  );
}
