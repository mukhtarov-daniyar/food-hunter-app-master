import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export const imageUrl =
  'https://firebasestorage.googleapis.com/v0/b/food-hunter-98aea.appspot.com/o/restaurants%2FdBIgcaQqtCmh1d452VKz%2Fproducts%2Fimg_3911_500_306_5_100-234.jpg?alt=media&token=9b4f30bb-3d27-4102-95b2-d39eba14eb49';

interface Props {
  restaurantId: string;
  title: string | null;
  description: string | null;
  address: string | null;
  url: string | null;
  onClick: ({restaurantId}: any) => void;
}

const RestaurantCard = ({
  restaurantId,
  title,
  description,
  url,
  onClick,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onClick({restaurantId})}
      style={styles.container}
      activeOpacity={0.8}>
      <Image style={styles.image} source={{uri: url || imageUrl}} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
