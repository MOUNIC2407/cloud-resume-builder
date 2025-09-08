import React from 'react'
import { TemplateProps } from '..'

export default function StudentTemplate({ data }: TemplateProps) {
  const pi = data['Personal Information'] || {}
  const edu = (data['Education'] as any[]) || []
  const projects = (data['Projects'] as any[]) || []
  const skills = (data['Skills'] as any[]) || []

  return (
    <div className="resume-sheet student">
      <header className="rs-header">
        <h1>{pi.fullName || 'Your Name'}</h1>
        <p className="muted small">{pi.email} · {pi.phone}</p>
      </header>
      <section>
        <h2>Education</h2>
        {edu.map((e, i) => (
          <div key={i} className="rs-item">
            <div className="rs-item-head"><strong>{e.school}</strong></div>
            <div className="rs-item-sub">{e.degree} {e.field && `· ${e.field}`} · {e.grade && e.grade}</div>
          </div>
        ))}
      </section>
      <section>
        <h2>Projects</h2>
        {projects.map((p, i) => (
          <div key={i} className="rs-item">
            <div className="rs-item-head"><strong>{p.title}</strong></div>
            {p.description && <p>{p.description}</p>}
          </div>
        ))}
      </section>
      <section>
        <h2>Skills</h2>
        <div className="chip-wrap">
          {skills.map((s, i) => (
            <span key={i} className="chip">{s.skill}</span>
          ))}
        </div>
      </section>
    </div>
  )
}
