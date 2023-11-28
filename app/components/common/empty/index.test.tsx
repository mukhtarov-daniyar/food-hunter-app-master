import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Empty from './index';

it('renders correctly', () => {
  const tree = renderer.create(<Empty text={'text'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
