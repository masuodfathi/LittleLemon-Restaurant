import { render, screen, waitFor, within } from '@testing-library/react';
import App from './App';
import BookingForm from './components/layout/BookingForm';
import { Main } from './components/Main';
import { Reservation } from './components/pages/Reservation';
import user from '@testing-library/user-event';
import { describe } from 'mocha';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Chicago");
  expect(linkElement).toBeInTheDocument();
});

// test('Render the booking form heading',async()=>{
//   render(<Reservation/>);
//   const times = await screen.findByLabelText('Choose time');
//   expect(times).toHaveFormValues({initializeTimes});
// expect(screen.getAllByRole('option').length).toBe(9)
// });

test('is confirm page appear after submit reservation click ',async ()=>{
  render(<Reservation/>);
    const date = screen.getByLabelText(/choose date/i);
    user.type(date,'12-12-2023');

    const time =await screen.findByLabelText(/choose time/i);
    user.selectOptions(time,within(time).getByRole('option',{name:'12:00'}));

    const number = screen.getByRole('spinbutton', {
      name: /number of guests/i
    });
    user.type(number,'6');

    const occasion = screen.getByLabelText(/occasion/i);
    user.selectOptions(occasion,within(occasion).getByRole('option',{name:'Birthday'}));

    const makeReservation = screen.getByRole('button', {
      name: /make your reservation/i
    });
    user.click(makeReservation);

    await waitFor(()=>{
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
    expect(onSubmit).toHaveBeenCalledWith({lazy:true});
//   expect(times).toHaveFormValues({initializeTimes});

});