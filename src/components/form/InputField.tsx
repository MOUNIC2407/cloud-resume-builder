import React from 'react'

type Props = {
  label: string
  name: string
  type?: 'text' | 'email' | 'tel' | 'url' | 'date'
  required?: boolean
  value: string
  onChange: (v: string) => void
}

export default function InputField({ label, name, type = 'text', required, value, onChange }: Props) {
  return (
    <label className="f-group">
      <span className="f-label">
        {label}
        {required ? <span className="f-required">*</span> : null}
      </span>
      <input
        className="f-input"
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}
