import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './index';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Counter decrement={jest.fn()} increment={jest.fn()} quantity={1} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
