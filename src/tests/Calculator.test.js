import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('Calculator UI renders as expected', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
