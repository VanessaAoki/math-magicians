import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

const navbar = document.getElementById('navbar');

const render = (ui) => {
  window.history.pushState({}, 'Test page');

  return rtlRender(ui);
};

it('Header UI renders as expected', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('The header UI accepts the user\'s inputs and highlights the clicked link, click in quote and that will be highlighted', () => {
  render(<Header />);
  userEvent.click(screen.getByText(/Quote/i));

  expect(navbar.secondChild).toHaveClass('highlight');
});
