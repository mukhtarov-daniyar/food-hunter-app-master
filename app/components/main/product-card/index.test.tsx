import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard from './index';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ProductCard
        price={'price'}
        productId={'productId'}
        title={'title'}
        url={'title'}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
