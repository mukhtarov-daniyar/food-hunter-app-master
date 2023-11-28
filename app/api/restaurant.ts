import firestore from '@react-native-firebase/firestore';

function Restaurant() {}

Restaurant.getRestaurants = async (categoryId: string) => {
  const data: any = [];

  const getSnapshot = async () =>
    await firestore()
      .collection('restaurants')
      .where('categoryIds', 'array-contains', categoryId)
      .get();

  const snapshot = await getSnapshot();

  snapshot.forEach((doc: any) => {
    data.push({...doc.data(), id: doc.id});
  });

  return data;
};

Restaurant.getRestaurantCategories = async () => {
  const data: any = [];

  const getSnapshot = async () =>
    await firestore().collection('restaurantCategories').get();

  const snapshot = await getSnapshot();

  snapshot.forEach((doc: any) => {
    data.push({...doc.data(), id: doc.id});
  });

  return data;
};

Restaurant.getProducts = async (restaurantId?: string, categoryId?: string) => {
  const data: any = [];

  const getSnapshot = async () =>
    await firestore()
      .collection('restaurants')
      .doc(restaurantId)
      .collection('products')
      .where('categoryId', '==', categoryId)
      .get();

  const snapshot = await getSnapshot();

  snapshot.forEach((doc: any) => {
    data.push({...doc.data(), id: doc.id});
  });

  return data;
};

Restaurant.getProductCategories = async (restaurantId?: string) => {
  const data: any = [];

  const getSnapshot = async () =>
    await firestore()
      .collection('restaurants')
      .doc(restaurantId)
      .collection('categories')
      .get();

  const snapshot = await getSnapshot();

  snapshot.forEach((doc: any) => {
    data.push({...doc.data(), id: doc.id});
  });

  return data;
};

export default Restaurant;
