import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Products, Cart, Checkout} from '../screens';
import {TouchableOpacity} from 'react-native';
import {useStores} from '../models';

import Icon from 'react-native-vector-icons/Ionicons';
import styles, {headerIconSize} from './style';

export type PrimaryParamList = {
  home: undefined;
  products: undefined;
  cart: undefined;
  checkout: undefined;
};

const Stack = createStackNavigator<PrimaryParamList>();

export const routesNames: any = {
  home: 'home',
  products: 'products',
  cart: 'cart',
  checkout: 'checkout',
};

export const routesTitles: any = {
  [routesNames.home]: 'Home',
  [routesNames.products]: 'Products',
  [routesNames.cart]: 'Cart',
  [routesNames.checkout]: 'Checkout',
};

export function MainNavigator() {
  const {cartStore} = useStores();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name={routesNames.home}
        component={Home}
        options={{title: routesTitles[routesNames.home]}}
      />
      <Stack.Screen
        name={routesNames.products}
        component={Products}
        options={{title: routesTitles[routesNames.products]}}
      />
      <Stack.Screen
        name={routesNames.cart}
        component={Cart}
        options={{
          title: routesTitles[routesNames.cart],
          headerRight: () => (
            <TouchableOpacity
              onPress={() => cartStore.clearCart()}
              style={styles.iconContainer}>
              <Icon name={'trash-outline'} size={headerIconSize} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name={routesNames.checkout}
        component={Checkout}
        options={{title: routesTitles[routesNames.checkout]}}
      />
    </Stack.Navigator>
  );
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['home'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
