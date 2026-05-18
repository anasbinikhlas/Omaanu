import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Globe, ShoppingCart, Code2, Layers } from 'lucide-react'
import './Website.css'

const webServices = [
  {
    icon: <Code2 size={32} />,
    title: 'Custom Web Development',
    slug: 'web-development',
    desc: 'Fully bespoke websites built from scratch with clean code, modern frameworks, and pixel-perfect design.',
    features: ['React / Next.js / Vue', 'REST & GraphQL APIs', 'SEO-optimized structure', 'Performance-first build'],
    badge: 'Most Popular',
  },
  {
    icon: <Layers size={32} />,
    title: 'WordPress Development',
    slug: 'web-development',
    desc: 'Powerful, flexible WordPress sites with custom themes, plugins, and a CMS your team can manage with ease.',
    features: ['Custom theme development', 'WooCommerce integration', 'Speed & security hardening', 'Training included'],
    badge: null,
  },
  {
    icon: <ShoppingCart size={32} />,
    title: 'Shopify Store',
    slug: 'web-development',
    desc: 'High-converting Shopify stores designed to sell — from product setup to custom theme development and beyond.',
    features: ['Custom Shopify theme', 'Product & collection setup', 'Payment gateway config', 'App integrations'],
    badge: 'E-Commerce',
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We learn about your business, goals, and audience to plan the perfect solution.' },
  { step: '02', title: 'Design', desc: 'Wireframes and visual mockups crafted around your brand and user experience.' },
  { step: '03', title: 'Develop', desc: 'Clean, scalable code built with best practices and tested across all devices.' },
  { step: '04', title: 'Launch', desc: 'Deployed, optimized, and monitored — ready to drive real business results.' },
]

export default function Website() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>🌐 Website Solutions</div>
          <h1>Websites That Work as Hard as You Do</h1>
          <p>Responsive, fast, and conversion-focused websites — custom-built, WordPress, or Shopify. We have the right solution for every business.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-white">Get a Free Quote <ArrowRight size={16} /></Link>
            <Link to="/portfolio" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,.4)', color: 'white' }}>View Portfolio</Link>
          </div>
        </div>
      </div>

      {/* Web services */}
      <section style={{ padding: '80px 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label">Our Web Solutions</div>
            <h2 className="section-title">Choose Your Platform</h2>
            <p className="section-subtitle">Whether you need a custom-coded powerhouse or a fully managed CMS, we've got you covered.</p>
          </div>
          <div className="web-services-grid">
            {webServices.map((ws, i) => (
              <div key={ws.title} className={`web-service-card fade-up${i === 0 ? ' featured' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
                {ws.badge && <div className="ws-badge">{ws.badge}</div>}
                <div className="ws-icon">{ws.icon}</div>
                <h3 className="ws-title">{ws.title}</h3>
                <p className="ws-desc">{ws.desc}</p>
                <ul className="ws-features">
                  {ws.features.map(f => (
                    <li key={f}><CheckCircle size={15} /> {f}</li>
                  ))}
                </ul>
                <Link to="/contact" className={i === 0 ? 'btn-white' : 'btn-primary'} style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label">How We Work</div>
            <h2 className="section-title">Our Development Process</h2>
          </div>
          <div className="process-grid">
            {process.map((p, i) => (
              <div key={p.step} className="process-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="process-step">{p.step}</div>
                <h4 className="process-title">{p.title}</h4>
                <p className="process-desc">{p.desc}</p>
                {i < process.length - 1 && <div className="process-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section style={{ padding: '64px 0', background: 'var(--gray-50)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Technologies We Use</div>
          <div className="tech-grid">
            {['React', 'Next.js', 'Vue.js', 'Node.js', 'WordPress', 'Shopify', 'PHP', 'MySQL', 'MongoDB', 'AWS', 'Vercel', 'Figma'].map(t => (
              <div key={t} className="tech-badge">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--blue-900)', textAlign: 'center' }}>
        <div className="container">
          <Globe size={48} color="rgba(255,255,255,.3)" style={{ margin: '0 auto 24px' }} />
          <h2 style={{ color: 'white', marginBottom: 16 }}>Ready to Launch Your Website?</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
            In today's digital landscape, your website is your most powerful sales tool. Let's build one that converts.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-white">Start Your Project <ArrowRight size={16} /></Link>
            <Link to="/portfolio" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,.4)', color: 'white' }}>See Our Work</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
