import React from "react"

export function RadioButton({
  label,
  value,
  checked,
  onChange,
}: {
  label: string
  value: string
  checked: boolean
  onChange: (value: string) => void
}) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-400"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span className="select-none">{label}</span>
    </label>
  )
}
