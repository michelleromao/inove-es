import React, { useRef, useEffect } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';

import { Container, Label } from './styles.js'

export default function Select({ name, label, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <Container>
      <Label>{label}</Label>
      <ReactSelect
        defaultValue={defaultValue}
        ref={selectRef}
        isSearchable={false}
        styles={{
          container: provided => ({...provided, width: "100%"}),
          control: (styles) => ({...styles, border: "1px solid #021A19", borderRadius: 9}),
          option: (styles, {data, isDisabled, isFocused, isSelected}) => {
            return{...styles, 
              backgroundColor: isDisabled
                ? undefined
                : isSelected
                ? "#005B58"
                : isFocused
                ? "#BDD4D4"
                : undefined,
            }
          }
        }}
        {...rest}
      />
    </Container>
    
  );
};