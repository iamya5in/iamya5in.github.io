import JobCard from './JobCard';

const jobs = [
  {
    date: 'Sept 2022 — Present',
    company: 'Samsung R&D Institute Bangladesh',
    role: 'Lead Engineer',
    bullets: [
      'Led end-to-end development of Samsung Pay Android and Flutter SDKs, including comprehensive sample applications for global developer adoption.',
      'Spearheaded architecture and implementation of the Samsung In-App Purchase Flutter SDK, enhancing cross-platform monetization for developers.',
      'Served as Developer Advocate for Samsung Pay SDK, providing critical technical support and creating extensive documentation.',
      'Collaborated with global Samsung engineering teams, product managers, and business stakeholders to align SDK development with strategic objectives.',
    ],
  },
  {
    date: 'Feb 2020 — Sept 2022',
    company: 'MobilityOne Sdn Bhd (TapnPay)',
    role: 'Android Developer',
    bullets: [
      'Optimized Android agent application to support multiple POS terminals, ensuring broad cross-device compatibility and enhanced operational efficiency.',
      'Engineered NFC capabilities, thermal printing, and Android serial port communications for advanced payment terminal solutions.',
      'Led redevelopment of municipal bill payment and CRS ticketing applications, achieving a 30% improvement in system stability.',
      'Executed full migration of a legacy Ionic application to native Android, achieving a 40% uplift in performance and user experience.',
      'Developed a parallel Flutter application extending financial services to the iOS platform.',
    ],
  },
  {
    date: 'Dec 2017 — Dec 2019',
    company: 'CloudWell Ltd (PayWell)',
    role: 'Junior Android Programmer',
    bullets: [
      'Developed and maintained Android applications for sales operations and KYC data collection processes.',
      'Integrated mPOS devices and Bluetooth printers to streamline payment processing and receipt generation.',
      'Conducted R&D on WebRTC-based dialer functionalities and payment features including bill payments, mobile top-ups, and ticketing.',
    ],
    isLastCard: true,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="content-grid">
        <div className="experience-section">
          <div className="section-label mono">Career Timeline</div>
          <h2 className="experience-title playfair">
            Professional<br /><em>Experience</em>
          </h2>
        </div>

        {jobs.map((job) => (
          <JobCard key={job.company} {...job} />
        ))}
      </div>
    </section>
  );
}
