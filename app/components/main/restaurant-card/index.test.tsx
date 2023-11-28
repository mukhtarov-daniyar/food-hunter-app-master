import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import RestaurantCard from './index';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <RestaurantCard
        address={'address'}
        description={'description'}
        onClick={jest.fn()}
        restaurantId={'restaurantId'}
        title={'title'}
        url={'url'}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
