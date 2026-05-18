import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { portfolioItems } from '../data/services'
import './Portfolio.css'

const allCats = ['All', ...new Set(portfolioItems.map(p => p.category))]

export default function Portfolio() {
  const [cat, setCat] = useState('All')
  const filtered = cat === 'All' ? portfolioItems : portfolioItems.filter(p => p.category === cat)

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>🗂️ Our Work</div>
          <h1>Our Portfolio</h1>
          <p>Each project reflects our commitment to quality, innovation, and results. From concept to final execution, we deliver exceptional value.</p>
        </div>
      </div>

      <section style={{ padding: '80px 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="portfolio-filters">
            {allCats.map(c => (
              <button key={c} className={`filter-btn${cat === c ? ' active' : ''}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
          <div className="port-grid">
            {filtered.map((p, i) => (
              <div key={p.id} className="port-card fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="port-img">
                  <div className="port-placeholder" style={{ background: `linear-gradient(135deg, hsl(${p.id * 37 + 200},70%,35%) 0%, hsl(${p.id * 37 + 220},65%,55%) 100%)` }}>
                    <span className="port-letter">{p.category.charAt(0)}</span>
                  </div>
                  <div className="port-overlay">
                    <div className="port-tags">
                      {p.tags.map(t => <span key={t} className="portfolio-tag">{t}</span>)}
                    </div>
                    <Link to="/contact" className="btn-white" style={{ padding: '10px 20px', fontSize: '0.82rem' }}>Start Similar Project</Link>
                  </div>
                </div>
                <div className="port-info">
                  <span className="portfolio-cat">{p.category}</span>
                  <h3 className="portfolio-title" style={{ fontSize: '1rem' }}>{p.title}</h3>
                  <p className="portfolio-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', textAlign: 'center', background: 'var(--blue-900)' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: 16 }}>Have a Project in Mind?</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>Let's collaborate to build something exceptional together.</p>
          <Link to="/contact" className="btn-white">Get in Touch <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  )
}
