import React from 'react'
import { TemplateProps } from '..'

export default function CreativeTemplate({ data }: TemplateProps) {
  const pi = data['Personal Information'] || {}
  const projects = (data['Projects'] as any[]) || []
  const skills = (data['Skills'] as any[]) || []
  const ach = (data['Achievements'] as any[]) || []

  return (
    <div className="resume-sheet creative two-col">
      <aside className="side">
        <div className="avatar" />
        <h2>{pi.fullName || 'Your Name'}</h2>
        <p className="muted small">
          {pi.email}
          <br />
          {pi.linkedin}
          <br />
          {pi.portfolio}
        </p>
        <h3>Skills</h3>
        <ul className="rs-list">
          {skills.map((s, i) => (
            <li key={i}>{s.skill}</li>
          ))}
        </ul>
        {ach.length > 0 && (
          <>
            <h3>Achievements</h3>
            <ul className="rs-list">
              {ach.map((a, i) => (
                <li key={i}>{a.title}</li>
              ))}
            </ul>
          </>
        )}
      </aside>
      <main className="content">
        <section>
          <h2>Projects</h2>
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
      </main>
    </div>
  )
}
