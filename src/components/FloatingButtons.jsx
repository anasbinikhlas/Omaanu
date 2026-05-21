import React, { useState, useEffect } from 'react'
import './FloatingButtons.css'

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fab-stack">

      {/* WhatsApp */}
      <a
        href="https://wa.me/923392103555"
        target="_blank"
        rel="noopener noreferrer"
        className="fab fab--wa"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.5 2.04 7.83L.5 31.5l7.87-2.06A15.45 15.45 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.3a13.7 13.7 0 01-7-1.93l-.5-.3-5.18 1.36 1.38-5.04-.33-.52A13.73 13.73 0 1116 28.8zm7.54-10.26c-.41-.21-2.44-1.2-2.82-1.34-.38-.14-.65-.21-.93.21-.27.41-1.07 1.34-1.31 1.62-.24.27-.48.3-.9.1-.41-.21-1.74-.64-3.32-2.04-1.23-1.09-2.06-2.44-2.3-2.85-.24-.41-.02-.63.18-.84.19-.18.41-.48.62-.72.2-.24.27-.41.41-.69.14-.27.07-.52-.03-.72-.1-.21-.93-2.24-1.28-3.07-.33-.8-.67-.69-.93-.7h-.79c-.27 0-.72.1-1.1.52s-1.45 1.41-1.45 3.44 1.48 4 1.69 4.27c.2.28 2.9 4.42 7.03 6.2.98.42 1.75.67 2.35.86.99.31 1.88.27 2.59.16.79-.12 2.44-1 2.78-1.96.34-.96.34-1.79.24-1.96-.1-.17-.38-.27-.79-.48z"/>
        </svg>
        <span className="fab-tooltip">WhatsApp Us</span>
      </a>

      <button
        onClick={scrollToTop}
        className={`fab fab--top${visible ? ' fab--top-visible' : ''}`}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="fab-tooltip">Back to Top</span>
      </button>

    </div>
  )
}
