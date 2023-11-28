import {RestaurantModel} from './restaurant';

test('can be created', () => {
  const instance = RestaurantModel.create({
    id: '1',
    name: 'Rick Sanchez',
    address: 'address',
  });

  expect(instance).toBeTruthy();
});
