import React from 'react'
import { TemplateProps } from '..'

export default function TechTemplate({ data }: TemplateProps) {
  const pi = data['Personal Information'] || {}
  const projects = (data['Projects'] as any[]) || []
  const skills = (data['Skills'] as any[]) || []
  const work = (data['Work Experience'] as any[]) || []

  return (
    <div className="resume-sheet tech">
      <header className="rs-header">
        <h1>{pi.fullName || 'Your Name'}</h1>
        <p className="muted small">
          GitHub: {pi.portfolio} · LinkedIn: {pi.linkedin} · Email: {pi.email}
        </p>
      </header>
      <section>
        <h2>Projects</h2>
        <div className="grid-two">
          {projects.map((p, i) => (
            <div key={i} className="rs-card">
              <div className="rs-item-head">
                <strong>{p.title}</strong>
              </div>
              {p.technologies && <div className="rs-item-sub">{p.technologies}</div>}
              {p.description && <p>{p.description}</p>}
              {p.link && (
                <p>
                  <a href={p.link}>{p.link}</a>
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Experience</h2>
        {work.map((w, i) => (
          <div key={i} className="rs-item">
            <div className="rs-item-head">
              <strong>{w.role}</strong> · {w.company}
            </div>
            <div className="rs-item-sub">
              {w.startDate} — {w.endDate}
            </div>
            {w.description && <p>{w.description}</p>}
          </div>
        ))}
      </section>
      <section>
        <h2>Tech Stack</h2>
        <div className="chip-wrap">
          {skills.map((s, i) => (
            <span key={i} className="chip">
              {s.skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
