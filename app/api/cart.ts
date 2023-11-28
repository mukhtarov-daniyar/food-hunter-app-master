import firestore from '@react-native-firebase/firestore';
import {Order} from '../models/order/order';

function Cart() {}

Cart.createOrder = async (object: Order) =>
  await firestore().collection('orders').add(object);

Cart.updateOrder = async (id: string, object: Order) =>
  await firestore().collection('orders').doc(id).set(object);

export default Cart;
