import { FieldMeta, SectionMeta } from '@data/resumeFormMetadata'

export type FormState = Record<string, any>

export function sampleForField(section: string, field: FieldMeta, index = 0): string {
  const idx = index + 1
  const today = new Date()
  const yyyy = today.getFullYear()
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const dd = String(Math.min(today.getDate(), 28)).padStart(2, '0')
  const sampleDate = `${yyyy - 1}-01-01`
  const sampleDate2 = `${yyyy}-12-01`

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

export function createInitialData(schema: SectionMeta[]): FormState {
  const base: FormState = {}
  for (const section of schema) {
    if (section.repeatable) {
      base[section.section] = [Object.fromEntries(section.fields.map((f) => [f.name, sampleForField(section.section, f, 0)]))]
    } else {
      base[section.section] = Object.fromEntries(section.fields.map((f) => [f.name, sampleForField(section.section, f, 0)]))
    }
  }
  return base
}
