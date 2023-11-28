import React, {useEffect, useState} from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import {useStores} from '../../models';
import {observer} from 'mobx-react-lite';
import RestaurantCard from '../../components/main/restaurant-card';
import styles from './styles';
import TagTabs from '../../components/common/tag-tabs';
import BaseLoader from '../../components/common/base-loader';
import {color} from '../../theme/color';
import {useNavigation} from '@react-navigation/native';
import {routesNames} from '../../navigators';

export const Loader = () => (
  <View style={styles.loaderContainer}>
    <BaseLoader />
  </View>
);

export const Home = observer(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentLoading, setIsContentLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const {restaurantStore, cartStore} = useStores();
  const {restaurants, restaurantCategories, currentRestaurantCategory} =
    restaurantStore;

  const navigation = useNavigation();

  const fetchRestaurants = async ({categoryId}: {categoryId: string}) => {
    try {
      setIsContentLoading(true);
      await restaurantStore.getRestaurants(categoryId);
      setIsContentLoading(false);
    } catch (e) {
      console.log('e in fetchRestaurants', e);
    }
  };

  const fetchRestaurantCategories = async () => {
    try {
      await restaurantStore.getRestaurantCategories();
      restaurantStore.setCurrentRestaurantCategory(restaurantCategories[0]);
    } catch (e) {
      console.log('e in fetchRestaurantCategories', e);
    }
  };
  const onRefresh = async () => {
    try {
      setIsRefreshing(true);

      await fetchRestaurants({categoryId: currentRestaurantCategory.id});
      setIsRefreshing(false);
    } catch (e) {
      console.log('e in onRefresh', e);
    }
  };

  const restaurantOnClick = ({restaurantId}: any) => {
    navigation.navigate(routesNames.products);

    const targetRestaurant = restaurants.find(
      restaurant => restaurant.id === restaurantId,
    );

    restaurantStore.setCurrentRestaurant(targetRestaurant);
  };

  const loadData = async () => {
    try {
      setIsContentLoading(true);
      await fetchRestaurantCategories();

      setIsLoading(false);

      await fetchRestaurants({categoryId: restaurantCategories[0].id});

      setIsContentLoading(false);
    } catch (e) {
      console.log('e in loadData', e);
    }
  };

  const onTabChange = async ({item}: {item: any}) => {
    try {
      restaurantStore.setCurrentRestaurantCategory(item);

      await fetchRestaurants({
        categoryId: currentRestaurantCategory.id,
      });
    } catch (e) {
      console.log('e in onTabChange', e);
    }
  };

  useEffect(() => {
    restaurantStore.reset();
    cartStore.reset();

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={styles.innerContainer}>
          <TagTabs
            activeId={currentRestaurantCategory.id}
            dataKey={'id'}
            onChange={onTabChange}
            data={restaurantCategories}
          />
          {isContentLoading ? (
            <Loader />
          ) : (
            <FlatList
              refreshing={isRefreshing}
              data={restaurants}
              renderItem={({item}) => (
                <RestaurantCard
                  key={item.id}
                  restaurantId={item.id}
                  title={item.name || null}
                  description={item.name || null}
                  address={item.address || null}
                  url={item.imageUrl || null}
                  onClick={restaurantOnClick}
                />
              )}
              keyExtractor={() => Math.random().toString()}
              contentContainerStyle={styles.list}
              refreshControl={
                <RefreshControl
                  refreshing={isRefreshing}
                  onRefresh={onRefresh}
                  tintColor={color.brightRed}
                  colors={[color.brightRed]}
                />
              }
            />
          )}
        </View>
      )}
    </View>
  );
});
