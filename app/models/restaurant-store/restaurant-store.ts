import {applySnapshot, Instance, SnapshotOut, types} from 'mobx-state-tree';
import {
  RestaurantSnapshot,
  RestaurantModel,
  ProductCategory,
} from '../restaurant/restaurant';
import {withEnvironment} from '../extensions/with-environment';
import Restaurant from '../../api/restaurant';
import {flow} from 'mobx-state-tree';
import {ProductModel} from '../product/product';
import {
  RestaurantCategoryModel,
  RestaurantCategorySnapshot,
} from '../restaurant-category/restaurant-category';

export const initialProductCategory = {
  id: '',
  name: '',
};

const initialCurrentRestaurant = {
  id: '',
  name: '',
  address: '',
  imageUrl: '',
};

export const initialCurrentRestaurantCategory = {
  id: '',
  name: '',
};

const initialCurrentProduct = {
  categoryId: '',
  discountPrice: '',
  id: '',
  name: '',
  photoUrl: '',
  price: '',
  description: '',
};

export const RestaurantStoreModel = types
  .model('RestaurantStore')
  .props({
    currentRestaurant: types.optional(
      RestaurantModel,
      initialCurrentRestaurant,
    ),
    currentProduct: types.optional(ProductModel, initialCurrentProduct),
    currentProductCategory: types.optional(
      ProductCategory,
      initialProductCategory,
    ),
    restaurants: types.optional(types.array(RestaurantModel), []),
    restaurantCategories: types.optional(
      types.array(RestaurantCategoryModel),
      [],
    ),
    currentRestaurantCategory: types.optional(
      RestaurantCategoryModel,
      initialCurrentRestaurantCategory,
    ),
    products: types.optional(types.array(ProductModel), []),
    productCategories: types.optional(types.array(ProductCategory), []),
  })
  .extend(withEnvironment)
  .actions(self => ({
    saveRestaurants: (restaurantSnapshots: RestaurantSnapshot[]) => {
      self.restaurants.replace(restaurantSnapshots);
    },
    saveRestaurantCategories: (
      restaurantCategoriesSnapshots: RestaurantCategorySnapshot[],
    ) => {
      self.restaurantCategories.replace(restaurantCategoriesSnapshots);
    },
    saveProducts: (productSnapshots: any) => {
      self.products.replace(productSnapshots);
    },
    saveProductCategories: (productCategoriesSnapshots: any) => {
      self.productCategories.replace(productCategoriesSnapshots);
    },
  }))
  .actions(self => ({
    reset: function () {
      applySnapshot(self, {});
    },
    getRestaurantCategories: flow(function* () {
      try {
        const data = yield Restaurant.getRestaurantCategories();

        self.saveRestaurantCategories(data);
      } catch (e) {
        console.log('e in getRestaurantCategories', e);
      }
    }),
    getRestaurants: flow(function* (categoryId: string) {
      try {
        const data = yield Restaurant.getRestaurants(categoryId);

        self.saveRestaurants(data);
      } catch (e) {
        console.log('e in getRestaurants', e);
      }
    }),
    getProducts: flow(function* (restaurantId: string, categoryId: string) {
      try {
        const data = yield Restaurant.getProducts(restaurantId, categoryId);

        self.saveProducts(data);
      } catch (e) {
        console.log('e in getProducts', e);
      }
    }),
    getProductCategories: flow(function* (
      restaurantId: string,
      callback?: () => void,
    ) {
      try {
        const data = yield Restaurant.getProductCategories(restaurantId);

        self.saveProductCategories(data);

        if (callback) {
          callback();
        }
      } catch (e) {
        console.log('e in getProductCategories', e);
      }
    }),
    setCurrentRestaurant: (restaurant: any) => {
      applySnapshot(self.currentRestaurant, restaurant);
    },
    setCurrentRestaurantCategory: (restaurantCategory: any) => {
      applySnapshot(self.currentRestaurantCategory, restaurantCategory);
    },
    setCurrentProduct: (product: any) => {
      applySnapshot(self.currentProduct, product);
    },
    setCurrentProductCategory: (productCategory: any) => {
      applySnapshot(self.currentProductCategory, productCategory);
    },
  }));

type RestaurantStoreType = Instance<typeof RestaurantStoreModel>;
export interface RestaurantStore extends RestaurantStoreType {}
type RestaurantStoreSnapshotType = SnapshotOut<typeof RestaurantStoreModel>;
export interface RestaurantStoreSnapshot extends RestaurantStoreSnapshotType {}
export const createRestaurantStoreDefaultModel = () =>
  types.optional(RestaurantStoreModel, {});
