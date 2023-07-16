import { render, screen } from '@testing-library/react';
import App from './App';


test('Render the header tag',()=>{
  render(<App/>);
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument;
});

test('Render the main tag',()=>{
  render(<App/>);
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument;
});

test('Render the footer tag',()=>{
  render(<App/>);
  const footer = screen.getByRole('contentinfo');
  expect(footer).toBeInTheDocument;
});