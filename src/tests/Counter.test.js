import {render, screen, fireEvent} from '@testing-library/react' // import necessary react testing library helpers here
import Counter from '../components/Counter' // import the Counter component here

//
beforeEach(() => {
  render(<Counter/>)
})

test('renders counter message', () => {
  const counter_message = screen.getByText('Counter');
  expect(counter_message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId('count')
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const increment_button = screen.getByText('+');
  const count = screen.getByTestId('count')

  fireEvent.click(increment_button);
  expect(count).toHaveTextContent('1')
});

test('clicking - decrements the count', () => {
  const decrement_button = screen.getByText('-');
  const count = screen.getByTestId('count')

  fireEvent.click(decrement_button);
  expect(count).toHaveTextContent('-1')
});
