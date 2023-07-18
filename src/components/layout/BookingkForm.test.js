import {render,screen,fireEvent} from '@testing-library/react';
import {BookingForm} from './BookingForm';
import user from '@testing-library/user-event'
import {Times} from '../Main'
import { act } from 'react-dom/test-utils';

test('test date field existance',()=>{
    render(<BookingForm />);
    const date = screen.getByLabelText(/Choose date/i);
    expect(date).toBeInTheDocument();
});

test('test Choose time field existance',()=>{
    render(<BookingForm />);
    const time = screen.getByLabelText(/Choose time/i);
    expect(time).toBeInTheDocument();
});

test('test number field existance',()=>{
    render(<BookingForm />);
    const number = screen.getByLabelText(/number of guests/i);
    expect(number).toBeInTheDocument();
});

test('test occasion field existance',()=>{
    render(<BookingForm />);
    const occasion = screen.getByLabelText(/occasion/i);
    expect(occasion).toBeInTheDocument();
});

test('test reservation button existance',()=>{
    render(<BookingForm />);
    const button = screen.getByRole('button',{name:/make your reservation/i})
    expect(button).toBeInTheDocument();
});

test('test number field set value',()=>{
    render(<BookingForm />);
    const number = screen.getByLabelText(/number of guests/i);
    fireEvent.change(number,{target:{value:'3'}})
    expect(number.value).toBe("3")
});
test('submit button shoud be disable before all required field have a value',()=>{
    render(<BookingForm />);
    const button = screen.getByRole('button',{name:/make your reservation/i});
    expect(button).toBeDisabled();
})
test('submit button shoud not be disable after all required field have a value',()=>{
    const availableTimes = [
        { time: "9:00" },
        { time: "10:00" },
        { time: "11:00" },
        { time: "12:00" },
    ]
    render(<BookingForm availableTimes={availableTimes} />);
    const date = screen.getByLabelText(/Choose date/i);
    const time = screen.getByLabelText(/Choose time/i);
    const number = screen.getByLabelText(/number of guests/i);
    const occasion = screen.getByLabelText(/occasion/i);
    const button = screen.getByRole('button',{name:/make your reservation/i});

    act(()=>{
        fireEvent.change(number,{target:{value:'3'}})
        fireEvent.change(occasion,{target: { value: "Birthday" }});
        fireEvent.mouseDown(date);
        fireEvent.change(date, { target: { value: '2020-01-15' } });
        user.selectOptions(time,["12:00"]);
    })

    expect(date.value).toBe('2020-01-15');
    expect(time.value).toBe("12:00")
    expect(number.value).toBe('3');
    expect(screen.getByRole('option', {name: 'Birthday'}).selected).toBe(true)
    expect(button).not.toBeDisabled();
})



// test('test reservation button click',()=>{
//     render(<BookingForm />);
//     const number = screen.getByLabelText(/number of guests/i);
//     fireEvent.change(number,{target:{value:'3'}})
//     const button = screen.getByRole('button',{name:/make your reservation/i})
//     fireEvent.click(button)
//     expect(number.value).toBe("");
// });