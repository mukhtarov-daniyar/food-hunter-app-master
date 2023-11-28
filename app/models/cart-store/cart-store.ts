import {
  applySnapshot,
  flow,
  Instance,
  SnapshotOut,
  types,
} from 'mobx-state-tree';
import {withEnvironment} from '../extensions/with-environment';
import {CartProduct, CartProductModel} from '../cart/cart';
import {values} from 'mobx';
import Cart from '../../api/cart';
import {Order, OrderModel, OrderSnapshot} from '../order/order';
import moment from 'moment';
import {ClientModel, ClientSnapshot} from '../client/client';
import Client from '../../api/client';

const initialOrder: OrderSnapshot = {
  clientId: '',
  created: '',
  id: '',
  items: [],
  method: 'delivery',
  orderId: '',
  price: '',
  restaurantId: '',
  statusHistory: [],
  timeSlot: '',
};

const initialClient: ClientSnapshot = {
  address: '',
  phone: '',
  email: '',
  id: '',
  name: '',
};

export const CartStoreModel = types
  .model('CartStore')
  .props({
    products: types.optional(types.array(CartProductModel), []),
    order: types.optional(OrderModel, initialOrder),
    client: types.optional(ClientModel, initialClient),
  })
  .extend(withEnvironment)
  .views(self => ({
    get cartTotal() {
      console.log('>>>should updateCartTotal');

      return values(self.products).reduce(
        (acc, product) =>
          acc + Number(product.product.price) * product.quantity,
        0,
      );
    },
  }))
  .actions(self => ({
    reset: function () {
      applySnapshot(self, {});
    },
    addProductToCart: (product: any, quantity: number) => {
      self.products.push({product: {...product}, quantity});
    },
    removeProductFromCart(oldProduct: any) {
      const newProducts = self.products.filter(
        product => product !== oldProduct,
      );

      applySnapshot(self.products, newProducts);
    },
    clearCart() {
      applySnapshot(self.products, []);
    },
    clearOrder() {
      applySnapshot(self.order, initialOrder);
      applySnapshot(self.client, initialClient);
    },
    createClient: flow(function* (
      client: any,
      callback: ({clientId}: {clientId: string}) => void,
    ) {
      try {
        const data = yield Client.createClient(client);

        const clientId = data.id;
        console.log('clientId in createClient', clientId);

        callback({clientId});
      } catch (e) {
        console.log('e in createClient', e);
      }
    }),
    updateClient: flow(function* (
      client: any,
      callback: ({clientId}: {clientId: string}) => void,
    ) {
      try {
        console.log('>>client', client);

        yield Client.updateClient(client.id, client);

        callback({clientId: client.id});
      } catch (e) {
        console.log('e in updateClient', e);
      }
    }),
    createOrder: flow(function* (order: Order, callback: () => void) {
      try {
        const getPriceSum = ({items}: {items: CartProduct[]}) => {
          let sum = 0;

          items.forEach(item => {
            sum += Number(item.quantity) * Number(item.product.price);
          });

          return sum;
        };

        const newOrder: Order = {
          ...order,
          created: moment().unix().toString(),
          items: self.products,
          price: getPriceSum({items: self.products}).toString(),
        };
        const data = yield Cart.createOrder(newOrder);
        const orderId = data.id;

        yield Cart.updateOrder(orderId, {
          ...newOrder,
          id: orderId,
          orderId,
        });

        if (callback) {
          callback();
        }
      } catch (e) {
        console.log('e in createOrder', e);
      }
    }),
  }));

type CartStoreType = Instance<typeof CartStoreModel>;
export interface CartStore extends CartStoreType {}
type CartStoreSnapshotType = SnapshotOut<typeof CartStoreModel>;
export interface CartStoreSnapshot extends CartStoreSnapshotType {}
export const createCartStoreDefaultModel = () =>
  types.optional(CartStoreModel, {});
