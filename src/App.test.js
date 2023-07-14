import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/layout/BookingForm';
import { Main } from './components/Main';
import { Reservation } from './components/pages/Reservation';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Chicago");
  expect(linkElement).toBeInTheDocument();
});

test('Render the booking form heading',async()=>{
  render(<Reservation/>);
//   const times = screen.getByLabelText('Choose time');
//   expect(times).toHaveFormValues({initializeTimes});
expect(screen.getAllByRole('option').length).toBe(9)
});