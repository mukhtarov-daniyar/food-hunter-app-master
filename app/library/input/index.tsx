import React from 'react';
import getFieldByType from '../../utils/input-type-getter';
import {InputProps} from './types';

const Input = ({
  defaultValue,
  placeholder,
  id,
  type,
  value,
  editable,
  required,
  onChange,
  meta,
}: InputProps) => {
  const Field = getFieldByType(type);

  return (
    <Field.Component
      defaultValue={defaultValue}
      placeholder={placeholder}
      id={id}
      type={type}
      value={value}
      editable={editable}
      required={required}
      onChange={onChange}
      meta={meta}
    />
  );
};

export default Input;
