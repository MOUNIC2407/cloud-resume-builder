import React from 'react'
import { TemplateProps } from '..'

export default function ModernTemplate({ data }: TemplateProps) {
  const pi = data['Personal Information'] || {}
  const work = (data['Work Experience'] as any[]) || []
  const projects = (data['Projects'] as any[]) || []
  const skills = (data['Skills'] as any[]) || []

  return (
    <div className="resume-sheet modern">
      <header className="rs-header accent">
        <div>
          <h1>{pi.fullName || 'Your Name'}</h1>
          <p className="muted">
            {pi.email} · {pi.phone} · {pi.linkedin}
          </p>
        </div>
      </header>
      <section>
        <h2>Skills</h2>
        <div className="chip-wrap">
          {skills.map((s, i) => (
            <span key={i} className="chip">
              {s.skill}
            </span>
          ))}
        </div>
      </section>
      <section>
        <h2>Selected Projects</h2>
        {projects.map((p, i) => (
          <div key={i} className="rs-item">
            <div className="rs-item-head">
              <strong>{p.title}</strong>
              {p.link && (
                <span className="muted">
                  {' '}
                  · <a href={p.link}>{p.link}</a>
                </span>
              )}
            </div>
            {p.description && <p>{p.description}</p>}
            {p.technologies && <div className="rs-item-sub">{p.technologies}</div>}
          </div>
        ))}
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
    </div>
  )
}
