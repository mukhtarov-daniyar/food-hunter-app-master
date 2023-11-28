import {Instance, SnapshotOut, types} from 'mobx-state-tree';
import {Quantity} from '../../components/common/counter';
import {ProductModel} from '../product/product';

export const CartProductModel = types
  .model('CartProduct')
  .props({
    product: ProductModel,
    quantity: types.number,
  })
  .actions(self => ({
    updateQuantity(quantity: Quantity) {
      self.quantity = quantity;
    },
  }));

type CartProductType = Instance<typeof CartProductModel>;
export interface CartProduct extends CartProductType {}
type CartProductSnapshotType = SnapshotOut<typeof CartProductModel>;
export interface CartProductSnapshot extends CartProductSnapshotType {}

export const createCartProductDefaultModel = () =>
  // @ts-ignore
  types.optional(CartProductModel, {});
