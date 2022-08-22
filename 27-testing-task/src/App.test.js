import {render, screen} from '@testing-library/react'
import React from "react";
import ReactDOM from "react-dom";
import '@testing-library/jest-dom'
import App from "./App";
import Header from './Header';
import EmojiResults from './EmojiResults';
import EmojiResultsRow from './EmojiResultRow';


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
 
test('Header Test', () => {
  render(<Header />);
  const header = screen.getByText(/Emoji Search/i);
  expect(header).toBeInTheDocument();
})

test('Emoji list filtering', () => {
  render(<App/>);
  const inputtext = screen.getByText('1234');
  expect(inputtext).toBeInTheDocument('1234');
})
test('Emoji List', () => {
  render(<App/>);
  const emoji = screen.getAllByTestId("row");
  expect(emoji.length).toEqual(20);
})
test('Click', () => {
  render(<App/>);
  const Click = screen.getAllByTestId("row");
  expect(Click[0]).toHaveAttribute("data-clipboard-text");
})


