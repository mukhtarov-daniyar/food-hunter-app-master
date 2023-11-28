import {RestaurantCategoryModel} from './restaurant-category';

test('can be created', () => {
  const instance = RestaurantCategoryModel.create({
    id: '1',
    name: 'Rick Sanchez',
  });

  expect(instance).toBeTruthy();
});
