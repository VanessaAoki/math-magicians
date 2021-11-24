import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

const render = (ui) => {
  window.history.pushState({}, 'Test page');

  return rtlRender(ui);
};

it('Calculator UI renders as expected', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('The calculator UI accepts the user\'s inputs and displays it, click on 4, then 3 and it should display 43', () => {
  render(<Calculator />);
  userEvent.click(screen.getByText(/4/i));
  userEvent.click(screen.getByText(/3/i));

  expect(screen.getByText(/43/i)).toBeInTheDocument();
});

it('The calculator UI and the logic are integrated, do 7 times 8 and it should display 56', () => {
  render(<Calculator />);
  userEvent.click(screen.getByText(/7/i));
  userEvent.click(screen.getByText(/X/i));
  userEvent.click(screen.getByText(/8/i));
  userEvent.click(screen.getByText(/=/i));

  expect(screen.getByText(/56/i)).toBeInTheDocument();
});
