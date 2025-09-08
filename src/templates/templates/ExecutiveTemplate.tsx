import React from 'react'
import { TemplateProps } from '..'

export default function ExecutiveTemplate({ data }: TemplateProps) {
  const pi = data['Personal Information'] || {}
  const work = (data['Work Experience'] as any[]) || []
  const ach = (data['Achievements'] as any[]) || []

  return (
    <div className="resume-sheet executive">
      <header className="rs-header">
        <h1>{pi.fullName || 'Your Name'}</h1>
        <p className="muted">{pi.email} · {pi.phone} · {pi.linkedin}</p>
      </header>
      <section>
        <h2>Leadership Experience</h2>
        {work.map((w, i) => (
          <div key={i} className="rs-item">
            <div className="rs-item-head"><strong>{w.role}</strong> · {w.company}</div>
            <div className="rs-item-sub">{w.startDate} — {w.endDate}</div>
            {w.description && <p>{w.description}</p>}
          </div>
        ))}
      </section>
      {ach.length > 0 && (
        <section>
          <h2>Selected Achievements</h2>
          <ul className="rs-list">
            {ach.map((a, i) => (
              <li key={i}><strong>{a.title}</strong> {a.description && `— ${a.description}`}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
