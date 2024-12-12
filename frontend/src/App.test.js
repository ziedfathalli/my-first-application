// eslint-disable-next-line import/no-unresolved
import { render, screen, } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // eslint-disable-next-line react/react-in-jsx-scope,react/jsx-filename-extension
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
