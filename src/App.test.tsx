'use strict';

import React from "react";
import renderer, { act } from "react-test-renderer";
import App from "./App"

describe("<App />", () => {
    it('has 1 child', () => {
		jest.useFakeTimers();
		const tree = renderer.create(<App />).toJSON();
		jest.advanceTimersByTime(3000);

		act(() => {
		  jest.advanceTimersByTime(3000);
		  expect(tree.children.length).toBe(1);
		});
    });
});
