import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles, ShieldCheck, Zap, Layers, HelpCircle, PhoneCall } from 'lucide-react'
import { systems, subscriptionBenefits } from '../data/systems'
import './Systems.css'

export default function Systems() {
  const [selectedCat, setSelectedCat] = useState('All')

  const categories = ['All', ...new Set(systems.map(s => s.category))]

  const filteredSystems = selectedCat === 'All'
    ? systems
    : systems.filter(s => s.category === selectedCat)

  const getWhatsAppLink = (message) => {
    return `https://wa.me/923392103555?text=${encodeURIComponent(message)}`
  }

  return (
    <main className="systems-page">
      {/* ── Page Hero ── */}
      <section className="systems-hero">
        <div className="container systems-hero-inner">
          <div className="systems-hero-badge">
            <Sparkles size={15} />
            <span>Turnkey Subscription Software</span>
          </div>
          <h1 className="systems-hero-title">
            Enterprise-Grade Systems <br />
            <span className="systems-hero-gradient">Ready on Cloud Subscription</span>
          </h1>
          <p className="systems-hero-subtitle">
            Skip months of costly custom development. Deploy pre-built, industry-specialized software
            tailored for your business with zero server maintenance, automated updates, and dedicated technical support.
          </p>

          <div className="systems-hero-actions">
            <a
              href={getWhatsAppLink("Hi Omaanu Team, I would like to explore your subscription software systems and get a quick demo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="systems-btn-wa"
            >
              <MessageSquare size={18} />
              <span>Inquire on WhatsApp</span>
            </a>
            <a href="#systems-catalog" className="systems-btn-secondary">
              Browse Available Systems <ArrowRight size={16} />
            </a>
          </div>

          <div className="systems-hero-perks">
            <div className="systems-perk-item">
              <Zap size={16} /> Fast 24-Hour Deployment
            </div>
            <div className="systems-perk-item">
              <ShieldCheck size={16} /> 99.9% Cloud Uptime & Daily Backups
            </div>
            <div className="systems-perk-item">
              <Layers size={16} /> Continuous Feature Updates Included
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Subscription Band ── */}
      <section className="systems-benefits-section">
        <div className="container">
          <div className="systems-section-header">
            <div className="section-label">Why Choose Subscription</div>
            <h2 className="section-title">Built for Modern Businesses</h2>
            <p className="section-subtitle">
              Avoid high upfront engineering costs. Enjoy instant access, peace of mind, and regular improvements.
            </p>
          </div>

          <div className="systems-benefits-grid">
            {subscriptionBenefits.map((b, idx) => (
              <div key={idx} className="systems-benefit-card">
                <div className="systems-benefit-icon">{b.icon}</div>
                <h3 className="systems-benefit-title">{b.title}</h3>
                <p className="systems-benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Catalog / Systems Listing ── */}
      <section id="systems-catalog" className="systems-catalog-section">
        <div className="container">
          <div className="systems-section-header">
            <div className="section-label">System Catalog</div>
            <h2 className="section-title">Specialized Software Solutions</h2>
            <p className="section-subtitle">
              Select your industry below to inspect features and request a personalized live walkthrough on WhatsApp.
            </p>
          </div>

          {/* Category Filter */}
          <div className="systems-filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                className={`systems-filter-btn ${selectedCat === cat ? 'active' : ''}`}
                onClick={() => setSelectedCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="systems-grid">
            {filteredSystems.map(sys => (
              <article key={sys.id} className="system-card">
                {/* Header */}
                <div className="system-card-top">
                  <div
                    className="system-icon-wrap"
                    style={{ '--accent': sys.accentColor }}
                  >
                    <span className="system-emoji">{sys.icon}</span>
                  </div>

                  <div className="system-title-wrap">
                    <div className="system-badges">
                      <span className="system-badge-cat">{sys.category}</span>
                      <span className="system-badge-tag">{sys.badge}</span>
                    </div>
                    <h3 className="system-name">{sys.name}</h3>
                    <p className="system-tagline">{sys.tagline}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="system-card-body">
                  <p className="system-desc">{sys.description}</p>

                  <div className="system-highlight-box">
                    <Sparkles size={16} className="system-hl-icon" />
                    <span><strong>Core Advantage:</strong> {sys.highlight}</span>
                  </div>

                  <div className="system-target-pill">
                    <span className="target-label">Ideal For:</span>
                    <span className="target-value">{sys.targetAudience}</span>
                  </div>

                  <div className="system-features-wrapper">
                    <h4 className="features-title">Included System Capabilities:</h4>
                    <ul className="system-features-list">
                      {sys.features.map((feat, fIdx) => (
                        <li key={fIdx}>
                          <CheckCircle2 size={16} className="feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="system-card-footer">
                  <div className="system-pricing-meta">
                    <span className="pricing-label">License Model:</span>
                    <span className="pricing-value">{sys.pricingModel}</span>
                  </div>

                  <div className="system-actions">
                    <a
                      href={getWhatsAppLink(sys.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-system-wa"
                      title={`Request ${sys.name} Demo on WhatsApp`}
                    >
                      <MessageSquare size={17} />
                      <span>Inquire on WhatsApp</span>
                    </a>
                    <Link to="/contact" className="btn-system-contact">
                      <PhoneCall size={15} />
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3-Step Onboarding Process ── */}
      <section className="systems-process-section">
        <div className="container">
          <div className="systems-section-header">
            <div className="section-label">Simple Onboarding</div>
            <h2 className="section-title">How Getting Started Works</h2>
            <p className="section-subtitle">From inquiry to your team actively running the system in 3 effortless steps.</p>
          </div>

          <div className="systems-steps-grid">
            <div className="systems-step-card">
              <div className="step-num">01</div>
              <h4>Pick Your System</h4>
              <p>Explore our catalog above and tap WhatsApp to connect directly with our technical deployment lead.</p>
            </div>
            <div className="systems-step-card">
              <div className="step-num">02</div>
              <h4>Live Demo &amp; Configuration</h4>
              <p>We provide a live walkthrough, import your initial data, and configure branding, currency, and staff roles.</p>
            </div>
            <div className="systems-step-card">
              <div className="step-num">03</div>
              <h4>Go Live &amp; Scale</h4>
              <p>Your team receives secure logins, video guides, and 24/7 WhatsApp support to keep operations smooth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Custom Software CTA ── */}
      <section className="systems-cta-banner">
        <div className="container systems-cta-inner">
          <div className="systems-cta-content">
            <div className="section-label" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>Custom Integrations</div>
            <h2>Need Custom Features or an Industry-Specific Build?</h2>
            <p>
              Every business has unique workflows. We can customize any of these 5 systems or engineer a bespoke solution matching your exact business rules.
            </p>
          </div>
          <div className="systems-cta-buttons">
            <a
              href={getWhatsAppLink("Hi Omaanu Team, I want to discuss a custom feature or tailored software solution.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              <MessageSquare size={16} /> Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}>
              Request a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
