import React from "react";
import Tabs from "./tabs";
import "./tabs.css";

function RandomSection() {
  return <h4> Some random elements from random section </h4>;
}

const data = [
  {
    label: "tab 1",
    content: "Test Tab numeber one",
  },
  {
    label: "tab 2",
    content: "Test Tab numeber two",
  },
  {
    label: "tab 3",
    content: <RandomSection />,
  },
];

export default function TabsData() {
  return <Tabs data={data} />;
}
