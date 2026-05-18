import React, { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, CheckCircle, Clock } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', services: [], message: '' })
  const [submitted, setSubmitted] = useState(false)

  const serviceOptions = ['Web Development', 'Marketing', 'WordPress', 'E-Commerce', 'SEO', 'Designing', 'App Development', 'Video Editing']

  const toggleService = (s) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter(x => x !== s) : [...f.services, s]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>📬 Get In Touch</div>
          <h1>Don't Hesitate to Contact Us</h1>
          <p>Share your vision with us — we'll collaborate to turn your concept into reality.</p>
        </div>
      </div>

      <section style={{ padding: '80px 0' }}>
        <div className="container contact-grid">
          {/* Info side */}
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 16px' }}>Let's Build Something Great Together</h2>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 36 }}>
              Your ideas matter to us! We believe in collaboration and would love to explore opportunities with you. Reach out — we're ready to turn your thoughts into reality.
            </p>

            <div className="contact-cards">
              <a href="tel:+923392103555" className="contact-card">
                <div className="contact-card-icon"><Phone size={22} /></div>
                <div>
                  <strong>Give Us a Call</strong>
                  <span>+92 339 2103555</span>
                </div>
              </a>
              <a href="mailto:reachout@omaanu.com" className="contact-card">
                <div className="contact-card-icon"><Mail size={22} /></div>
                <div>
                  <strong>Email Us</strong>
                  <span>reachout@omaanu.com</span>
                </div>
              </a>
              <div className="contact-card">
                <div className="contact-card-icon"><MapPin size={22} /></div>
                <div>
                  <strong>Our Offices</strong>
                  <span>🇵🇰 Pakistan &nbsp;·&nbsp; 🇬🇧 UK &nbsp;·&nbsp; 🇦🇪 UAE</span>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon"><Clock size={22} /></div>
                <div>
                  <strong>Working Hours</strong>
                  <span>Mon–Sat · 9am–7pm PKT</span>
                </div>
              </div>
            </div>

            <div className="why-partner">
              <h4>Why Partner With Us?</h4>
              {['Exceptional Professionals', 'Bespoke Services For All', 'On-Time Project Completion'].map(f => (
                <div key={f} className="partner-feat">
                  <CheckCircle size={16} color="var(--blue-500)" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <a href="http://wa.link/xjk9wa" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', marginTop: 24 }}>
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>

          {/* Form side */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon">✅</div>
                <h3>Thank You!</h3>
                <p>We've received your inquiry. Our team will get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Get in Touch With Us</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Your name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="you@example.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                  </div>
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+1 234 567 8900" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                </div>

                <div className="form-group">
                  <label>Services Interested In</label>
                  <div className="service-checkboxes">
                    {serviceOptions.map(s => (
                      <button key={s} type="button" className={`service-check${form.services.includes(s) ? ' active' : ''}`} onClick={() => toggleService(s)}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea placeholder="Tell us about your project..." rows={5} required value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px 28px', fontSize: '1rem' }}>
                  Send Your Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div className="map-placeholder">
        <div className="map-overlay">
          <MapPin size={32} color="white" />
          <h4>🇵🇰 Pakistan &nbsp;·&nbsp; 🇬🇧 United Kingdom &nbsp;·&nbsp; 🇦🇪 UAE</h4>
          <p>International offices serving clients worldwide</p>
        </div>
      </div>
    </main>
  )
}
