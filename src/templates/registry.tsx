import React from 'react'
import { TemplateDef, TemplateId } from '.'
import ClassicTemplate from './templates/ClassicTemplate'
import ModernTemplate from './templates/ModernTemplate'
import CreativeTemplate from './templates/CreativeTemplate'
import TechTemplate from './templates/TechTemplate'
import AcademicTemplate from './templates/AcademicTemplate'
import InfographicTemplate from './templates/InfographicTemplate'
import ExecutiveTemplate from './templates/ExecutiveTemplate'
import FunctionalTemplate from './templates/FunctionalTemplate'
import StudentTemplate from './templates/StudentTemplate'
import HybridTemplate from './templates/HybridTemplate'

export const templates: TemplateDef[] = [
  { id: 'classic', name: 'Classic Professional', component: (p) => <ClassicTemplate {...p} /> },
  { id: 'modern', name: 'Modern Minimalist', component: (p) => <ModernTemplate {...p} /> },
  { id: 'creative', name: 'Creative Portfolio', component: (p) => <CreativeTemplate {...p} /> },
  { id: 'tech', name: 'Tech / Developer Focused', component: (p) => <TechTemplate {...p} /> },
  { id: 'academic', name: 'Academic CV', component: (p) => <AcademicTemplate {...p} /> },
  { id: 'infographic', name: 'Infographic Resume', component: (p) => <InfographicTemplate {...p} /> },
  { id: 'executive', name: 'Executive / Leadership', component: (p) => <ExecutiveTemplate {...p} /> },
  { id: 'functional', name: 'Functional / Skills-Based', component: (p) => <FunctionalTemplate {...p} /> },
  { id: 'student', name: 'Student / Fresher', component: (p) => <StudentTemplate {...p} /> },
  { id: 'hybrid', name: 'Hybrid (Combination)', component: (p) => <HybridTemplate {...p} /> },
]

export function getTemplateById(id: TemplateId) {
  return templates.find((t) => t.id === id)
}
