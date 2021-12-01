import React from 'react';
import renderer from 'react-test-renderer';
import QuotePage from '../pages/QuotePage';

it('Home renders as expected', () => {
  const tree = renderer.create(<QuotePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
