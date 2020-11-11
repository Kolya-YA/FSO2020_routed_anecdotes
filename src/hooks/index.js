import { useState } from 'react'

export const useField = (name, type) => {
  const [value, setValue] = useState('')
  if (name === 'reset') setValue('')
  
  const onChange = event => {
    event
      ? setValue(event.target.value)
      : setValue('')
  }

  return {
    name,
    type,
    value,
    onChange
  }
}