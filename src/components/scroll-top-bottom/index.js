import React, { useRef } from "react";
import UseFetchData from "../../hooks/useFetchData";
import "./index.css";

export default function ScrollTopBottom() {
  const bottomRef = useRef();
  const { data, loading, error } = UseFetchData({
    url: `https://dummyjson.com/products`,
  });

  if (loading) return <h1> Loading ... </h1>;
  if (error) return <h1> Error! Something went wrong </h1>;

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="wrapper">
      <h1> Products List</h1>
      <button
        type="button"
        onClick={() => bottomRef.current.scrollIntoView({ behavior: "smooth" })}
      >
        Scroll To Bottom
      </button>
      {data && data.products && data.products.length ? (
        <ul className="productsList">
          {data.products.map((product, index) => {
            return <li key={index}>{product.title}</li>;
          })}
        </ul>
      ) : null}

      <div className="bottom-section" ref={bottomRef}>
        <button type="button" onClick={handleScrollToTop}>
          Scroll To Top
        </button>
      </div>
    </div>
  );
}
