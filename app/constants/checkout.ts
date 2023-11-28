import {INPUT_TYPES} from './components';
import {FormData, OptionsData} from '../types/common';

const deliveryMethodsTypes = {
  pickup: 'pickup',
  delivery: 'delivery',
  selfDelivery: 'selfDelivery',
  freeDelivery: 'freeDelivery',
};

export const deliveryMethodsNames = {
  [deliveryMethodsTypes.pickup]: 'Pickup',
  [deliveryMethodsTypes.delivery]: 'Delivery',
  [deliveryMethodsTypes.selfDelivery]: 'Self Delivery',
  [deliveryMethodsTypes.freeDelivery]: 'Free Delivery',
};

export const deliveryMethods: OptionsData = [
  {
    text: deliveryMethodsNames[deliveryMethodsTypes.pickup],
    value: deliveryMethodsTypes.pickup,
  },
  {
    text: deliveryMethodsNames[deliveryMethodsTypes.delivery],
    value: deliveryMethodsTypes.delivery,
  },
  {
    text: deliveryMethodsNames[deliveryMethodsTypes.selfDelivery],
    value: deliveryMethodsTypes.selfDelivery,
  },
  {
    text: deliveryMethodsNames[deliveryMethodsTypes.freeDelivery],
    value: deliveryMethodsTypes.freeDelivery,
  },
];

const fieldsKeys = {
  name: 'name',
  address: 'address',
  timeSlot: 'timeSlot',
  method: 'method',
  email: 'email',
  phone: 'phone',
};

export const blocksKeys = {
  client: 'client',
  order: 'order',
};

export const checkoutFormData: FormData = [
  {
    id: blocksKeys.client,
    name: '',
    rows: [
      [fieldsKeys.name],
      [fieldsKeys.phone],
      [fieldsKeys.email],
      [fieldsKeys.address],
    ],
    attributes: {
      [fieldsKeys.name]: {
        id: fieldsKeys.name,
        type: INPUT_TYPES.STRING,
        label: 'Name',
        defaultValue: '',
        placeholder: 'Your name',
        editable: true,
        required: true,
      },
      [fieldsKeys.phone]: {
        id: fieldsKeys.phone,
        type: INPUT_TYPES.STRING,
        label: 'Phone',
        defaultValue: '',
        placeholder: 'Your phone',
        editable: true,
        required: true,
      },
      [fieldsKeys.email]: {
        id: fieldsKeys.email,
        type: INPUT_TYPES.STRING,
        label: 'Email',
        defaultValue: '',
        placeholder: 'Your email',
        editable: true,
        required: true,
      },
      [fieldsKeys.address]: {
        id: fieldsKeys.address,
        type: INPUT_TYPES.STRING,
        label: 'Address',
        defaultValue: '',
        placeholder: 'Home Address',
        editable: true,
        required: true,
      },
    },
    fields: {},
  },
  {
    id: blocksKeys.order,
    name: '',
    rows: [[fieldsKeys.method]],
    attributes: {
      [fieldsKeys.method]: {
        id: fieldsKeys.method,
        type: INPUT_TYPES.SELECT,
        label: 'Delivery method',
        defaultValue: '',
        placeholder: 'Select',
        editable: true,
        required: true,
        meta: {
          options: deliveryMethods,
        },
      },
    },
    fields: {},
  },
];
