export type TemplateId =
  | 'classic'
  | 'modern'
  | 'creative'
  | 'tech'
  | 'academic'
  | 'infographic'
  | 'executive'
  | 'functional'
  | 'student'
  | 'hybrid'

export interface TemplateProps {
  data: Record<string, any>
}

export interface TemplateDef {
  id: TemplateId
  name: string
  component: (props: TemplateProps) => JSX.Element
}

// Individual templates
export { default as ClassicTemplate } from './templates/ClassicTemplate'
export { default as ModernTemplate } from './templates/ModernTemplate'
export { default as CreativeTemplate } from './templates/CreativeTemplate'
export { default as TechTemplate } from './templates/TechTemplate'
export { default as AcademicTemplate } from './templates/AcademicTemplate'
export { default as InfographicTemplate } from './templates/InfographicTemplate'
export { default as ExecutiveTemplate } from './templates/ExecutiveTemplate'
export { default as FunctionalTemplate } from './templates/FunctionalTemplate'
export { default as StudentTemplate } from './templates/StudentTemplate'
export { default as HybridTemplate } from './templates/HybridTemplate'
