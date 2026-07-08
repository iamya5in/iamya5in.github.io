'use client';

import dynamic from 'next/dynamic';

const SkillsChart = dynamic(() => import('./SkillsChart'), { ssr: false });

const sidebarGroups = [
  {
    label: 'Software Engineering',
    items: ['System Design', 'OOP', 'RDBMS / SQL', 'API Design'],
  },
  {
    label: 'FinTech & Payments',
    items: ['Payment Gateways', 'NFC & POS', 'In-App Purchase'],
  },
  {
    label: 'Tools & Methods',
    items: ['Git', 'JIRA', 'Agile', 'Dev Advocacy', 'Documentation'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="content-grid">
        <div className="skills-section">
          <div className="section-label mono">Core Competencies</div>
          <div className="skills-header">
            <h2 className="skills-title playfair">
              Technical<br />Expertise
            </h2>
            <p className="skills-deck">
              Proficiency across mobile platforms, payment systems, and developer
              tooling — built over eight years of hands-on production work.
            </p>
          </div>

          <div className="skills-layout">
            <div>
              <SkillsChart />
            </div>
            <div className="skills-sidebar">
              {sidebarGroups.map((group) => (
                <div className="skills-sidebar-group" key={group.label}>
                  <div className="skills-sidebar-label mono">{group.label}</div>
                  <div className="skills-sidebar-items">
                    {group.items.map((item) => (
                      <span className="skill-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
