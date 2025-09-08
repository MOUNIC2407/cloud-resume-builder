import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{ background: '#0f172a', color: '#fff', padding: '0.75rem 1rem' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Cloud Pro</h2>
        <nav>
          <Link to="/" style={{ color: '#cbd5e1', textDecoration: 'none', marginLeft: 16 }}>Home</Link>
          <Link to="/resume" style={{ color: '#cbd5e1', textDecoration: 'none', marginLeft: 16 }}>Resume</Link>
          <Link to="/preview" style={{ color: '#cbd5e1', textDecoration: 'none', marginLeft: 16 }}>Preview</Link>
        </nav>
      </div>
    </header>
  )
}
