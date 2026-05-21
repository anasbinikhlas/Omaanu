import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, MessageCircle, Phone } from 'lucide-react'
import logoImage from '../assets/omaanulogo.png'
import './Navbar.css'

const designLinks = [
  { label: 'UI/UX Design', to: '/services/design-services' },
  { label: 'Logo Design', to: '/services/design-services' },
  { label: 'Social Media Design', to: '/services/design-services' },
  { label: 'Product Design', to: '/services/design-services' },
  { label: 'Brochure Design', to: '/services/design-services' },
  { label: 'Business Cards Design', to: '/services/design-services' },
  { label: 'Product Packaging', to: '/services/design-services' },
  { label: 'Interior Designing', to: '/services/design-services' },
]
const marketingLinks = [
  { label: 'Email Marketing', to: '/services/marketing' },
  { label: 'Digital Marketing', to: '/services/marketing' },
  { label: 'Social Media Marketing', to: '/services/marketing' },
  { label: 'PPC Advertising', to: '/services/marketing' },
  { label: 'SEO', to: '/services/marketing' },
  { label: 'Content Writing', to: '/services/content-writing' },
]
const appLinks = [
  { label: 'Mobile Application', to: '/services/application-development' },
  { label: 'Web Application', to: '/services/application-development' },
  { label: 'Desktop Application', to: '/services/application-development' },
]
const videoLinks = [
  { label: 'Short Reels Editing', to: '/services/video-editing' },
  { label: 'YouTube Video Editing', to: '/services/video-editing' },
]
const anim3dLinks = [
  { label: 'Custom 3D Character', to: '/services/3d-animation' },
  { label: 'Product Demo', to: '/services/3d-animation' },
  { label: 'Archviz', to: '/services/3d-animation' },
  { label: 'Motion Graphics', to: '/services/3d-animation' },
]
const anim2dLinks = [
  { label: '2D Modelling', to: '/services/2d-animation' },
  { label: 'Whiteboard Animation', to: '/services/2d-animation' },
  { label: 'Character Animation', to: '/services/2d-animation' },
  { label: 'Motion Graphics', to: '/services/2d-animation' },
]

function useHoverMenu() {
  const [open, setOpen] = useState(false)
  const timer = useRef(null)
  const enter = () => { clearTimeout(timer.current); setOpen(true) }
  const leave = () => { timer.current = setTimeout(() => setOpen(false), 180) }
  return { open, enter, leave }
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const [mobileWeb, setMobileWeb] = useState(false)
  const location = useLocation()
  const svc = useHoverMenu()
  const web = useHoverMenu()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>

      {/* ── Top strip ── */}
      <div className="topstrip">
        <div className="container topstrip-inner">
          <div className="ts-left">
            <a href="tel:+923392103555" className="ts-item"><Phone size={11} /> +92 339 2103555</a>
            <span className="ts-div" />
            <span className="ts-item"><img src="https://flagcdn.com/w20/pk.png" width="16" alt="PK" style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Pakistan &nbsp;·&nbsp; <img src="https://flagcdn.com/w20/gb.png" width="16" alt="UK" style={{ verticalAlign: 'middle', marginRight: '4px' }} /> UK &nbsp;·&nbsp; <img src="https://flagcdn.com/w20/ae.png" width="16" alt="UAE" style={{ verticalAlign: 'middle', marginRight: '4px' }} /> UAE</span>
          </div>
          <div className="ts-right">
            <a href="https://www.facebook.com/omaanudotcom" target="_blank" rel="noopener noreferrer" className="ts-social">f</a>
            <a href="https://www.instagram.com/omaanudotcom/" target="_blank" rel="noopener noreferrer" className="ts-social">in</a>
            <a href="https://www.linkedin.com/company/omaanu" target="_blank" rel="noopener noreferrer" className="ts-social">li</a>
          </div>
        </div>
      </div>

      {/* ── Main bar ── */}
      <div className="navmain">
        <div className="container nav-inner">

          {/* Logo */}
          <Link to="/" className="nav-logo">
            <img src={logoImage} alt="omaanulogo" className="logo-img" />
          </Link>

          {/* Desktop links */}
          <nav className="nav-links">
            <Link to="/" className={`nl${location.pathname === '/' ? ' nl--on' : ''}`}>Home</Link>

            {/* Services */}
            <div className="ndrop" onMouseEnter={svc.enter} onMouseLeave={svc.leave}>
              <Link to="/services" className={`nl nl--chevron${location.pathname.startsWith('/services') ? ' nl--on' : ''}`}>
                Services <ChevronDown size={12} className={svc.open ? 'chev chev--up' : 'chev'} />
              </Link>
              <div className={`megamenu${svc.open ? ' megamenu--open' : ''}`}
                onMouseEnter={svc.enter} onMouseLeave={svc.leave}>
                <div className="mm-grid">
                  <div className="mm-col">
                    <Link to="/services/design-services" className="mm-head">
                      <span>🎨</span><div><b>Design Services</b><small>Branding &amp; visuals</small></div>
                    </Link>
                    {designLinks.map(l => <Link key={l.label} to={l.to} className="mm-item">{l.label}</Link>)}
                  </div>
                  <div className="mm-col">
                    <Link to="/services/marketing" className="mm-head">
                      <span>📈</span><div><b>Marketing</b><small>Grow your reach</small></div>
                    </Link>
                    {marketingLinks.map(l => <Link key={l.label} to={l.to} className="mm-item">{l.label}</Link>)}
                  </div>
                  <div className="mm-col">
                    <Link to="/services/application-development" className="mm-head">
                      <span>⚙️</span><div><b>App Development</b><small>Mobile &amp; web</small></div>
                    </Link>
                    {appLinks.map(l => <Link key={l.label} to={l.to} className="mm-item">{l.label}</Link>)}
                    <Link to="/services/video-editing" className="mm-head" style={{ marginTop: 10 }}>
                      <span>🎬</span><div><b>Video Editing</b><small>Reels &amp; YouTube</small></div>
                    </Link>
                    {videoLinks.map(l => <Link key={l.label} to={l.to} className="mm-item">{l.label}</Link>)}
                  </div>
                  <div className="mm-col">
                    <Link to="/services/3d-animation" className="mm-head">
                      <span>🎭</span><div><b>3D Animation</b><small>Characters &amp; renders</small></div>
                    </Link>
                    {anim3dLinks.map(l => <Link key={l.label} to={l.to} className="mm-item">{l.label}</Link>)}
                    <Link to="/services/2d-animation" className="mm-head" style={{ marginTop: 10 }}>
                      <span>🖌️</span><div><b>2D Animation</b><small>Explainers &amp; motion</small></div>
                    </Link>
                    {anim2dLinks.map(l => <Link key={l.label} to={l.to} className="mm-item">{l.label}</Link>)}
                  </div>
                </div>
                <div className="mm-foot">
                  <Link to="/services" className="mm-foot-all">View All Services →</Link>
                  <Link to="/contact" className="mm-foot-cta">💬 Get a Free Quote</Link>
                </div>
              </div>
            </div>

            {/* Website */}
            <div className="ndrop" onMouseEnter={web.enter} onMouseLeave={web.leave}>
              <Link to="/website" className={`nl nl--chevron${location.pathname === '/website' ? ' nl--on' : ''}`}>
                Website <ChevronDown size={12} className={web.open ? 'chev chev--up' : 'chev'} />
              </Link>
              <div className={`dropmenu${web.open ? ' dropmenu--open' : ''}`}
                onMouseEnter={web.enter} onMouseLeave={web.leave}>
                <Link to="/services/web-development" className="di">
                  <span className="di-icon">🔨</span>
                  <div><strong>Web Development</strong><small>Custom coded sites</small></div>
                </Link>
                <Link to="/website" className="di">
                  <span className="di-icon">📰</span>
                  <div><strong>WordPress</strong><small>CMS powered sites</small></div>
                </Link>
                <Link to="/website" className="di">
                  <span className="di-icon">🛒</span>
                  <div><strong>Shopify</strong><small>E-commerce stores</small></div>
                </Link>
              </div>
            </div>

            <Link to="/portfolio" className={`nl${location.pathname === '/portfolio' ? ' nl--on' : ''}`}>Portfolio</Link>
            <Link to="/about" className={`nl${location.pathname === '/about' ? ' nl--on' : ''}`}>About</Link>
            <Link to="/blog" className={`nl${location.pathname === '/blog' ? ' nl--on' : ''}`}>Blog</Link>
            <Link to="/contact" className={`nl${location.pathname === '/contact' ? ' nl--on' : ''}`}>Contact</Link>
          </nav>

          {/* CTA */}
          <a href="http://wa.link/xjk9wa" target="_blank" rel="noopener noreferrer" className="nav-cta">
            <MessageCircle size={14} /> Let's Talk
          </a>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`mob-menu${menuOpen ? ' mob-menu--open' : ''}`}>
        <Link to="/" className="mob-link">🏠 Home</Link>

        <div className="mob-group">
          <button className="mob-link mob-toggle" onClick={() => setMobileServices(v => !v)}>
            🗂️ Services
            <ChevronDown size={14} style={{ transform: mobileServices ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .25s' }} />
          </button>
          <div className={`mob-sub${mobileServices ? ' mob-sub--open' : ''}`}>
            <Link to="/services" className="mob-sub-link">All Services</Link>
            <Link to="/services/design-services" className="mob-sub-link">🎨 Design Services</Link>
            <Link to="/services/marketing" className="mob-sub-link">📈 Marketing</Link>
            <Link to="/services/application-development" className="mob-sub-link">⚙️ App Development</Link>
            <Link to="/services/web-development" className="mob-sub-link">💻 Web Development</Link>
            <Link to="/services/video-editing" className="mob-sub-link">🎬 Video Editing</Link>
            <Link to="/services/3d-animation" className="mob-sub-link">🎭 3D Animation</Link>
            <Link to="/services/2d-animation" className="mob-sub-link">🖌️ 2D Animation</Link>
            <Link to="/services/software-development" className="mob-sub-link">🛠️ Software Dev</Link>
            <Link to="/services/content-writing" className="mob-sub-link">✍️ Content Writing</Link>
          </div>
        </div>

        <div className="mob-group">
          <button className="mob-link mob-toggle" onClick={() => setMobileWeb(v => !v)}>
            🌐 Website
            <ChevronDown size={14} style={{ transform: mobileWeb ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .25s' }} />
          </button>
          <div className={`mob-sub${mobileWeb ? ' mob-sub--open' : ''}`}>
            <Link to="/website" className="mob-sub-link">All Web Solutions</Link>
            <Link to="/services/web-development" className="mob-sub-link">🔨 Web Development</Link>
            <Link to="/website" className="mob-sub-link">📰 WordPress</Link>
            <Link to="/website" className="mob-sub-link">🛒 Shopify</Link>
          </div>
        </div>

        <Link to="/portfolio" className="mob-link">🗂️ Portfolio</Link>
        <Link to="/about" className="mob-link">🏢 About</Link>
        <Link to="/blog" className="mob-link">📖 Blog</Link>
        <Link to="/contact" className="mob-link">📬 Contact</Link>
        <Link to="/privacy-policy" className="mob-link">🔒 Privacy Policy</Link>

        <div className="mob-cta-row">
          <a href="http://wa.link/xjk9wa" target="_blank" rel="noopener noreferrer" className="btn-primary mob-cta-btn">
            <MessageCircle size={15} /> WhatsApp Us
          </a>
          <Link to="/contact" className="btn-outline mob-cta-btn">Get a Quote</Link>
        </div>
      </div>
    </header>
  )
}
