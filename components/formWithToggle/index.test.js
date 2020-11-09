import "isomorphic-fetch"
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import FormWithToggle from "./index";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should send message and status on click", async () => {
  const onClick = jest.fn();

  await act(async () => {
    render(<FormWithToggle onClick={() => onClick()} />, container);
  });

  const button = document.querySelector(".js-test-submit");
  act(() => {
    button.dispatchEvent(new MouseEvent('click'));
  });
  expect(onClick).toHaveBeenCalledTimes(1);
});

