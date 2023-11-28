import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './index';

it('renders correctly', () => {
  const tree = renderer.create(<Footer children={''} />).toJSON();
  expect(tree).toMatchSnapshot();
});
