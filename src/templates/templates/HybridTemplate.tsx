import React from 'react'
import { TemplateProps } from '..'

export default function HybridTemplate({ data }: TemplateProps) {
  const pi = data['Personal Information'] || {}
  const work = (data['Work Experience'] as any[]) || []
  const projects = (data['Projects'] as any[]) || []
  const skills = (data['Skills'] as any[]) || []

  return (
    <div className="resume-sheet hybrid two-col">
      <aside className="side">
        <h2>{pi.fullName || 'Your Name'}</h2>
        <p className="muted small">{pi.email}\n{pi.phone}</p>
        <h3>Skills</h3>
        <ul className="rs-list">
          {skills.map((s, i) => (
            <li key={i}>{s.skill}</li>
          ))}
        </ul>
      </aside>
      <main className="content">
        <section>
          <h2>Experience</h2>
          {work.map((w, i) => (
            <div key={i} className="rs-item">
              <div className="rs-item-head"><strong>{w.role}</strong> · {w.company}</div>
              <div className="rs-item-sub">{w.startDate} — {w.endDate}</div>
              {w.description && <p>{w.description}</p>}
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
      </main>
    </div>
  )
}
