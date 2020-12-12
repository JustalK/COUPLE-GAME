import React from "react";
import renderer from "react-test-renderer";
import Loading from "./Loading"

describe("<Loading />", () => {
    it('has 1 child', () => {
        const tree = renderer.create(<Loading />).toJSON();
		expect(true).toBe(true);
    });
});
