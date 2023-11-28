import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import ProductCard from '../../components/main/product-card';
import {useStores} from '../../models';
import styles from './styles';
import {CartProduct} from '../../models/cart/cart';
import {observer, Observer} from 'mobx-react-lite';
import Button from '../../components/common/button';
import {color} from '../../theme/color';
import {useNavigation} from '@react-navigation/native';
import {routesNames} from '../../navigators';
import Price from '../../components/common/price';
import {currentCurrency, currentCurrencyPosition} from '../../constants/main';
import {Quantity} from '../../components/common/counter';
import Empty from '../../components/common/empty';
import Footer from '../../components/common/footer';

export const Cart = observer(() => {
  const {cartStore} = useStores();
  const {products} = cartStore;

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.rootContainer}>
      {products && products.length > 0 ? (
        <>
          <View style={styles.container}>
            <FlatList
              data={products}
              contentContainerStyle={styles.listContent}
              renderItem={({item}: {item: CartProduct}) => {
                const product = item.product;

                const handleChangeQuantity = (quantity: Quantity) => {
                  if (quantity !== 0) {
                    item.updateQuantity(quantity);
                  } else {
                    cartStore.removeProductFromCart(item);
                  }
                };

                return (
                  <Observer>
                    {() => (
                      <ProductCard
                        key={product.id}
                        productId={product.id}
                        title={product.name}
                        price={product.price}
                        url={product.photoUrl}
                        shadow={false}
                        shouldChangeQuantity={true}
                        quantity={item.quantity}
                        changeQuantity={handleChangeQuantity}
                        noPadding={true}
                      />
                    )}
                  </Observer>
                );
              }}
              keyExtractor={item => item.product.id}
            />
          </View>
          <Footer>
            <Price
              currencyPosition={currentCurrencyPosition}
              currency={currentCurrency}
              price={cartStore.cartTotal.toString()}
              style={styles.price}
            />
            <Button
              text={'Next'}
              color={color.brightRed}
              onClick={() => navigation.navigate(routesNames.checkout)}
              textStyle={styles.buttonText}
              fullWidth={true}
            />
          </Footer>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Empty
            text={'Empty card'}
            buttonText={'Go back'}
            onClick={() => navigation.goBack()}
          />
        </View>
      )}
    </SafeAreaView>
  );
});
