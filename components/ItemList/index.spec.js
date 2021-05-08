import React from "react";
import { render, shallow } from "enzyme";
import ItemList from "./index";

describe("Testing ItemList:", () => {
  it("should render a list", () => {
    const wrapper = render(<ItemList />);

    expect(wrapper.children().length).toBe(3);
  });

  it("should render a list item with props", () => {
    const wrapper = shallow(<ItemList />);

    const mockItemList = [
        {
          id: 1,
          name: "PS4",
        },
        {
          id: 2,
          name: "PS5",
        },
        {
          id: 3,
          name: "PS6",
        },
      ];

    const firstItem = wrapper.find("ul").childAt(0);

    expect(firstItem.type()).toBe("li");

    expect(firstItem.text()).toBe(mockItemList[0].name);

  });
});
