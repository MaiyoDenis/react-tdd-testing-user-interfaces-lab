import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App />);

  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with appropriate alt text", () => {
  render(<App />);
  const image = screen.getByRole("img", { name: /denis maiyo/i });
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", { name: /about me/i, level: 2 });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph for biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/./, { selector: "p" });
  expect(paragraph).toBeInTheDocument();
});

test("displays two links to GitHub and LinkedIn", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href");
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href");
});
