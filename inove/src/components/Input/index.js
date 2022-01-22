import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { Container, Field, Label } from './styles';

export default function Input({ name, label, ...rest }) {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])
  return (
    <Container>
      <Label>{label}</Label>
      <Field ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
}