'use client';
import { useState } from 'react';

export default function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:nameisyasin@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
  };

  return (
    <div className="section">
      <div className="contact-header">
        <div className="section-label">Reach Out</div>
        <h1 className="section-title">Let&apos;s Connect</h1>
        <p className="section-desc">
          Whether you have a project proposal, a collaboration idea, or just want to say hi — my inbox is always open.
        </p>
      </div>

      <div className="contact-layout">
        {/* Form */}
        <div className="contact-form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="How can I help you?" value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your message here..." value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="form-submit">
              Send Message
              <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
            </button>
          </form>
        </div>

        {/* Info cards */}
        <div className="contact-info-stack">
          <a href="mailto:nameisyasin@gmail.com" className="contact-info-card">
            <div className="contact-info-icon blue">
              <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            </div>
            <div className="contact-info-name">Email</div>
            <div className="contact-info-value">nameisyasin@gmail.com</div>
          </a>

          <a href="https://www.linkedin.com/in/iamya5in" target="_blank" rel="noopener noreferrer" className="contact-info-card">
            <div className="contact-info-icon blue">
              <svg viewBox="0 0 24 24"><rect x="2" y="7" width="4" height="14" /><circle cx="4" cy="4" r="2" /><path d="M14 11a4 4 0 014 4v6h-4v-6" /><path d="M10 7h4v14h-4z" /></svg>
            </div>
            <div className="contact-info-name">LinkedIn</div>
            <div className="contact-info-value">Connect on LinkedIn</div>
          </a>

          <div className="contact-info-card" style={{ cursor: 'default' }}>
            <div className="contact-info-icon gray">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
            </div>
            <div className="contact-info-name">Location</div>
            <div className="contact-info-value">Dhaka, Bangladesh</div>
            <div className="contact-info-value" style={{ marginTop: '0.2rem', fontSize: '0.8rem' }}>Available for remote work worldwide.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
