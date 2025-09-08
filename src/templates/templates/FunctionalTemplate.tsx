import React from 'react'
import { TemplateProps } from '..'

export default function FunctionalTemplate({ data }: TemplateProps) {
  const pi = data['Personal Information'] || {}
  const skills = (data['Skills'] as any[]) || []
  const projects = (data['Projects'] as any[]) || []

  // Group skills by level for demonstration
  const byLevel: Record<string, string[]> = {}
  for (const s of skills) {
    const lvl = s.level || 'General'
    if (!byLevel[lvl]) byLevel[lvl] = []
    byLevel[lvl].push(s.skill)
  }

  return (
    <div className="resume-sheet functional">
      <header className="rs-header">
        <h1>{pi.fullName || 'Your Name'}</h1>
        <p className="muted small">{pi.email} · {pi.phone}</p>
      </header>
      <section>
        <h2>Core Competencies</h2>
        {Object.entries(byLevel).map(([lvl, list]) => (
          <div key={lvl} className="rs-item">
            <div className="rs-item-head"><strong>{lvl}</strong></div>
            <div className="rs-item-sub">{list.join(', ')}</div>
          </div>
        ))}
      </section>
      <section>
        <h2>Selected Projects</h2>
        {projects.map((p, i) => (
          <div key={i} className="rs-item">
            <div className="rs-item-head"><strong>{p.title}</strong></div>
            {p.description && <p>{p.description}</p>}
          </div>
        ))}
      </section>
    </div>
  )
}
