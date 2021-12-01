import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

const navbar = document.getElementById('navbar');

const tree = renderer.create(
  <MemoryRouter>
    <Header />
  </MemoryRouter>,
).toJSON();

it('Header UI renders as expected, we have the logo, quote, calculator and home links', () => {
  expect(tree).toMatchSnapshot();
});

it('The header UI accepts the user\'s inputs and highlights the clicked link - click in quote and that will be highlighted', () => {
  userEvent.click(screen.getByText(/Quote/i));

  expect(navbar.secondChild).toHaveClass('highlight');
});
