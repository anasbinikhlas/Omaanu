import React from 'react'
import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.

We also automatically collect certain information about your device and how you interact with our website, including IP address, browser type, pages visited, time spent on pages, and referring URLs.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:
• Respond to your inquiries and provide requested services
• Send you project updates, newsletters, and marketing communications (with your consent)
• Improve our website and services
• Comply with legal obligations
• Protect against fraud and unauthorized use`,
  },
  {
    title: '3. Information Sharing',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.

We may disclose your information when required by law, to enforce our site policies, or to protect our rights or safety.`,
  },
  {
    title: '4. Data Security',
    content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '5. Cookies',
    content: `Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our site. You can choose to disable cookies through your browser settings, though this may affect certain functionality.`,
  },
  {
    title: '6. Third-Party Links',
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: '7. Your Rights',
    content: `You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly. To exercise any of these rights, please contact us at reachout@omaanu.com.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website with an updated effective date. Your continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '9. Contact Us',
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us at:

Email: reachout@omaanu.com
Phone: +92 339 2103555
Address: Pakistan · United Kingdom · UAE`,
  },
]

export default function PrivacyPolicy() {
  return (
    <main>
      <div className="page-hero" style={{ padding: '120px 0 60px' }}>
        <div className="container">
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>🔒 Legal</div>
          <h1>Privacy Policy</h1>
          <p>Last updated: January 1, 2025</p>
        </div>
      </div>

      <section style={{ padding: '72px 0' }}>
        <div className="container pp-layout">
          {/* TOC */}
          <aside className="pp-toc">
            <div className="pp-toc-inner">
              <h4>Contents</h4>
              <ul>
                {sections.map(s => (
                  <li key={s.title}>
                    <a href={`#${s.title.toLowerCase().replace(/\s+/g, '-')}`}>{s.title}</a>
                  </li>
                ))}
              </ul>
              <div className="pp-toc-cta">
                <p>Have questions?</p>
                <Link to="/contact" className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.85rem' }}>Contact Us</Link>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="pp-content">
            <div className="pp-intro">
              <p>
                At Omaanu, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully.
              </p>
            </div>
            {sections.map(s => (
              <div key={s.title} className="pp-section" id={s.title.toLowerCase().replace(/\s+/g, '-')}>
                <h3>{s.title}</h3>
                <div className="pp-text">
                  {s.content.split('\n').map((para, i) => para.trim() ? <p key={i}>{para}</p> : null)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
