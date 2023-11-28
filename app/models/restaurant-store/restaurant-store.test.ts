import {RestaurantStoreModel} from './restaurant-store';

test('can be created', () => {
  const instance = RestaurantStoreModel.create({});

  expect(instance).toBeTruthy();
});
