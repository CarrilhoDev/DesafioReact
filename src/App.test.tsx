import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders desafio', () => {
  render(<App />);
  const textElement = screen.getByText(/desafio/i);
  expect(textElement).toBeInTheDocument();
});
