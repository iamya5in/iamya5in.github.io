import Image from 'next/image';

const experience = [
  {
    date: '2022 – Present',
    role: 'Lead Engineer',
    company: 'Samsung R&D Institute BD',
    desc: 'Led development of Samsung Pay & In-App Purchase Android/Flutter SDKs. Served as Developer Advocate supporting global partners with documentation and technical guidance.',
  },
  {
    date: '2020 – 2022',
    role: 'Android Developer',
    company: 'MobilityOne (TapnPay)',
    desc: 'Built NFC-enabled POS terminal apps supporting multiple device types. Migrated legacy Ionic app to native Android — achieving 40% performance uplift.',
  },
  {
    date: '2017 – 2019',
    role: 'Junior Android Programmer',
    company: 'CloudWell Ltd (PayWell)',
    desc: 'Developed Android sales and KYC apps, integrated mPOS devices and Bluetooth printers for mobile payment and receipt workflows.',
  },
];

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

export default function AboutContent() {
  return (
    <div className="section">
      {/* Bio */}
      <div className="about-hero">
        <Image
          src="/about-photo.png"
          alt="Yasin Hosain"
          width={340}
          height={420}
          className="about-photo"
        />
        <div>
          <h1 className="about-bio-title">My Journey</h1>
          <p className="about-bio-text">
            I&apos;m Yasin Hosain, a Senior Mobile Engineer deeply passionate about
            building high-quality, scalable mobile experiences. With 8+ years of
            hands-on experience in Android and Flutter, my journey has taken me
            from KYC payment apps at a Bangladeshi FinTech startup all the way to
            leading SDK engineering at Samsung R&amp;D.
          </p>
          <p className="about-bio-text">
            My expertise lies at the intersection of mobile engineering and financial
            technology — architecting secure payment solutions, integrating NFC and
            EMV protocols, and building SDKs that developers around the world rely on.
            I care deeply about API design, documentation quality, and developer
            experience.
          </p>
          <p className="about-bio-text">
            Outside of shipping code, I enjoy mentoring junior engineers, contributing
            to developer communities, and staying ahead of the ever-evolving Android
            and Flutter ecosystems. I thrive in collaborative, product-focused teams
            where engineering quality is a first-class concern.
          </p>
        </div>
      </div>

      {/* Experience */}
      <h2 className="about-experience-title">Experience</h2>
      <div className="exp-grid">
        {experience.map((job) => (
          <div className="exp-card" key={job.company}>
            <div className="exp-date">{job.date}</div>
            <div className="exp-role">{job.role}</div>
            <div className="exp-company">{job.company}</div>
            <p className="exp-desc">{job.desc}</p>
          </div>
        ))}
      </div>

      {/* Education */}
      <h2 className="about-experience-title" style={{ marginTop: '3rem' }}>Education</h2>
      <div className="edu-grid">
        {education.map((edu) => (
          <div className="edu-card" key={edu.school}>
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-school">{edu.school}</div>
            <div className="edu-cgpa">{edu.cgpa}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
