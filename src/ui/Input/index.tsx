import React from 'react'
import { Path, UseFormRegister } from 'react-hook-form'
import { Container, InputComponent } from './index.styled'

type InputProps<InputValues> = {
  name: Path<InputValues>
  register: UseFormRegister<InputValues>
  type?: string
  className?: string
  hasError?: boolean
  placeholder?: string
  required?: boolean
} & Record<string, any>

const Input = <InputValues extends unknown>({
  name,
  register,
  type = 'text',
  className = '',
  hasError = false,
  required = false,
  ...restProps
}: InputProps<InputValues>) => (
  <Container className={className}>
    <InputComponent
      type={type}
      hasError={hasError}
      {...restProps}
      {...register(name, { required })}
    />
  </Container>
)

export default Input
