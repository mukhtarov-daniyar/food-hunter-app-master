import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TagTabs from './index';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <TagTabs
        activeId={'activeId'}
        data={[]}
        dataKey={'dataKey'}
        onChange={jest.fn()}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
