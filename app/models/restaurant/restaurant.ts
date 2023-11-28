import {Instance, SnapshotOut, types} from 'mobx-state-tree';

export const RestaurantModel = types.model('Restaurant').props({
  id: types.string,
  name: types.optional(types.string, ''),
  address: types.optional(types.string, ''),
  imageUrl: types.optional(types.string, ''),
});

export const ProductCategory = types.model('ProductCategory').props({
  id: types.string,
  name: types.string,
});

type RestaurantType = Instance<typeof RestaurantModel>;
export interface Restaurant extends RestaurantType {}
type RestaurantSnapshotType = SnapshotOut<typeof RestaurantModel>;
export interface RestaurantSnapshot extends RestaurantSnapshotType {}

export const createRestaurantDefaultModel = () =>
  // @ts-ignore
  types.optional(RestaurantModel, {});
