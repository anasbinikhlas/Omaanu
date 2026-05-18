import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Globe, Users, Award, Zap } from 'lucide-react'
import { stats } from '../data/services'
import './About.css'

const team = [
  { name: 'Ali Raza', role: 'CEO & Founder', emoji: '👨‍💼', bio: 'Digital strategist with 8+ years building brands across the globe.' },
  { name: 'Sana Khan', role: 'Head of Design', emoji: '👩‍🎨', bio: 'Award-winning designer passionate about human-centered experiences.' },
  { name: 'Omar Sheikh', role: 'Lead Developer', emoji: '👨‍💻', bio: 'Full-stack engineer specializing in scalable web architectures.' },
  { name: 'Fatima Malik', role: 'Marketing Director', emoji: '👩‍📊', bio: 'Data-driven marketer who turns analytics into growth opportunities.' },
]

export default function About() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>🏢 About Us</div>
          <h1>We Are Omaanu</h1>
          <p>A full-service digital agency committed to transforming visions into exceptional digital experiences that drive real growth.</p>
        </div>
      </div>

      {/* Story */}
      <section style={{ padding: '80px 0' }}>
        <div className="container about-story">
          <div>
            <div className="section-label">Our Story</div>
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 20px' }}>Built on Excellence,\nDriven by Results</h2>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 20 }}>
              Omaanu was founded with a single mission: to give businesses access to world-class digital services without the complexity of working with multiple agencies. With offices across Pakistan, the UK, and UAE, we've helped over 50 clients across industries transform their digital presence.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 32 }}>
              Our team of 15+ specialists spans design, development, marketing, animation, and content — all working together to deliver cohesive solutions that perform.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
              {['Offices in Pakistan, UK & UAE', 'Serving clients globally across 15+ industries', 'End-to-end digital solutions under one roof', 'Agile, transparent, and client-first approach'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle size={18} color="var(--blue-500)" />
                  <span style={{ color: 'var(--gray-700)', fontSize: '0.93rem' }}>{f}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary">Work With Us <ArrowRight size={16} /></Link>
          </div>
          <div className="about-visual">
            <div className="about-stats-grid">
              {stats.map(s => (
                <div key={s.label} className="about-stat-card">
                  <div className="about-stat-num">{s.value}</div>
                  <div className="about-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label">Our Values</div>
            <h2 className="section-title">What Drives Us</h2>
          </div>
          <div className="grid-4">
            {[
              { icon: <Award size={28} />, title: 'Excellence', desc: 'We set the bar high and never settle. Every pixel, line of code, and campaign is crafted to perfection.' },
              { icon: <Users size={28} />, title: 'Partnership', desc: 'We work with clients, not just for them. Your success is our success — always.' },
              { icon: <Zap size={28} />, title: 'Innovation', desc: 'We stay ahead of trends, embracing new tools and strategies to deliver cutting-edge solutions.' },
              { icon: <Globe size={28} />, title: 'Global Thinking', desc: 'With offices in two countries, we bring an international perspective to every project.' },
            ].map((v, i) => (
              <div key={v.title} className="card value-card fade-up" style={{ animationDelay: `${i * 0.1}s`, textAlign: 'center' }}>
                <div className="value-icon">{v.icon}</div>
                <h4 style={{ color: 'var(--blue-900)', marginBottom: 10 }}>{v.title}</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.87rem', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label">The Team</div>
            <h2 className="section-title">Meet the People Behind Omaanu</h2>
          </div>
          <div className="grid-4">
            {team.map((m, i) => (
              <div key={m.name} className="card team-card fade-up" style={{ animationDelay: `${i * 0.1}s`, textAlign: 'center' }}>
                <div className="team-avatar">{m.emoji}</div>
                <h4 style={{ color: 'var(--blue-900)', marginBottom: 4 }}>{m.name}</h4>
                <div style={{ color: 'var(--blue-500)', fontSize: '0.82rem', fontWeight: 700, marginBottom: 10 }}>{m.role}</div>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.85rem', lineHeight: 1.6 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
