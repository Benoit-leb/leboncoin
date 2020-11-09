import "isomorphic-fetch"
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Messagerie from "./index";

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

const list = [
  {
    "id": "0",
    "content": "message 1",
    "status": "public",
    "deleted": 0
  },
  {
    "id": "1",
    "content": "message 2",
    "status": "private",
    "deleted": 0
  }
];

it("data from message is correctly display", async () => {
  
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeMessages)
    })
  );

  await act(async () => {
    render(<Messagerie data={list} />, container);
  });

  expect(container.querySelector(".container")).not.toBeNull();

  global.fetch.mockRestore();
});

