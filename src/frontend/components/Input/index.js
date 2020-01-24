import React from 'react'
import { StyledInput } from './styles'

const Input = ({ name, type, placeholder, value, onChange, required }) => (
  <StyledInput
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required
  />
)

export default Input
