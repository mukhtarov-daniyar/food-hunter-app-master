import React from 'react';
import {Text, View} from 'react-native';
import Input from '../../input';
import {FormBlock, FormBlockField, FormBlockRow} from '../types';
import {InputOnChange} from '../../input/types';
import styles from './styles';

interface InputRowItemProps {
  block: FormBlock;
  row: FormBlockRow;
  rowKey: string | null;
  field: FormBlockField;
  onChange?: InputOnChange;
}

const InputRowItem = ({
  block,
  /*row,*/ onChange,
  rowKey,
  field,
}: InputRowItemProps) => {
  const attribute = rowKey ? block.attributes[rowKey] : null;
  //const field = rowKey ? block.fields[rowKey] : null;
  //const rowRatio = 12 / row.length;
  //const rowLength = rowRatio >= 4 ? Math.round(rowRatio) : 4;

  return (
    <>
      {attribute ? (
        <View /*md={rowLength}*/ key={rowKey}>
          <Text style={styles.label}>{attribute.label}</Text>
          <Input
            defaultValue={attribute.defaultValue}
            placeholder={attribute.placeholder}
            id={attribute.id}
            type={attribute.type}
            value={field}
            editable={attribute.editable}
            required={attribute.required}
            onChange={onChange}
            meta={attribute.meta}
          />
        </View>
      ) : null}
    </>
  );
};

export default InputRowItem;
