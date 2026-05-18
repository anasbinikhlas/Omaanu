import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { blogPosts } from '../data/services'
import './Blog.css'

const cats = ['All', ...new Set(blogPosts.map(b => b.category))]

export default function Blog() {
  const [cat, setCat] = useState('All')
  const filtered = cat === 'All' ? blogPosts : blogPosts.filter(b => b.category === cat)

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>📖 Our Blog</div>
          <h1>Insights & Perspectives</h1>
          <p>Stay ahead with tips, trends, and expert insights from our digital team.</p>
        </div>
      </div>

      <section style={{ padding: '80px 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="portfolio-filters" style={{ justifyContent: 'flex-start', marginBottom: 40 }}>
            {cats.map(c => (
              <button key={c} className={`filter-btn${cat === c ? ' active' : ''}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
          <div className="blog-grid">
            {filtered.map((post, i) => (
              <div key={post.id} className="blog-full-card fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="blog-full-img">
                  <div style={{ background: `linear-gradient(135deg, hsl(${post.id * 50 + 210},70%,35%), hsl(${post.id * 50 + 230},60%,55%))`, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '3rem', opacity: .3 }}>{post.category.charAt(0)}</span>
                  </div>
                </div>
                <div className="blog-full-body">
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
                    <span className="blog-cat-badge" style={{ margin: 0 }}>{post.category}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--gray-400)', fontSize: '0.78rem' }}><Clock size={12} />{post.readTime} read</span>
                  </div>
                  <h3 className="blog-full-title">{post.title}</h3>
                  <p className="blog-full-excerpt">{post.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span style={{ color: 'var(--gray-400)', fontSize: '0.8rem' }}>{post.date}</span>
                    <Link to="/blog" className="blog-read-more">Read More <ArrowRight size={14} /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section style={{ padding: '80px 0', background: 'var(--blue-900)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 560 }}>
          <h2 style={{ color: 'white', marginBottom: 12 }}>Stay in the Loop</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', marginBottom: 32 }}>Get the latest articles, tips, and insights delivered to your inbox weekly.</p>
          <div className="subscribe-row">
            <input type="email" placeholder="Enter your email" className="subscribe-input" />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  )
}
