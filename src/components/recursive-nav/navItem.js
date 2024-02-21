import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Nav from "./nav";

export default function NavItem({ item }) {
  const [displayCurrentMenu, setDisplayCurrentMenu] = useState({});

  function handleCurrentMenu(label) {
    setDisplayCurrentMenu({
      ...displayCurrentMenu,
      [label]: !displayCurrentMenu[label],
    });
  }

  return (
    <li>
      <div className="parent-label">
        <p>{item.label}</p>
        {item.children && item.children.length > 0 ? (
          <span onClick={() => handleCurrentMenu(item.label)}>
            {displayCurrentMenu[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>
      {item.children &&
      item.children.length > 0 &&
      displayCurrentMenu[item.label] ? (
        <Nav data={item.children} />
      ) : null}
    </li>
  );
}
