import React from 'react';
import {InputFormProps} from './types';
import {Text, View} from 'react-native';
import InputRow from './input-row';
import styles from './styles';
import {observer} from 'mobx-react-lite';

export interface InputOnChangeProps {
  id: any;
  value: any;
}

const InputForm = observer(({formBlocks, onChange, fields}: InputFormProps) => {
  return (
    <View>
      {formBlocks.map((block, index) => (
        <View
          key={block.id}
          style={[
            index === formBlocks.length - 1 ? null : styles.inputRowMargin,
          ]}>
          {block.name ? <Text>{block.name}</Text> : null}
          <View>
            {block.rows.map((row, index) => {
              return (
                <View
                  key={index}
                  style={[
                    index === block.rows.length - 1
                      ? null
                      : styles.inputRowMargin,
                  ]}>
                  <InputRow
                    block={block}
                    row={row}
                    onChange={({id, value}) => {
                      if (onChange) {
                        onChange({blockId: block.id, fieldId: id, value});
                      }
                    }}
                    fields={fields[block.id]}
                  />
                </View>
              );
            })}
          </View>
        </View>
      ))}
    </View>
  );
});

export default InputForm;
