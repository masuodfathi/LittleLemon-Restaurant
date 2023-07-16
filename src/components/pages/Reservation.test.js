import { render, screen, waitFor, within } from "@testing-library/react";
import { Reservation } from "./Reservation";
import { initializeTimes } from "../Main";
import { act } from 'react-dom/test-utils';
import user from '@testing-library/user-event';

let myTimes = [
    { time: "9:00" },
    { time: "10:00" },
    { time: "11:00" },
    { time: "12:00" },
    { time: "16:00" },
    { time: "17:00" },
  ];
test("number of availavle times", async () => {
  render(<Reservation availableTimes={initializeTimes} />);
  const time = await screen.findByLabelText(/choose time/i);
  expect(time).toBeInTheDocument();
  //user.selectOptions(time,within(time).getByRole('option',{name:'12:00'}));
  expect(within(time).getAllByRole("option").length).toBe(9);
});
test("number of availavle times", async () => {
  render(<Reservation availableTimes={myTimes} />);
  const time = await screen.findByLabelText(/choose time/i);
  expect(time).toBeInTheDocument();
  //user.selectOptions(time,within(time).getByRole('option',{name:'12:00'}));
  expect(within(time).getAllByRole("option").length).toBe(6);
});
test("number of availavle times", async () => {
  myTimes = [{ time: "9:00" }, { time: "10:00" }];
  render(<Reservation availableTimes={myTimes} />);
  const time = await screen.findByLabelText(/choose time/i);
  expect(time).toBeInTheDocument();
  //user.selectOptions(time,within(time).getByRole('option',{name:'12:00'}));
  expect(within(time).getAllByRole("option").length).toBe(2);
});

test('is confirm page appear after submit reservation click ',async ()=>{
    render(<Reservation availableTimes={initializeTimes}/>);
  
      const date = screen.getByLabelText(/choose date/i);
      //user.type(date,'12-12-2023');
      expect(date).toBeInTheDocument();
  
      const time = await screen.findByLabelText(/choose time/i);
      expect(time).toBeInTheDocument();
      act(()=>{
        user.selectOptions(time,within(time).getByRole('option',{name:'12:00'}));
      })
  
      const number = screen.getByRole('spinbutton', {
        name: /number of guests/i
      });
      //user.type(number,'6');
      expect(number).toBeInTheDocument();
  
      act(()=>{
        const occasion = screen.getByLabelText(/occasion/i);
      })
  
      //user.selectOptions(occasion,within(occasion).getByRole('option',{name:'Birthday'}));
      expect(occasion).toBeInTheDocument();
  
      const makeReservation = screen.getByRole('button', {
        name: /make your reservation/i
      });
      //user.click(makeReservation);
      expect(makeReservation).toBeInTheDocument();
  
      // await waitFor(()=>{
      //   expect(onSubmit).toHaveBeenCalledTimes(1);
      // });
      // expect(onSubmit).toHaveBeenCalledWith({lazy:true});
  //   expect(times).toHaveFormValues({initializeTimes});

  });

  ////////////////////////////////////////Mock Browser Router///////////////////////////////
// const Mocktest =({availableTimes})=>{
//   return(
//     <BrowserRouter>
//       <Reservation availableTimes={availableTimes}/>
//     </BrowserRouter>
//   )
// }