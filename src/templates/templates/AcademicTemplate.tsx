import React from 'react'
import { TemplateProps } from '..'

export default function AcademicTemplate({ data }: TemplateProps) {
  const pi = data['Personal Information'] || {}
  const edu = (data['Education'] as any[]) || []
  const ach = (data['Achievements'] as any[]) || []

  return (
    <div className="resume-sheet academic">
      <header className="rs-header">
        <h1 style={{ fontFamily: 'Times New Roman, serif' }}>{pi.fullName || 'Your Name'}</h1>
        <p className="muted">
          {pi.email} · {pi.phone} · {pi.linkedin}
        </p>
      </header>
      <section>
        <h2>Education</h2>
        {edu.map((e, i) => (
          <div key={i} className="rs-item">
            <div className="rs-item-head">
              <strong>{e.school}</strong>
            </div>
            <div className="rs-item-sub">
              {e.degree} {e.field && `· ${e.field}`} · {e.startDate} — {e.endDate} {e.grade && `· ${e.grade}`}
            </div>
          </div>
        ))}
      </section>
      {ach.length > 0 && (
        <section>
          <h2>Publications & Achievements</h2>
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
