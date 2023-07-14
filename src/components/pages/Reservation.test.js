import { render, screen, waitFor } from '@testing-library/react';
import { initializeTimes } from '../Main';
import { Reservation } from './Reservation';



test('Render the booking form heading',async()=>{
  render(<Reservation/>);
//   const times = screen.getByLabelText('Choose time');
//   expect(times).toHaveFormValues({initializeTimes});

 expect(screen.getAllByRole('option').length).toBe(initializeTimes.length)
});
