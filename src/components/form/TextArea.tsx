import React from 'react'

type Props = {
  label: string
  name: string
  required?: boolean
  value: string
  onChange: (v: string) => void
}

export default function TextArea({ label, name, required, value, onChange }: Props) {
  return (
    <label className="f-group">
      <span className="f-label">
        {label}
        {required ? <span className="f-required">*</span> : null}
      </span>
      <textarea
        className="f-textarea"
        name={name}
        required={required}
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}
