import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react'
import './HeroSlider.css'

const slides = [
  {
    id: 1,
    badge: '✨ Digital Excellence',
    title: 'We Create Best\nDigital Products',
    subtitle: 'From design to development, marketing to animation — we\'re your all-in-one digital growth partner.',
    cta: 'Explore Our Services',
    ctaLink: '/services',
    ctaSecondary: 'View Portfolio',
    ctaSecondaryLink: '/portfolio',
    accentColor: '#1565c0',
    icon: '🎨',
    tags: ['UI/UX Design', 'Branding', 'Web Dev'],
  },
  {
    id: 2,
    badge: '📈 Marketing Solutions',
    title: 'Grow Your Brand\nWith Expert Marketing',
    subtitle: 'Data-driven SEO, PPC, social media, and content strategies that deliver measurable results for your business.',
    cta: 'Start Growing',
    ctaLink: '/services/marketing',
    ctaSecondary: 'Learn More',
    ctaSecondaryLink: '/about',
    accentColor: '#0d47a1',
    icon: '📈',
    tags: ['SEO', 'PPC', 'Social Media'],
  },
  {
    id: 3,
    badge: '⚙️ App Development',
    title: 'Build Apps That\nPower Your Business',
    subtitle: 'Custom mobile, web, and desktop applications built with cutting-edge technologies — from concept to launch.',
    cta: 'Build With Us',
    ctaLink: '/services/application-development',
    ctaSecondary: 'Our Portfolio',
    ctaSecondaryLink: '/portfolio',
    accentColor: '#1976d2',
    icon: '⚙️',
    tags: ['Mobile', 'Web App', 'Desktop'],
  },
  {
    id: 4,
    badge: '🎬 Video & Animation',
    title: 'Stunning Visuals\nThat Tell Your Story',
    subtitle: 'From cinematic video editing to breathtaking 3D animations — we craft visuals that captivate and convert.',
    cta: 'See Our Work',
    ctaLink: '/portfolio',
    ctaSecondary: 'Get a Quote',
    ctaSecondaryLink: '/contact',
    accentColor: '#0288d1',
    icon: '🎬',
    tags: ['Video Editing', '3D Animation', '2D Animation'],
  },
  {
    id: 5,
    badge: '💻 Web Development',
    title: 'Websites That Drive\nReal Business Results',
    subtitle: 'Responsive, fast, SEO-optimized websites — WordPress, Shopify, or fully custom. Built to grow with you.',
    cta: 'Launch Your Site',
    ctaLink: '/services/web-development',
    ctaSecondary: 'Contact Us',
    ctaSecondaryLink: '/contact',
    accentColor: '#0a1628',
    icon: '💻',
    tags: ['WordPress', 'Shopify', 'Custom Dev'],
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((idx) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 300)
  }, [animating])

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  const slide = slides[current]

  return (
    <section className="hero-slider">
      {/* Background gradient blobs */}
      <div className="hero-bg">
        <div className="hero-blob blob1" style={{ background: slide.accentColor }} />
        <div className="hero-blob blob2" />
        <div className="hero-pattern" />
      </div>

      {/* Slide content */}
      <div className={`hero-content container${animating ? ' fade-out' : ' fade-in-hero'}`}>
        <div className="hero-text">
          <div className="section-label" style={{ marginBottom: 24 }}>{slide.badge}</div>
          <h1 className="hero-title">
            {slide.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i < slide.title.split('\n').length - 1 && <br />}</span>
            ))}
          </h1>
          <p className="hero-subtitle">{slide.subtitle}</p>

          <div className="hero-tags">
            {slide.tags.map(tag => (
              <span key={tag} className="hero-tag">{tag}</span>
            ))}
          </div>

          <div className="hero-actions">
            <Link to={slide.ctaLink} className="btn-primary hero-btn">
              {slide.cta} <ArrowRight size={18} />
            </Link>
            <Link to={slide.ctaSecondaryLink} className="btn-outline hero-btn">
              {slide.ctaSecondary}
            </Link>
          </div>
        </div>

        {/* Visual card */}
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-icon">{slide.icon}</div>
            <div className="hero-card-sparkles">
              <div className="sparkle s1">✦</div>
              <div className="sparkle s2">✦</div>
              <div className="sparkle s3">✦</div>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>200+</strong><span>Projects</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <strong>50+</strong><span>Clients</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <strong>5+</strong><span>Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="hero-controls">
        <button className="hero-arrow" onClick={prev} aria-label="Previous slide">
          <ChevronLeft size={22} />
        </button>

        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button className="hero-arrow" onClick={next} aria-label="Next slide">
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
