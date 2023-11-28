import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {shadowStyle} from '../restaurant-card/styles';
import Counter, {CounterActionProps, Quantity} from '../../common/counter';
import {observer} from 'mobx-react-lite';
import Price from '../../common/price';
import {
  currentCurrency,
  currentCurrencyPosition,
} from '../../../constants/main';

const imageUrl =
  'https://firebasestorage.googleapis.com/v0/b/food-hunter-98aea.appspot.com/o/restaurants%2FdBIgcaQqtCmh1d452VKz%2Fproducts%2Fimg_3911_500_306_5_100-234.jpg?alt=media&token=9b4f30bb-3d27-4102-95b2-d39eba14eb49';

type ProductId = string;

interface Props {
  productId: ProductId;
  title: string | null;
  price: string | null;
  url: string | null;
  onClick?: ({id}: any) => void;
  shadow?: boolean;
  shouldChangeQuantity?: boolean;
  quantity?: Quantity;
  changeQuantity?: (quantity: Quantity) => void;
  noPadding?: boolean;
}

const ProductCard = observer(
  ({
    productId,
    title,
    price,
    url,
    onClick,
    shadow = true,
    shouldChangeQuantity,
    quantity,
    changeQuantity,
    noPadding,
  }: Props) => {
    const handleChangeQuantity = ({newQuantity}: CounterActionProps) => {
      if (changeQuantity) {
        changeQuantity(newQuantity);
      }
    };

    return (
      <TouchableOpacity
        onPress={() => onClick && onClick({id: productId})}
        style={[
          styles.container,
          shadow ? {...shadowStyle} : null,
          noPadding ? styles.noPadding : null,
        ]}
        activeOpacity={onClick ? 0.8 : 1}>
        <Image style={styles.image} source={{uri: url || imageUrl}} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          {price ? (
            <Price
              currencyPosition={currentCurrencyPosition}
              currency={currentCurrency}
              price={price}
              style={styles.price}
            />
          ) : null}
          {shouldChangeQuantity && quantity ? (
            <View style={styles.quantity}>
              <Counter
                quantity={quantity}
                increment={handleChangeQuantity}
                decrement={handleChangeQuantity}
              />
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  },
);

export default ProductCard;
