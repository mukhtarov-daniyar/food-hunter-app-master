import {Instance, SnapshotOut, types} from 'mobx-state-tree';
import {CartProductModel} from '../cart/cart';

const StatusHistoryItem = types.model({
  id: types.string,
});

export const OrderModel = types
  .model('Order')
  .props({
    clientId: types.string,
    created: types.string,
    id: types.string,
    items: types.optional(types.array(CartProductModel), []),
    method: types.string,
    orderId: types.string,
    price: types.string,
    restaurantId: types.string,
    statusHistory: types.optional(types.array(StatusHistoryItem), []),
    timeSlot: types.string,
  })
  .actions(self => ({
    updateOrder(id: any, value: any) {
      //@ts-ignore
      self[id] = value;
    },
  }));

type OrderType = Instance<typeof OrderModel>;
export interface Order extends OrderType {}
type OrderSnapshotType = SnapshotOut<typeof OrderModel>;
export interface OrderSnapshot extends OrderSnapshotType {}

export const createOrderDefaultModel = () =>
  // @ts-ignore
  types.optional(OrderModel, {});
