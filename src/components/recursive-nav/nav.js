import React from "react";
import NavItem from "./navItem";
import "./nav.css";

export default function Nav({ data = [] }) {
  return (
    <ul>
      {data && data.length
        ? data.map((el, index) => {
            return <NavItem key={index} item={el} />;
          })
        : null}
    </ul>
  );
}
