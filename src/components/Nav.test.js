import { render, screen, waitFor, within } from '@testing-library/react';
import '../App.css';
import { BrowserRouter } from "react-router-dom";
import { Nav } from './Nav';

const Mocktest =()=>{
      return(
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      )
    }

test('test nav menu home ',()=>{
    render(<Mocktest/>);
    const home = screen.getAllByText(/home/i)[1];
    expect(home).toBeInTheDocument();
})
test('test nav menu home burgermenu',()=>{
    render(<Mocktest/>);
    const bergurhome = screen.getAllByText(/home/i)[0];
    expect(bergurhome).toBeInTheDocument()
})

test('test nav menu about ',()=>{
    render(<Mocktest/>);
    const home = screen.getAllByText(/about/i)[1];
    expect(home).toBeInTheDocument();
})
test('test nav menu about burgermenu',()=>{
    render(<Mocktest/>);
    const bergurhome = screen.getAllByText(/about/i)[0];
    expect(bergurhome).toBeInTheDocument();
})

test('test nav menu Menu ',()=>{
    render(<Mocktest/>);
    const home = screen.getAllByText(/Menu/i)[1];
    expect(home).toBeInTheDocument();
})
test('test nav menu Menu burgermenu',()=>{
    render(<Mocktest/>);
    const bergurhome = screen.getAllByText(/Menu/i)[0];
    expect(bergurhome).toBeInTheDocument();
})

test('test nav menu Reservation ',()=>{
    render(<Mocktest/>);
    const home = screen.getAllByText(/Reservation/i)[1];
    expect(home).toBeInTheDocument();
})
test('test nav menu Reservation burgermenu',()=>{
    render(<Mocktest/>);
    const bergurhome = screen.getAllByText(/Reservation/i)[0];
    expect(bergurhome).toBeInTheDocument();
})

test('test nav menu Order online ',()=>{
    render(<Mocktest/>);
    const home = screen.getAllByText(/Order online/i)[1];
    expect(home).toBeInTheDocument();
})
test('test nav menu Order online burgermenu',()=>{
    render(<Mocktest/>);
    const bergurhome = screen.getAllByText(/Order online/i)[0];
    expect(bergurhome).toBeInTheDocument();
})

test('test nav menu Login ',()=>{
    render(<Mocktest/>);
    const home = screen.getAllByText(/Login/i)[1];
    expect(home).toBeInTheDocument();
})
test('test nav menu Login burgermenu',()=>{
    render(<Mocktest/>);
    const bergurhome = screen.getAllByText(/Login/i)[0];
    expect(bergurhome).toBeInTheDocument();
})