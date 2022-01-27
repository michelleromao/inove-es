import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';

import { Container, Label, Error } from './styles.js'

export default function Select({ name, children, label, isError, message, ...rest }) {
  const { fieldName, defaultValue, registerField } = useField(name);

  const optionRefs = useRef([]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: optionRefs.current,
      getValue: (refs) => {
        return refs.find((ref) => ref.selected)?.value || "";
      },
      setValue: (refs, value) => {
        const option = refs.find((ref) => ref.value === value);

        if (option) option.selected = true;
      },
      clearValue: (refs) => {
        refs.forEach((ref) => (ref.selected = false));
      }
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Label>{label}</Label>
      <select name={fieldName} defaultValue={defaultValue} {...rest}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            ref: (ref) => optionRefs.current.push(ref)
          })
        )}
    </select>
      {isError === true ? <Error>{message}</Error> : false}
    </Container>
    
  );
};