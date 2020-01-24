import React from 'react'
import { StyledForm } from './styles'

const Form = ({ children, onSubmit }) => (
  <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
)

export default Form
