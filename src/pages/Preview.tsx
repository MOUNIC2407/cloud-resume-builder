import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { exportElementToPdf } from '@utils/pdf'
import { resumeFormMetadata } from '@data/resumeFormMetadata'
import { createInitialData, FormState } from '@utils/resumeData'
import { templates } from '@templates/registry'

export default function Preview() {
  const location = useLocation() as any
  const navigate = useNavigate()
  const initialData = useMemo(() => {
    if (location?.state?.data) return location.state.data as FormState
    try {
      const raw = localStorage.getItem('resumeData')
      if (raw) return JSON.parse(raw) as FormState
    } catch {}
    return createInitialData(resumeFormMetadata)
  }, [location?.state])
  const [data, setData] = useState<FormState>(initialData)
  const [templateId, setTemplateId] = useState(templates[0].id)
  const [pageSize, setPageSize] = useState<'a4' | 'letter'>('a4')
  const sheetRef = useRef<HTMLDivElement | null>(null)

  // If route state changes (e.g., user saves again), update local state
  useEffect(() => {
    if (location?.state?.data) {
      setData(location.state.data as FormState)
    }
  }, [location?.state])

  const Current = templates.find((t) => t.id === templateId)!

  return (
    <div className="resume-preview">
      <div className="preview-toolbar card">
        <div className="card-body" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>Template</span>
            <select className="f-select" value={templateId} onChange={(e) => setTemplateId(e.target.value as any)}>
              {templates.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </label>
          <button className="btn" onClick={() => navigate('/resume')}>Back to form</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              try { localStorage.removeItem('resumeData') } catch {}
              setData(createInitialData(resumeFormMetadata))
            }}
          >
            Reset data
          </button>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>Paper</span>
            <select className="f-select" value={pageSize} onChange={(e) => setPageSize(e.target.value as any)}>
              <option value="a4">A4</option>
              <option value="letter">Letter</option>
            </select>
          </label>
          <button
            className="btn btn-primary"
            onClick={async () => {
              const el = sheetRef.current?.querySelector('.resume-sheet') as HTMLElement
              if (!el) return
              const pi = (data as any)['Personal Information'] || {}
              const name = (pi.fullName as string) || 'Resume'
              const current = templates.find((t) => t.id === templateId)
              const tName = current ? current.name : 'Template'
              const safe = (s: string) => s.replace(/[^a-z0-9\-_. ]/gi, '').replace(/\s+/g, '-').slice(0, 80)
              const filename = `${safe(name)}-${safe(tName)}-${pageSize.toUpperCase()}.pdf`
              await exportElementToPdf(el, {
                filename,
                jsPDF: { unit: 'mm', format: pageSize, orientation: 'portrait' },
              })
            }}
          >
            Download PDF
          </button>
        </div>
      </div>
      <div className="sheet-wrap" ref={sheetRef}>
        <Current.component data={data} />
      </div>
    </div>
  )
}
