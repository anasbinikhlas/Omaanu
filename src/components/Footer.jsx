import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import logoImage from '../assets/omaanu logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA Band */}
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <h3>Have a Project in Mind?</h3>
            <p>Share your vision — we'll turn it into reality. Reach out today.</p>
          </div>
          <div className="footer-cta-btns">
            <Link to="/contact" className="btn-white">Get in Touch</Link>
            <a href="http://wa.link/xjk9wa" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,.5)', color: '#fff' }}>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logoImage} alt="Omaanu Logo" className="footer-logo-img" />
            </Link>
            <p className="footer-desc">
              A full-service digital agency delivering design, development, marketing, and animation solutions that drive real business growth.
            </p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/omaanudotcom" target="_blank" rel="noopener noreferrer" className="social-btn"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/omaanudotcom/" target="_blank" rel="noopener noreferrer" className="social-btn"><Instagram size={18} /></a>
              <a href="https://www.linkedin.com/company/omaanu" target="_blank" rel="noopener noreferrer" className="social-btn"><Linkedin size={18} /></a>
            </div>
            <div className="footer-contact-list">
              <a href="tel:+923392103555" className="footer-contact-item"><Phone size={14} /> +92 339 2103555</a>
              <a href="mailto:reachout@omaanu.com" className="footer-contact-item"><Mail size={14} /> reachout@omaanu.com</a>
              <div className="footer-contact-item"><MapPin size={14} /> 🇵🇰 Pakistan &nbsp;·&nbsp; 🇬🇧 UK &nbsp;·&nbsp; 🇦🇪 UAE</div>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul>
              <li><Link to="/services/design-services" className="footer-link"><ArrowRight size={12} /> Design Services</Link></li>
              <li><Link to="/services/marketing" className="footer-link"><ArrowRight size={12} /> Digital Marketing</Link></li>
              <li><Link to="/services/application-development" className="footer-link"><ArrowRight size={12} /> App Development</Link></li>
              <li><Link to="/services/web-development" className="footer-link"><ArrowRight size={12} /> Web Development</Link></li>
              <li><Link to="/services/video-editing" className="footer-link"><ArrowRight size={12} /> Video Editing</Link></li>
              <li><Link to="/services/3d-animation" className="footer-link"><ArrowRight size={12} /> 3D Animation</Link></li>
              <li><Link to="/services/2d-animation" className="footer-link"><ArrowRight size={12} /> 2D Animation</Link></li>
              <li><Link to="/services/software-development" className="footer-link"><ArrowRight size={12} /> Software Development</Link></li>
              <li><Link to="/services/content-writing" className="footer-link"><ArrowRight size={12} /> Content Writing</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul>
              <li><Link to="/" className="footer-link"><ArrowRight size={12} /> Home</Link></li>
              <li><Link to="/about" className="footer-link"><ArrowRight size={12} /> About Us</Link></li>
              <li><Link to="/portfolio" className="footer-link"><ArrowRight size={12} /> Portfolio</Link></li>
              <li><Link to="/blog" className="footer-link"><ArrowRight size={12} /> Blog</Link></li>
              <li><Link to="/contact" className="footer-link"><ArrowRight size={12} /> Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="footer-link"><ArrowRight size={12} /> Privacy Policy</Link></li>
            </ul>

            <h4 className="footer-col-title" style={{ marginTop: 28 }}>Website</h4>
            <ul>
              <li><Link to="/services/web-development" className="footer-link"><ArrowRight size={12} /> Shopify</Link></li>
              <li><Link to="/services/web-development" className="footer-link"><ArrowRight size={12} /> WordPress</Link></li>
              <li><Link to="/services/web-development" className="footer-link"><ArrowRight size={12} /> Web Development</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h4 className="footer-col-title">Stay Updated</h4>
            <p style={{ color: 'var(--gray-600)', fontSize: '0.88rem', marginBottom: 16, lineHeight: 1.6 }}>
              Subscribe to our newsletter for the latest tips, trends, and digital insights.
            </p>
            <div className="footer-newsletter">
              <input type="email" placeholder="Your email address" className="footer-input" />
              <button className="footer-subscribe">Subscribe</button>
            </div>
            <div style={{ marginTop: 24, padding: 16, background: 'var(--gray-50)', borderRadius: 12, border: '1px solid var(--gray-200)' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--blue-900)', marginBottom: 8 }}>TRUSTED BY</div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', fontSize: '0.82rem', color: 'var(--blue-900)', fontWeight: 600 }}>
                <span>Slack</span>
                <span style={{ opacity: .3 }}>|</span>
                <span>Dropbox</span>
                <span style={{ opacity: .3 }}>|</span>
                <span>Shopify</span>
                <span style={{ opacity: .3 }}>|</span>
                <span>Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} omaanu.com · All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link to="/privacy-policy" style={{ color: 'var(--blue-900)', fontSize: '0.82rem', transition: 'color .2s' }} onMouseOver={e => e.target.style.color = 'var(--blue-600)'} onMouseOut={e => e.target.style.color = 'var(--blue-900)'}>Privacy Policy</Link>
            <Link to="/contact" style={{ color: 'var(--blue-900)', fontSize: '0.82rem', transition: 'color .2s' }} onMouseOver={e => e.target.style.color = 'var(--blue-600)'} onMouseOut={e => e.target.style.color = 'var(--blue-900)'}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
