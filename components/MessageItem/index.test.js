import "isomorphic-fetch"
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import MessageItem from "./index";


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

const fakeMessage = {
  "id": "0",
  "content": "Bonjour à tous",
  "status": "public",
  "deleted": 0
};

it("test data from messageItem", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeMessage)
    })
  );

  await act(async () => {
    render(<MessageItem item={fakeMessage} />, container);
  });

  expect(container.querySelector(".content").textContent).toBe(fakeMessage.content);
  expect(container.querySelector(".status").textContent).toBe(fakeMessage.status);

  global.fetch.mockRestore();
});

