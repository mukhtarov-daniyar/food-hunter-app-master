import {Instance, SnapshotOut, types} from 'mobx-state-tree';

export const ProductModel = types.model('Product').props({
  categoryId: types.string,
  discountPrice: types.string,
  id: types.string,
  name: types.string,
  photoUrl: types.string,
  price: types.string,
  description: types.string,
});

type ProductType = Instance<typeof ProductModel>;
export interface Product extends ProductType {}
type ProductSnapshotType = SnapshotOut<typeof ProductModel>;
export interface ProductSnapshot extends ProductSnapshotType {}

export const createProductDefaultModel = () =>
  // @ts-ignore
  types.optional(ProductModel, {});
