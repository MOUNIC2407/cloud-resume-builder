import React from 'react'

type Props = {
  label: string
  name: string
  required?: boolean
  value: string
  options: string[]
  onChange: (v: string) => void
}

export default function SelectField({ label, name, required, value, options, onChange }: Props) {
  return (
    <label className="f-group">
      <span className="f-label">
        {label}
        {required ? <span className="f-required">*</span> : null}
      </span>
      <select
        className="f-select"
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  )
}
