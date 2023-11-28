import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import {observer} from 'mobx-react-lite';

export type Quantity = number;

export interface CounterActionProps {
  newQuantity: Quantity;
}

type CounterAction = ({newQuantity}: CounterActionProps) => void;

interface Props {
  quantity: Quantity;
  increment: CounterAction;
  decrement: CounterAction;
  style?: any;
}

const Counter = observer(({quantity, increment, decrement, style}: Props) => {
  return (
    <View style={[styles.row, style ? style : null]}>
      <TouchableOpacity
        style={styles.countButton}
        onPress={() => decrement({newQuantity: quantity - 1})}>
        <Text style={styles.countText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.countNumber}>{quantity}</Text>
      <TouchableOpacity
        style={styles.countButton}
        onPress={() => {
          console.log('111qty in Counter', quantity);

          increment({newQuantity: quantity + 1});
        }}>
        <Text style={styles.countText}>+</Text>
      </TouchableOpacity>
    </View>
  );
});

export default Counter;
