import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { Container, Field, FieldArea, Label, Error  } from './styles';

export default function Input({ name, label, typeText, isError, message, ...rest }) {
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
      {typeText === 'textarea' ?
        <FieldArea ref={inputRef} defaultValue={defaultValue} {...rest} rows={4}/>
        :
        <Field ref={inputRef} defaultValue={defaultValue} {...rest} />
      }
      {isError === true ? <Error>{message}</Error> : false}
    </Container>
  );
}