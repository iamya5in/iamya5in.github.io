const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    school: 'Daffodil International University',
    cgpa: 'CGPA 3.15 / 4.00',
  },
  {
    degree: 'Diploma in Computer Engineering',
    school: 'Barisal Polytechnic Institute',
    cgpa: 'CGPA 3.21 / 4.00',
  },
];

const contacts = [
  {
    icon: 'Email',
    value: 'nameisyasin@gmail.com',
    href: 'mailto:nameisyasin@gmail.com',
  },
  {
    icon: 'LinkedIn',
    value: 'linkedin.com/in/iamya5in',
    href: 'https://www.linkedin.com/in/iamya5in',
    target: '_blank',
  },
  {
    icon: 'GitHub',
    value: 'github.com/iamya5in',
    href: 'https://github.com/iamya5in',
    target: '_blank',
  },
  {
    icon: 'Phone',
    value: '+880 171 695 2738',
    href: undefined,
  },
];

export default function BottomSection() {
  return (
    <section id="contact">
      <div className="content-grid">
        <div className="bottom-section">
          {/* Education */}
          <div className="bottom-col">
            <div className="section-label mono">Academic Background</div>
            <h2 className="bottom-title playfair">Education</h2>
            {education.map((edu) => (
              <div className="edu-item" key={edu.school}>
                <div className="edu-degree playfair">{edu.degree}</div>
                <div className="edu-school">{edu.school}</div>
                <div className="edu-cgpa mono">{edu.cgpa}</div>
              </div>
            ))}
          </div>

          <div className="bottom-divider" />

          {/* Contact */}
          <div className="bottom-col">
            <div className="section-label mono">Open to Opportunities</div>
            <h2 className="bottom-title playfair">Get in Touch</h2>
            {contacts.map((contact) =>
              contact.href ? (
                <a
                  key={contact.icon}
                  href={contact.href}
                  className="contact-link"
                  target={contact.target}
                  rel={contact.target === '_blank' ? 'noopener noreferrer' : undefined}
                >
                  <span className="contact-icon mono">{contact.icon}</span>
                  <span className="contact-value">{contact.value}</span>
                </a>
              ) : (
                <div
                  key={contact.icon}
                  className="contact-link"
                  style={{ cursor: 'default' }}
                >
                  <span className="contact-icon mono">{contact.icon}</span>
                  <span className="contact-value">{contact.value}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
