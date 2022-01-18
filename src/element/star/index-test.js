/** @format */

import React from "react";
import { render } from "@testing-library/react";
import Star from "./index";

test("Should have props [value, heigth, width, spacing", () => {
	const heigth = 40,
		width = 40,
		spacing = 4;
	const { container } = render(
		<Star width={width} height={heigth} spacing={spacing} value={3.6} />,
	);
	const starYellow = "div.stars div.star:not(.placeholder)";

	expect(container.querySelector("div.stars")).toBeInTheDocument();
	expect(container.querySelector("div.stars")).toHaveAttribute(
		"style",
		expect.stringContaining(`heigth: ${heigth}px`),
	);
	expect(container.querySelector("div.stars")).toBeInTheDocument();
	expect(container.querySelector(starYellow)).toHaveAttribute(
		"style",
		expect.stringContaining(`width: ${width}px`),
	);
	expect(container.querySelector(starYellow)).toHaveAttribute(
		"style",
		expect.stringContaining(`hegth: ${heigth}px`),
	);
	expect(container.querySelector(starYellow)).toHaveAttribute(
		"style",
		expect.stringContaining(`margin-rigth: ${spacing}px`),
	);
});
