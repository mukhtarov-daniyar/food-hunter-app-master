import {Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useStores} from '../../../models';
import {observer} from 'mobx-react-lite';
import styles from './styles';
import Button from '../../common/button';
import {color} from '../../../theme/color';
import Counter, {CounterActionProps} from '../../common/counter';

const buttonTexts = {
  add: 'Add',
  save: 'Save',
  ready: 'Ready',
};

const ProductInformation = observer(({close}: {close: () => void}) => {
  const {restaurantStore, cartStore} = useStores();
  const {currentProduct} = restaurantStore;

  const cartProduct = cartStore.products.find(
    product => product.product.id === currentProduct.id,
  );

  const currentQuantity = cartProduct ? cartProduct.quantity : 1;

  const [quantity, setQuantity] = useState<number>(currentQuantity);

  const currency = '$';

  const getButtonText = () => {
    if (cartProduct) {
      if (cartProduct.quantity === quantity) {
        return buttonTexts.ready;
      } else {
        return buttonTexts.save;
      }
    } else {
      return buttonTexts.add;
    }
  };

  const handleChangeQuantity = ({newQuantity}: CounterActionProps) => {
    setQuantity(newQuantity);
  };

  useEffect(() => {
    setQuantity(currentQuantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProduct.id, cartProduct?.quantity]);

  return (
    <>
      <View style={styles.infoContainer}>
        {currentProduct && currentProduct.photoUrl ? (
          <Image source={{uri: currentProduct.photoUrl}} style={styles.image} />
        ) : null}
        <Text style={styles.description}>{currentProduct.description}</Text>
      </View>
      <View style={styles.actionContainer}>
        <View style={[styles.row, styles.space]}>
          <Text style={styles.title}>{currentProduct.name}</Text>
          <Text style={styles.price}>
            {currentProduct.price}
            {currency}
          </Text>
        </View>
        <View style={[styles.row, styles.space]}>
          <Counter
            quantity={quantity}
            increment={handleChangeQuantity}
            decrement={handleChangeQuantity}
            style={styles.countContainer}
          />
          <Button
            text={getButtonText()}
            color={color.brightRed}
            onClick={() => {
              if (cartProduct) {
                cartProduct.updateQuantity(quantity);
              } else {
                cartStore.addProductToCart(currentProduct, quantity);
              }
              close();
            }}
            textStyle={styles.addButton}
          />
        </View>
      </View>
    </>
  );
});

export default ProductInformation;
