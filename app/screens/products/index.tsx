import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Alert,
  BackHandler,
  Image,
  LayoutRectangle,
  View,
  ViewStyle,
} from 'react-native';
import {useStores} from '../../models';
import styles from './styles';
import ProductCard from '../../components/main/product-card';
import {imageUrl} from '../../components/main/restaurant-card';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import RestaurantInfo from '../../components/main/restaurant-info';
import TagTabs from '../../components/common/tag-tabs';
import {initialProductCategory} from '../../models/restaurant-store/restaurant-store';
import {Loader} from '../home';
import ProductInformation from '../../components/main/product-information';
import Empty from '../../components/common/empty';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {routesNames} from '../../navigators';
import {Product} from '../../models/product/product';
import Footer from '../../components/common/footer';
import {observer} from 'mobx-react-lite';
import Price from '../../components/common/price';
import {currentCurrency, currentCurrencyPosition} from '../../constants/main';
import Button from '../../components/common/button';
import {color} from '../../theme/color';
import cartStyles from '../cart/styles';
import {HeaderBackButton} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const productsEmptyTexts = {
  emptyProductCategories: 'There is nothing here yet, try another restaurant',
  emptyProducts: 'There is no products here yet, try another category',
  buttonText: 'Ok, go back',
};

export const Products = observer(() => {
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const [isProductSheetVisible, setIsProductSheetVisible] = useState(false);

  const {restaurantStore, cartStore} = useStores();
  const {
    currentRestaurant,
    products,
    productCategories,
    currentProductCategory,
  } = restaurantStore;
  const navigation = useNavigation();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const productBottomSheetRef: any = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['70%', '100%'], []);
  const productSnapPoints = useMemo(() => [-20, '60%', '100%'], []);

  const isCartFilled = cartStore.products.length > 0;

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleProductSheetChanges = useCallback((index: number) => {
    console.log('product handleSheetChanges', index);

    setIsProductSheetVisible(index !== 0);
  }, []);

  const {bottom: bottomInset} = useSafeAreaInsets();

  const [footerLayout, setFooterLayout] = useState<LayoutRectangle | null>(
    null,
  );

  const footerLayoutHeight = footerLayout?.height || 0;

  const contentContainerStyle = useMemo<ViewStyle>(
    () => ({
      ...styles.contentContainer,
      paddingBottom: isCartFilled ? footerLayoutHeight : bottomInset,
    }),
    [bottomInset, footerLayoutHeight, isCartFilled],
  );

  const initialFetchData = useCallback(async () => {
    try {
      await restaurantStore.getProductCategories(
        currentRestaurant.id,
        async () => {
          if (productCategories.length > 0) {
            const firstProductCategory = productCategories[0];

            restaurantStore.setCurrentProductCategory(firstProductCategory);

            await restaurantStore.getProducts(
              currentRestaurant.id,
              firstProductCategory.id,
            );
            setIsProductsLoading(false);
          } else {
            setIsProductsLoading(false);
          }
        },
      );
    } catch (e) {
      console.log('e in initialFetchData');
    }
  }, [currentRestaurant.id, productCategories, restaurantStore]);

  const productOnClick = ({id}: {id: any}) => {
    const targetProduct = products.find(product => product.id === id);

    restaurantStore.setCurrentProduct(targetProduct);
    productBottomSheetRef.current.snapTo(1);
    setIsProductSheetVisible(true);
  };

  const onTabChange = async ({item}: any) => {
    setIsProductsLoading(true);

    restaurantStore.setCurrentProductCategory(item);
    restaurantStore.saveProducts([]);

    await restaurantStore.getProducts(
      currentRestaurant.id,
      currentProductCategory.id,
    );

    setIsProductsLoading(false);
  };

  const renderItem = ({item}: {item: Product}) => (
    <View style={styles.card}>
      <ProductCard
        key={item.id}
        productId={item.id}
        title={item.name || null}
        price={item.price || null}
        url={item.photoUrl || null}
        onClick={productOnClick}
      />
    </View>
  );

  const [backdropPressBehavior] = useState<'none' | 'close' | 'collapse'>(
    'collapse',
  );

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop {...props} pressBehavior={backdropPressBehavior} />
    ),
    [backdropPressBehavior],
  );

  const isProductCategoriesEmpty = productCategories.length === 0;

  useEffect(() => {
    if (currentRestaurant && currentRestaurant.id) {
      (async () => await initialFetchData())();
    }

    return () => {
      restaurantStore.saveProductCategories([]);
      restaurantStore.saveProducts([]);
      restaurantStore.setCurrentProductCategory(initialProductCategory);
    };
  }, [currentRestaurant, initialFetchData, restaurantStore]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (cartStore.products.length > 0) {
          Alert.alert('Are you sure to go back? Cart will be cleaned.', '', [
            {
              text: 'No',
              onPress: () => {
                console.log('Cancel Pressed');
              },
              style: 'cancel',
            },
            {
              text: 'Yes, go back',
              onPress: () => {
                console.log('OK Pressed');
                cartStore.reset();
                navigation.goBack();
              },
            },
          ]);

          return true;
        } else {
          navigation.goBack();
          return true;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      navigation.setOptions({
        headerLeft: () => (
          <HeaderBackButton
            onPress={() => {
              onBackPress();
            }}
          />
        ),
      });

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [cartStore, navigation]),
  );

  return (
    <View style={styles.container}>
      <Image
        source={{uri: currentRestaurant.imageUrl || imageUrl}}
        style={styles.image}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <BottomSheetFlatList
          data={products}
          ListHeaderComponent={
            <View style={styles.header}>
              <View style={styles.restaurantInfo}>
                <RestaurantInfo
                  name={currentRestaurant.name}
                  address={currentRestaurant.address}
                />
              </View>
              <TagTabs
                activeId={currentProductCategory.id}
                dataKey={'id'}
                onChange={onTabChange}
                data={productCategories}
              />
            </View>
          }
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
          ListEmptyComponent={
            <>
              {isProductsLoading ? (
                <Loader />
              ) : (
                <Empty
                  text={
                    isProductCategoriesEmpty
                      ? productsEmptyTexts.emptyProductCategories
                      : productsEmptyTexts.emptyProducts
                  }
                  buttonText={
                    isProductCategoriesEmpty
                      ? productsEmptyTexts.buttonText
                      : null
                  }
                  onClick={() => navigation.goBack()}
                />
              )}
            </>
          }
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={contentContainerStyle}
        />
      </BottomSheet>
      {isCartFilled && !isProductSheetVisible ? (
        <Footer
          style={[
            styles.cart,
            bottomInset ? {paddingBottom: bottomInset} : null,
          ]}
          onLayout={({layout}) => setFooterLayout(layout)}>
          <Price
            currencyPosition={currentCurrencyPosition}
            currency={currentCurrency}
            price={cartStore.cartTotal.toString()}
            style={cartStyles.price}
          />
          <Button
            text={'Go to cart'}
            color={color.brightRed}
            onClick={() => navigation.navigate(routesNames.cart)}
            textStyle={cartStyles.buttonText}
            fullWidth={true}
          />
        </Footer>
      ) : null}
      <BottomSheet
        ref={productBottomSheetRef}
        index={0}
        snapPoints={productSnapPoints}
        onChange={handleProductSheetChanges}
        backdropComponent={renderBackdrop}>
        <ProductInformation
          close={() => {
            productBottomSheetRef.current.snapTo(0);
          }}
        />
      </BottomSheet>
    </View>
  );
});
