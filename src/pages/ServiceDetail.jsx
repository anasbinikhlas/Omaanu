import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react'
import { services } from '../data/services'
import './ServiceDetail.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  if (!service) return (
    <main style={{ padding: '180px 0 80px', textAlign: 'center' }}>
      <div className="container">
        <h2>Service Not Found</h2>
        <Link to="/services" className="btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>Back to Services</Link>
      </div>
    </main>
  )

  const related = services.filter(s => s.slug !== slug).slice(0, 3)

  return (
    <main>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>{service.icon} {service.title}</div>
          <h1>{service.tagline}</h1>
          <p>{service.description}</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-white">Get a Quote <ArrowRight size={16} /></Link>
            <a href="http://wa.link/xjk9wa" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,.4)', color: 'white' }}>WhatsApp Us</a>
          </div>
        </div>
      </div>

      {/* Sub-services */}
      <section style={{ padding: '80px 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label">What We Offer</div>
            <h2 className="section-title">{service.title} Services</h2>
          </div>
          <div className="sub-grid">
            {service.subServices.map((sub, i) => (
              <div key={sub.name} className="sub-card fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="sub-icon">{sub.icon}</div>
                <h4 className="sub-name">{sub.name}</h4>
                <p className="sub-desc">{sub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features + CTA */}
      <section style={{ padding: '80px 0' }}>
        <div className="container sd-inner">
          <div>
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 24px' }}>What Sets Our {service.title} Apart</h2>
            <p style={{ color: 'var(--gray-600)', marginBottom: 32, lineHeight: 1.7 }}>
              We don't just deliver — we partner with you throughout the process to ensure every output exceeds expectations. Our team brings years of industry expertise and a genuine passion for excellence.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
              {service.features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <CheckCircle size={20} color="var(--blue-500)" />
                  <span style={{ fontWeight: 600, color: 'var(--gray-700)' }}>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Start a Project <ArrowRight size={16} /></Link>
              <Link to="/portfolio" className="btn-outline">View Portfolio</Link>
            </div>
          </div>
          <div className="sd-contact-card">
            <div className="sdc-badge">Ready to Begin?</div>
            <h3>Let's Talk About Your Project</h3>
            <p>Share your vision and we'll build a plan together. No commitment required.</p>
            <div className="sdc-items">
              <a href="tel:+923392103555" className="sdc-item"><Phone size={18} color="var(--blue-500)" /><div><strong>Call Us</strong><span>+92 339 2103555</span></div></a>
              <a href="mailto:reachout@omaanu.com" className="sdc-item"><Mail size={18} color="var(--blue-500)" /><div><strong>Email Us</strong><span>reachout@omaanu.com</span></div></a>
            </div>
            <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section style={{ padding: '60px 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <h3 style={{ textAlign: 'center', marginBottom: 36, color: 'var(--blue-900)', fontSize: '1.4rem' }}>Explore Other Services</h3>
          <div className="grid-3">
            {related.map(r => (
              <Link key={r.slug} to={`/services/${r.slug}`} className="card" style={{ textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{r.icon}</div>
                <h4 style={{ color: 'var(--blue-900)', marginBottom: 8 }}>{r.title}</h4>
                <p style={{ fontSize: '0.87rem', color: 'var(--gray-600)' }}>{r.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
