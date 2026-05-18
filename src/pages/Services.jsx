import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../data/services'
import './Services.css'

export default function Services() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>Our Services</div>
          <h1>Full-Service Digital Agency</h1>
          <p>Everything you need to build, grow, and scale your digital presence — all under one roof.</p>
        </div>
      </div>

      <section style={{ padding: '80px 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="services-page-grid">
            {services.map((s, i) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="service-page-card" style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="spc-top">
                  <div className="spc-icon">{s.icon}</div>
                  <h3 className="spc-title">{s.title}</h3>
                  <p className="spc-tagline">{s.tagline}</p>
                </div>
                <div className="spc-sub">
                  {s.subServices.slice(0, 4).map(sub => (
                    <div key={sub.name} className="spc-sub-item">
                      <span>{sub.icon}</span>
                      <span>{sub.name}</span>
                    </div>
                  ))}
                  {s.subServices.length > 4 && (
                    <div className="spc-sub-item more">+{s.subServices.length - 4} more</div>
                  )}
                </div>
                <div className="spc-footer">
                  <span>Explore <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', textAlign: 'center', background: 'var(--blue-900)' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 16 }}>A One-Stop Solution</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}>
            Turn your vision into action. Give us a call and get what you need in the shortest time.
          </p>
          <Link to="/contact" className="btn-white">Contact Us <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  )
}
