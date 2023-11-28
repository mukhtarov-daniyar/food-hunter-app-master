import {Instance, SnapshotOut, types} from 'mobx-state-tree';

export const RestaurantCategoryModel = types
  .model('Restaurant Category')
  .props({
    id: types.string,
    name: types.optional(types.string, ''),
  });

type RestaurantCategoryType = Instance<typeof RestaurantCategoryModel>;
export interface RestaurantCategory extends RestaurantCategoryType {}
type RestaurantCategorySnapshotType = SnapshotOut<
  typeof RestaurantCategoryModel
>;
export interface RestaurantCategorySnapshot
  extends RestaurantCategorySnapshotType {}

export const createRestaurantCategoryDefaultModel = () =>
  // @ts-ignore
  types.optional(RestaurantCategoryModel, {});
