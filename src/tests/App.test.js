import { render as rtlRender, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

const render = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return rtlRender(ui, { wrapper: Router });
};

test('User should be in the home page', () => {
  render(<App />);
  expect(screen.getByText(/Welcome to our page!/i)).toBeInTheDocument();
});

test('User should be able to render the quotes page after clicking the quote link in the navbar', () => {
  render(<App />);
  userEvent.click(screen.getByText(/Quote/i));

  expect(screen.getByText(/Quote of the day/i)).toBeInTheDocument();
});

test('User should be able to render the calculator page after clicking the quote link in the navbar', () => {
  render(<App />);
  userEvent.click(screen.getByText(/Calculator/i));

  expect(screen.getByText(/do some math!/i)).toBeInTheDocument();
});
