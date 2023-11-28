import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Button
        color={'color'}
        onClick={jest.fn()}
        text={'text'}
        textStyle={'textStyle'}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
