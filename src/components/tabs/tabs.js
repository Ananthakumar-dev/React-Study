import React, { useState } from "react";

export default function Tabs({ data }) {
  const [currentTabSelected, setCurrentTabSelected] = useState(null);

  return (
    <div className="wrapper">
      <div className="header">
        {data && data.length ? (
          data.map((tabItem, index) => {
            return (
              <span
                className={`tab-label ${
                  currentTabSelected === index ? "active" : "inactive"
                }`}
                key={index}
                onClick={() => setCurrentTabSelected(index)}
              >
                {tabItem.label}
              </span>
            );
          })
        ) : (
          <h3> No tabs available </h3>
        )}
      </div>
      <div className="content">
        {data && data.length && data[currentTabSelected]
          ? data[currentTabSelected].content
          : null}
      </div>
    </div>
  );
}
