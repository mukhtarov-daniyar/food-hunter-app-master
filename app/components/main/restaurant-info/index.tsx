import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from '../../../theme/color';

const RestaurantInfo = ({name, address}: any) => (
  <View style={styles.container}>
    <Text style={styles.title}>{name}</Text>
    <View style={styles.row}>
      <Icon name="location-outline" size={25} color={color.brightRed} />
      <Text style={styles.description}>{address}</Text>
    </View>
  </View>
);

export default RestaurantInfo;
