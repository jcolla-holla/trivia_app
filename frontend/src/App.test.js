import React from 'react';
import { render } from '@testing-library/react';
import MainPage from './components/main/main_page';

// A very basic frontend rendering test -- did the app successfully build/render the home page?
test('renders on page load', () => {
  const { getByText } = render(<MainPage />);
  const linkElement = getByText(/Welcome to TrustLayer Trivia/i);
  expect(linkElement).toBeInTheDocument();
});
