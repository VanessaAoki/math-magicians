import { render as rtlRender, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

const render = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return rtlRender(ui, { wrapper: Router });
};

describe('Test header UI', () => {
  test('When user click on the Home link, it should be highlighted', () => {
    render(<App />);
    userEvent.click(screen.getByText(/Home/i));

    expect(screen.getByText(/Home/i)).toHaveClass('highlight');
  });

  test('When user click on the Quote link, it should be highlighted and Home shouldn\'t be highlighted', () => {
    render(<App />);
    userEvent.click(screen.getByText(/Quote/i));

    expect(screen.getByText(/Quote/i)).toHaveClass('highlight');
    expect(screen.getByText(/Home/i)).not.toHaveClass('highlight');
  });
});
