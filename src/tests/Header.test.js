import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

const tree = renderer.create(
  <MemoryRouter>
    <Header />
  </MemoryRouter>,
).toJSON();

it('Header UI renders as expected, we have the logo, quote, calculator and home links', () => {
  expect(tree).toMatchSnapshot();
});
