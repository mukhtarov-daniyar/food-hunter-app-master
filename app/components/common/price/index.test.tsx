import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Price from './index';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Price
        currency={'currency'}
        currencyPosition={'currencyPosition'}
        price={'price'}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
