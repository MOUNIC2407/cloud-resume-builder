import React from 'react'

export default function Footer() {
  return (
    <footer style={{ background: '#0b1220', color: '#94a3b8', padding: '0.5rem 1rem', marginTop: 'auto' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
        <small>© {new Date().getFullYear()} Cloud Pro</small>
      </div>
    </footer>
  )
}
