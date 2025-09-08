export type FieldType = 'text' | 'email' | 'tel' | 'textarea' | 'url' | 'date' | 'select'

export interface FieldMeta {
  name: string
  label: string
  type: FieldType
  required?: boolean
  options?: string[]
}

export interface SectionMeta {
  section: string
  repeatable?: boolean
  fields: FieldMeta[]
}

export const resumeFormMetadata: SectionMeta[] = [
  {
    section: 'Personal Information',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
      { name: 'address', label: 'Address', type: 'textarea' },
      { name: 'linkedin', label: 'LinkedIn', type: 'url' },
      { name: 'portfolio', label: 'Portfolio/Website', type: 'url' },
    ],
  },
  {
    section: 'Education',
    repeatable: true,
    fields: [
      { name: 'school', label: 'School/College', type: 'text', required: true },
      { name: 'degree', label: 'Degree', type: 'text' },
      { name: 'field', label: 'Field of Study', type: 'text' },
      { name: 'startDate', label: 'Start Date', type: 'date' },
      { name: 'endDate', label: 'End Date', type: 'date' },
      { name: 'grade', label: 'Grade/CGPA', type: 'text' },
    ],
  },
  {
    section: 'Work Experience',
    repeatable: true,
    fields: [
      { name: 'company', label: 'Company', type: 'text', required: true },
      { name: 'role', label: 'Job Title', type: 'text', required: true },
      { name: 'startDate', label: 'Start Date', type: 'date' },
      { name: 'endDate', label: 'End Date', type: 'date' },
      { name: 'description', label: 'Responsibilities', type: 'textarea' },
    ],
  },
  {
    section: 'Projects',
    repeatable: true,
    fields: [
      { name: 'title', label: 'Project Title', type: 'text', required: true },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'technologies', label: 'Technologies Used', type: 'text' },
      { name: 'link', label: 'Project Link (GitHub/Live)', type: 'url' },
    ],
  },
  {
    section: 'Skills',
    repeatable: true,
    fields: [
      { name: 'skill', label: 'Skill', type: 'text', required: true },
      {
        name: 'level',
        label: 'Proficiency (Beginner/Intermediate/Expert)',
        type: 'select',
        options: ['Beginner', 'Intermediate', 'Expert'],
      },
    ],
  },
  {
    section: 'Achievements',
    repeatable: true,
    fields: [
      { name: 'title', label: 'Achievement Title', type: 'text' },
      { name: 'description', label: 'Description', type: 'textarea' },
    ],
  },
]
