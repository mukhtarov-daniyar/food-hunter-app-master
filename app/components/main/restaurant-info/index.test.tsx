import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import RestaurantInfo from './index';

it('renders correctly', () => {
  const tree = renderer.create(<RestaurantInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});
