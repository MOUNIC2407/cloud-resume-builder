import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
  onAdd?: () => void
}

export default function RepeatableSection({ title, children, onAdd }: Props) {
  return (
    <section className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        {onAdd && (
          <button type="button" className="btn" onClick={onAdd}>
            + Add
          </button>
        )}
      </div>
      <div className="card-body">{children}</div>
    </section>
  )
}
