import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import { services, portfolioItems, testimonials, stats, blogPosts } from '../data/services'
import './Home.css'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

// Counter animation component
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView()
  useEffect(() => {
    if (!inView) return
    const num = parseInt(target)
    const step = Math.ceil(num / 60)
    let current = 0
    const t = setInterval(() => {
      current = Math.min(current + step, num)
      setCount(current)
      if (current >= num) clearInterval(t)
    }, 25)
    return () => clearInterval(t)
  }, [inView, target])
  return <span ref={ref}>{count}{suffix}</span>
}

export default function Home() {
  const [portfolioCat, setPortfolioCat] = useState('All')
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const cats = ['All', ...new Set(portfolioItems.map(p => p.category))]
  const filtered = portfolioCat === 'All' ? portfolioItems : portfolioItems.filter(p => p.category === portfolioCat)

  return (
    <main>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats Band */}
      <section className="stats-band">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-number">
                <Counter target={parseInt(s.value)} suffix={s.value.replace(/[0-9]/g,'')} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Exceptional Services Await You</h2>
            <p className="section-subtitle">From pixel-perfect design to high-performance development — we cover every digital need under one roof.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="service-card" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-name">{s.title}</h3>
                <p className="service-desc">{s.tagline}</p>
                <div className="service-arrow"><ArrowRight size={16} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="container why-inner">
          <div className="why-text">
            <div className="section-label">Why Omaanu</div>
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 20px' }}>A One-Stop Digital Solution</h2>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 32, maxWidth: 480 }}>
              We combine creative excellence with technical precision to deliver digital products that don't just look great — they perform. From startups to enterprises, we've helped 50+ clients grow faster.
            </p>
            <div className="why-features">
              {['Exceptional Professionals', 'Bespoke Services For All', 'On-Time Project Completion', 'Transparent Communication', 'Post-Launch Support', 'Competitive Pricing'].map(f => (
                <div key={f} className="why-feature">
                  <CheckCircle size={18} color="var(--blue-500)" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Get Started <ArrowRight size={16} /></Link>
              <Link to="/about" className="btn-outline">About Us</Link>
            </div>
          </div>
          <div className="why-visual">
            <div className="why-card main-card">
              <div className="why-card-icon">🚀</div>
              <h4>Launch Ready</h4>
              <p>Every project delivered on time, fully tested, and ready to go live.</p>
            </div>
            <div className="why-card accent-card">
              <div className="why-card-icon">🏆</div>
              <h4>Award-Winning Quality</h4>
              <p>Designs and products that set industry benchmarks.</p>
            </div>
            <div className="why-card blue-card">
              <div className="why-card-icon">🔒</div>
              <h4>Secure & Scalable</h4>
              <p>Built with security-first architecture that scales with your growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Work</div>
            <h2 className="section-title">Our Portfolio</h2>
            <p className="section-subtitle">Each project reflects our commitment to quality, innovation, and results.</p>
          </div>
          <div className="portfolio-filters">
            {cats.map(c => (
              <button key={c} className={`filter-btn${portfolioCat === c ? ' active' : ''}`} onClick={() => setPortfolioCat(c)}>{c}</button>
            ))}
          </div>
          <div className="portfolio-grid">
            {filtered.map((p, i) => (
              <div key={p.id} className="portfolio-item" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="portfolio-img">
                  <div className="portfolio-placeholder">
                    <span>{p.category.charAt(0)}</span>
                  </div>
                  <div className="portfolio-overlay">
                    <div className="portfolio-tags">
                      {p.tags.map(t => <span key={t} className="portfolio-tag">{t}</span>)}
                    </div>
                    <Link to="/portfolio" className="btn-white" style={{ padding: '10px 20px', fontSize: '0.82rem' }}>View Project</Link>
                  </div>
                </div>
                <div className="portfolio-info">
                  <span className="portfolio-cat">{p.category}</span>
                  <h4 className="portfolio-title">{p.title}</h4>
                  <p className="portfolio-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/portfolio" className="btn-outline">View All Projects <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Client Feedback</div>
            <h2 className="section-title" style={{ color: 'white' }}>What Our Clients Say</h2>
          </div>
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonials[testimonialIdx].rating)].map((_, i) => <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />)}
              </div>
              <p className="testimonial-text">"{testimonials[testimonialIdx].text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonials[testimonialIdx].avatar}</div>
                <div>
                  <div className="testimonial-name">{testimonials[testimonialIdx].name}</div>
                  <div className="testimonial-role">{testimonials[testimonialIdx].role}</div>
                </div>
              </div>
            </div>
            <div className="testimonial-controls">
              <button className="testimonial-btn" onClick={() => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length)}><ChevronLeft size={20} /></button>
              <div className="testimonial-dots">
                {testimonials.map((_, i) => <button key={i} className={`hero-dot${i === testimonialIdx ? ' active' : ''}`} onClick={() => setTestimonialIdx(i)} />)}
              </div>
              <button className="testimonial-btn" onClick={() => setTestimonialIdx((testimonialIdx + 1) % testimonials.length)}><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="partners-section">
        <div className="container">
          <p className="partners-label">Trusted By Industry Leaders</p>
          <div className="partners-list">
            {['Slack', 'Dropbox', 'Shopify', 'Google', 'Microsoft', 'Stripe'].map(p => (
              <div key={p} className="partner-badge">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="blog-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Blog</div>
            <h2 className="section-title">Latest Insights</h2>
            <p className="section-subtitle">Stay ahead with tips, trends, and expert perspectives from our team.</p>
          </div>
          <div className="grid-3">
            {blogPosts.slice(0,3).map((post, i) => (
              <Link key={post.id} to="/blog" className="card blog-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="blog-cat-badge">{post.category}</div>
                <h4 className="blog-title">{post.title}</h4>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span>{post.readTime} read</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/blog" className="btn-outline">Read All Articles <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
