import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import FrameworkList from "./FrameworkList";

afterEach(() => cleanup());

describe("Rendering the list with props", () => {
  it("Should render No data ! when no data propped", () => {
    render(<FrameworkList />);
    expect(screen.getByText("No data !")).toBeInTheDocument();
  });
  it("Should render list item correctly", () => {
    const dummyData = [
      {
        id: 1,
        item: "React",
      },
      {
        id: 2,
        item: "Angular",
      },
      { id: 3, item: "Vue" },
    ];
    render(<FrameworkList frameworks={dummyData} />);
    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((element) => element.textContent);
    const dummyItems = dummyData.map((element) => element.item);
    expect(frameworkItems).toEqual(dummyItems);
    expect(screen.queryByText("No data !")).toBeNull();
  });
});
