import React from 'react'
import { TemplateProps } from '..'

export default function InfographicTemplate({ data }: TemplateProps) {
  const pi = data['Personal Information'] || {}
  const skills = (data['Skills'] as any[]) || []
  const projects = (data['Projects'] as any[]) || []

  return (
    <div className="resume-sheet infographic">
      <header className="rs-header accent">
        <h1>{pi.fullName || 'Your Name'}</h1>
        <p className="muted small">{pi.email} · {pi.phone}</p>
      </header>
      <section>
        <h2>Skills</h2>
        <div className="bar-list">
          {skills.map((s, i) => (
            <div key={i} className="bar-row">
              <span className="bar-label">{s.skill}</span>
              <div className="bar">
                <div className={`bar-fill level-${(s.level || 'Intermediate').toLowerCase()}`} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Projects</h2>
        <div className="grid-two">
          {projects.map((p, i) => (
            <div key={i} className="rs-card">
              <div className="rs-item-head"><strong>{p.title}</strong></div>
              {p.description && <p>{p.description}</p>}
              {p.link && <p><a href={p.link}>{p.link}</a></p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
