import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../pages/HomePage';

it('Home renders as expected', () => {
  const tree = renderer.create(<HomePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
