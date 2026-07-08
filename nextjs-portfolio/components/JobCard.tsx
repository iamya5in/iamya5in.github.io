'use client';

import { useState } from 'react';

interface JobCardProps {
  date: string;
  company: string;
  role: string;
  bullets: string[];
  isLastCard?: boolean;
}

export default function JobCard({
  date,
  company,
  role,
  bullets,
  isLastCard = false,
}: JobCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div
      className="job-card"
      style={isLastCard ? { borderBottom: '1px solid var(--rule)' } : undefined}
      onClick={toggle}
    >
      <div className="job-meta">
        <div className="job-date mono">{date}</div>
        <div className="job-company playfair">{company}</div>
      </div>
      <div className="job-divider" />
      <div className="job-body">
        <h3 className="job-role playfair">{role}</h3>
        <div className="job-toggle-row">
          <button
            className={`job-toggle-btn mono${isOpen ? ' open' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
          >
            {isOpen ? 'Close Details −' : 'View Details +'}
          </button>
        </div>
        <div className={`job-content${isOpen ? ' open' : ''}`}>
          <ul className="job-bullets">
            {bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
