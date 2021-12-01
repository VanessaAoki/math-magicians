import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorPage from '../pages/CalculatorPage';

it('Home renders as expected', () => {
  const tree = renderer.create(<CalculatorPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
