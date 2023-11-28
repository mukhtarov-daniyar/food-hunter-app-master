import React from 'react';
import {InputProps} from '../types';
import {Picker} from '@react-native-picker/picker';
import {Option} from '../../../types/common';
import inputStyles from '../styles';
import {View} from 'react-native';

const Select = ({
  meta,
  id,
  value,
  onChange,
}: //placeholder,
//type,
//editable,
//required,

InputProps) => {
  const handleChange = (value: any) => {
    if (onChange) {
      console.log(`selected ${value}`);

      onChange({
        id,
        value,
      });
    }
  };

  //TODO bottom sheet for ios device

  return (
    <View style={inputStyles.input}>
      <Picker selectedValue={value} onValueChange={handleChange}>
        {meta?.options
          ? meta.options.map((option: Option) => (
              <Picker.Item
                key={option.value}
                label={option.text}
                value={option.value}
              />
            ))
          : null}
      </Picker>
    </View>
  );
};

export default Select;
