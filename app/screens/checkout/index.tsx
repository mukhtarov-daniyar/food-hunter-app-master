import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, View} from 'react-native';
import InputForm from '../../library/input-form';
import {blocksKeys, checkoutFormData} from '../../constants/checkout';
import styles from './styles';
import Footer from '../../components/common/footer';
import {color} from '../../theme/color';
import Button from '../../components/common/button';
import {InputFormOnChangeProps} from '../../library/input-form/types';
import {useStores} from '../../models';
import {observer} from 'mobx-react-lite';
import {Client} from '../../models/client/client';
import {useNavigation} from '@react-navigation/native';
import {routesNames} from '../../navigators';

export const Checkout = observer(() => {
  const [isLoading, setIsLoading] = useState(false);

  const {cartStore, restaurantStore} = useStores();
  const {order, client} = cartStore;
  const {currentRestaurant} = restaurantStore;

  const navigation = useNavigation();

  console.log('>>renderCheckout');

  console.log('order', order);
  console.log('client', client);
  const onFormChange = ({blockId, fieldId, value}: InputFormOnChangeProps) => {
    if (blockId === blocksKeys.order) {
      order.updateOrder(fieldId, value);
    }

    if (blockId === blocksKeys.client) {
      client.updateClient(fieldId, value);
    }
  };

  const createAlert = ({onOk}: {onOk: () => void}) =>
    Alert.alert('', 'Thanks! You have successfully created an order', [
      {text: 'OK', onPress: () => onOk()},
    ]);

  const onAlertOk = () => {
    cartStore.reset();
    navigation.navigate(routesNames.home);
  };

  const handleCheckout = () => {
    console.log('>>checkout');

    setIsLoading(true);
    cartStore.createClient(client, ({clientId}) => {
      const newClient: Client = {
        ...client,
        id: clientId,
      };

      cartStore.updateClient(newClient, () => {
        order.clientId = clientId;
        order.restaurantId = currentRestaurant.id;
        cartStore.createOrder(order, () => {
          setIsLoading(false);
          createAlert({
            onOk: onAlertOk,
          });
        });
      });
    });
  };

  useEffect(() => {
    return () => {
      console.log('>clear order');
      cartStore.clearOrder();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <InputForm
          formBlocks={checkoutFormData}
          //@ts-ignore
          fields={{
            [blocksKeys.client]: {...client},
            [blocksKeys.order]: {...order},
          }}
          onChange={onFormChange}
        />
      </View>
      <Footer>
        <Button
          text={'Place order'}
          color={color.brightRed}
          onClick={handleCheckout}
          textStyle={styles.buttonText}
          fullWidth={true}
          // TODO isLoading to disable on checkout
          isLoading={isLoading}
        />
      </Footer>
    </SafeAreaView>
  );
});
