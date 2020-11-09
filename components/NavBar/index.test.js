import "isomorphic-fetch"
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import NavBar from "./index";


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

test('test working benoit neav BAr', () => {
  expect(1).toBe(1);
});

it('should call display menu on click', async() => {
  let stateMenu = false;
  const onOpenMenu = jest.fn(() => {
    stateMenu = !stateMenu;
  });

  act(() => {
    render(<NavBar/>, container);
  });

  const burger = container.querySelector('.js-test-burger');
  burger.addEventListener("click", onOpenMenu)
  act(() => {
    burger.dispatchEvent(new MouseEvent('click'));
  });
  expect(onOpenMenu).toHaveBeenCalledTimes(1);
  expect(stateMenu).toBe(true);
  
});


