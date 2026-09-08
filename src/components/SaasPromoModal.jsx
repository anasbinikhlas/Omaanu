import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Sparkles, ArrowRight, MessageCircle, CheckCircle } from 'lucide-react'
import { systems } from '../data/systems'
import './SaasPromoModal.css'

export default function SaasPromoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Only show if not dismissed in this session
    const dismissed = sessionStorage.getItem('omaanu_saas_popup_dismissed')
    if (dismissed) return

    // Show right after landing on website
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem('omaanu_saas_popup_dismissed', 'true')
  }

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="saas-modal-backdrop" onClick={handleClose}>
      <div
        className="saas-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="saas-modal-title"
      >
        {/* Close Button */}
        <button
          className="saas-modal-close"
          onClick={handleClose}
          aria-label="Close promotion modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="saas-modal-header">
          <div className="saas-modal-badge">
            <Sparkles size={14} />
            <span>Turnkey SaaS Solutions</span>
          </div>
          <h2 id="saas-modal-title" className="saas-modal-title">
            Ready-to-Deploy <br />
            <span className="saas-title-highlight">Business Systems</span>
          </h2>
          <p className="saas-modal-subtitle">
            Need an enterprise system without months of development? Get instant access on a flexible
            monthly cloud subscription with zero server maintenance.
          </p>
        </div>

        {/* Systems Mini Showcase Grid */}
        <div className="saas-modal-systems-list">
          {systems.map((sys) => (
            <div key={sys.id} className="saas-modal-system-item">
              <div className="saas-item-icon">{sys.icon}</div>
              <div className="saas-item-info">
                <div className="saas-item-name-row">
                  <span className="saas-item-name">{sys.name}</span>
                  <span className="saas-item-cat">{sys.category}</span>
                </div>
                <span className="saas-item-desc">{sys.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Highlights */}
        <div className="saas-modal-perks">
          <div className="saas-perk">
            <CheckCircle size={14} />
            <span>24h Cloud Setup</span>
          </div>
          <div className="saas-perk">
            <CheckCircle size={14} />
            <span>Free Feature Updates</span>
          </div>
          <div className="saas-perk">
            <CheckCircle size={14} />
            <span>Dedicated Support</span>
          </div>
        </div>

        {/* Actions */}
        <div className="saas-modal-actions">
          <Link
            to="/systems"
            onClick={handleClose}
            className="btn-modal-primary"
          >
            <span>Explore All 5 Systems</span>
            <ArrowRight size={16} />
          </Link>

          <a
            href="https://wa.me/923392103555?text=Hi%20Omaanu%2C%20I%20saw%20your%20business%20systems%20offer%20and%20want%20to%20learn%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-modal-wa"
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Dismiss subtle button */}
        <div className="saas-modal-footer">
          <button onClick={handleClose} className="saas-modal-dismiss-btn">
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
}
