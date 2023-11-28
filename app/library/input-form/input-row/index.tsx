import React from 'react';
import {View} from 'react-native';
import InputRowItem from '../input-row-item';
import {FormBlock, FormBlockRow, InputFormFields} from '../types';
import {InputOnChange} from '../../input/types';
import styles from './styles';

const InputRow = ({
  block,
  row,
  onChange,
  fields,
}: {
  block: FormBlock;
  row: FormBlockRow;
  fields: InputFormFields;
  onChange?: InputOnChange;
}) => {
  return (
    <View style={styles.container}>
      {row.map((key: any, index) => {
        return (
          <View
            key={key}
            style={[
              styles.input,
              index === 0 ? styles.noLeftMargin : null,
              index === row.length - 1 ? styles.noRightMargin : null,
            ]}>
            <InputRowItem
              block={block}
              row={row}
              onChange={onChange}
              rowKey={key}
              field={fields[key]}
            />
          </View>
        );
      })}
    </View>
  );
};

export default InputRow;
