import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { resumeFormMetadata, SectionMeta, FieldMeta } from '@data/resumeFormMetadata'
import InputField from '@components/form/InputField'
import TextArea from '@components/form/TextArea'
import SelectField from '@components/form/SelectField'
import RepeatableSection from '@components/form/RepeatableSection'

type FormState = Record<string, any>

function sampleForField(section: string, field: FieldMeta, index = 0): string {
  const idx = index + 1
  const today = new Date()
  const yyyy = today.getFullYear()
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const dd = String(Math.min(today.getDate(), 28)).padStart(2, '0')
  const sampleDate = `${yyyy - 1}-01-01`
  const sampleDate2 = `${yyyy}-12-01`

  // Heuristic by field name/type
  switch (section) {
    case 'Personal Information':
      switch (field.name) {
        case 'fullName':
          return 'John Doe'
        case 'email':
          return 'john.doe@example.com'
        case 'phone':
          return '+1 (555) 123-4567'
        case 'address':
          return '123 Main St, Hometown, Country'
        case 'linkedin':
          return 'https://www.linkedin.com/in/johndoe'
        case 'portfolio':
          return 'https://johndoe.dev'
      }
      break
    case 'Education':
      switch (field.name) {
        case 'school':
          return `ABC University`
        case 'degree':
          return 'B.Sc.'
        case 'field':
          return 'Computer Science'
        case 'startDate':
          return `${yyyy - 4}-08-01`
        case 'endDate':
          return `${yyyy - 1}-05-01`
        case 'grade':
          return '8.5 CGPA'
      }
      break
    case 'Work Experience':
      switch (field.name) {
        case 'company':
          return idx === 1 ? 'Acme Corp' : 'Globex Inc'
        case 'role':
          return idx === 1 ? 'Software Engineer' : 'Frontend Developer'
        case 'startDate':
          return sampleDate
        case 'endDate':
          return sampleDate2
        case 'description':
          return 'Implemented features, wrote tests, collaborated with cross-functional teams.'
      }
      break
    case 'Projects':
      switch (field.name) {
        case 'title':
          return idx === 1 ? 'Cloud Resume' : 'Portfolio Website'
        case 'description':
          return 'A project demonstrating cloud skills and CI/CD.'
        case 'technologies':
          return 'React, Vite, TypeScript'
        case 'link':
          return 'https://github.com/johndoe/cloud-resume'
      }
      break
    case 'Skills':
      switch (field.name) {
        case 'skill':
          return idx === 1 ? 'JavaScript' : 'React'
        case 'level':
          return field.options?.[1] ?? 'Intermediate'
      }
      break
    case 'Achievements':
      switch (field.name) {
        case 'title':
          return 'Hackathon Winner'
        case 'description':
          return 'Won 1st place for building a real-time collaboration app.'
      }
      break
  }

  // General fallback by type
  switch (field.type) {
    case 'email':
      return 'user@example.com'
    case 'tel':
      return '+1 (555) 000-0000'
    case 'url':
      return 'https://example.com'
    case 'date':
      return `${yyyy}-${mm}-${dd}`
    default:
      return ''
  }
}

function FieldRenderer({ field, value, onChange }: { field: FieldMeta; value: any; onChange: (v: any) => void }) {
  switch (field.type) {
    case 'textarea':
      return <TextArea label={field.label} name={field.name} required={field.required} value={value ?? ''} onChange={onChange} />
    case 'select':
      return (
        <SelectField
          label={field.label}
          name={field.name}
          required={field.required}
          value={value ?? ''}
          options={field.options ?? []}
          onChange={onChange}
        />
      )
    default:
      return (
        <InputField
          label={field.label}
          name={field.name}
          type={(field.type as any) || 'text'}
          required={field.required}
          value={value ?? ''}
          onChange={onChange}
        />
      )
  }
}

function useInitialState(schema: SectionMeta[]) {
  return useMemo(() => {
    const base: FormState = {}
    for (const section of schema) {
      if (section.repeatable) {
        base[section.section] = [
          Object.fromEntries(section.fields.map((f: FieldMeta) => [f.name, sampleForField(section.section, f, 0)])),
        ]
      } else {
        base[section.section] = Object.fromEntries(
          section.fields.map((f: FieldMeta) => [f.name, sampleForField(section.section, f, 0)])
        )
      }
    }
    return base
  }, [schema])
}

export default function Resume() {
  const schema = resumeFormMetadata
  const [data, setData] = useState<FormState>(useInitialState(schema))
  const navigate = useNavigate()

  // Load existing from localStorage on mount if any
  useEffect(() => {
    try {
      const raw = localStorage.getItem('resumeData')
      if (raw) setData(JSON.parse(raw))
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (section: SectionMeta, field: FieldMeta, value: any, index?: number) => {
    setData((prev) => {
      const copy = structuredClone(prev)
      if (section.repeatable) {
        copy[section.section][index!][field.name] = value
      } else {
        copy[section.section][field.name] = value
      }
      return copy
    })
  }

  const addEntry = (section: SectionMeta) => {
    setData((prev) => {
      const copy = structuredClone(prev)
      const idx = (copy[section.section] as any[]).length
      copy[section.section].push(
        Object.fromEntries(section.fields.map((f: FieldMeta) => [f.name, sampleForField(section.section, f, idx)]))
      )
      return copy
    })
  }

  const removeEntry = (section: SectionMeta, idx: number) => {
    setData((prev) => {
      const copy = structuredClone(prev)
      copy[section.section].splice(idx, 1)
      return copy
    })
  }

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()
    try {
      localStorage.setItem('resumeData', JSON.stringify(data))
    } catch {}
    navigate('/preview', { state: { data } })
  }

  return (
    <div className="resume-page">
      <h1 className="page-title">Resume Builder</h1>
      <form onSubmit={handleSubmit} className="form-grid">
  {schema.map((section: SectionMeta) => (
          <div key={section.section} className="section">
            {section.repeatable ? (
              <RepeatableSection title={section.section} onAdd={() => addEntry(section)}>
                {(data[section.section] as any[]).map((entry, idx) => (
                  <div className="repeat-item" key={idx}>
                    <div className="repeat-grid">
                      {section.fields.map((f: FieldMeta) => (
                        <FieldRenderer
                          key={f.name + idx}
                          field={f}
                          value={entry[f.name]}
                          onChange={(v) => handleChange(section, f, v, idx)}
                        />
                      ))}
                    </div>
                    <div className="repeat-actions">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => removeEntry(section, idx)}
                        disabled={(data[section.section] as any[])?.length <= 1}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </RepeatableSection>
            ) : (
              <section className="card">
                <div className="card-header">
                  <h3 className="card-title">{section.section}</h3>
                </div>
                <div className="card-body">
                  <div className="grid-two">
                    {section.fields.map((f: FieldMeta) => (
                      <FieldRenderer
                        key={f.name}
                        field={f}
                        value={data[section.section][f.name]}
                        onChange={(v) => handleChange(section, f, v)}
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        ))}

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
