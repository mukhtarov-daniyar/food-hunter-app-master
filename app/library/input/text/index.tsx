import React from 'react';
import {TextInput} from 'react-native';
import {InputProps} from '../types';
import styles from './styles';
import inputStyles from '../styles';

const Text = ({
  placeholder,
  id,
  //type,
  value,
  //editable,
  //required,
  onChange,
}: InputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChange={({nativeEvent: {text}}) => {
        if (onChange) {
          onChange({id, value: text});
        }
      }}
      style={[styles.input, inputStyles.input]}
    />
  );
};

export default Text;
