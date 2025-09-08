import React from 'react'
import { TemplateProps } from '..'

export default function ClassicTemplate({ data }: TemplateProps) {
  const pi = data['Personal Information'] || {}
  const edu = (data['Education'] as any[]) || []
  const work = (data['Work Experience'] as any[]) || []
  const projects = (data['Projects'] as any[]) || []
  const skills = (data['Skills'] as any[]) || []
  const ach = (data['Achievements'] as any[]) || []

  return (
    <div className="resume-sheet classic">
      <header className="rs-header">
        <h1>{pi.fullName || 'Your Name'}</h1>
        <p>
          {pi.email} · {pi.phone} · {pi.linkedin} · {pi.portfolio}
        </p>
        {pi.address && <p>{pi.address}</p>}
      </header>

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
        <h2>Projects</h2>
        {projects.map((p, i) => (
          <div key={i} className="rs-item">
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
      </section>

      <section>
        <h2>Education</h2>
        {edu.map((e, i) => (
          <div key={i} className="rs-item">
            <div className="rs-item-head">
              <strong>{e.school}</strong> · {e.degree} {e.field && `· ${e.field}`}
            </div>
            <div className="rs-item-sub">
              {e.startDate} — {e.endDate} {e.grade && `· ${e.grade}`}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="rs-list">
          {skills.map((s, i) => (
            <li key={i}>
              {s.skill} {s.level && `(${s.level})`}
            </li>
          ))}
        </ul>
      </section>

      {ach.length > 0 && (
        <section>
          <h2>Achievements</h2>
          <ul className="rs-list">
            {ach.map((a, i) => (
              <li key={i}>
                <strong>{a.title}</strong> {a.description && `— ${a.description}`}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
