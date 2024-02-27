import React, { useRef, useState } from "react";
import UseOutsideClick from "../../hooks/useOutsideClick";

export default function OutsideClick() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  UseOutsideClick(ref, () => setShowContent(false));

  return (
    <div className="wrapper">
      <button type="button" onClick={() => setShowContent(true)}>
        Show Content
      </button>

      {showContent ? (
        <div className="container" ref={ref}>
          <h2> Please click outside of the content to hide </h2>

          <p> lorem ipsum Handler </p>
        </div>
      ) : null}
    </div>
  );
}
