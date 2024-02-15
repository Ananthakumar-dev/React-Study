import React, { useEffect, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [currentSlider, setCurrentSlider] = useState(0);

  async function getImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const res_images = await response.json();

      if (res_images) {
        setImages(res_images);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      getImages(`${url}?page=${page}&limit=${limit}`);
    }
  }, [url]);

  console.log(images);
  if (loading) {
    return <div>Loading! Please wait!!!</div>;
  }

  if (error) {
    return <div>Something went wrong! {error}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircle className="arrow left-arrow" />

      {images && images.length
        ? images.map((imageItem, index) => {
            return (
              <img
                key={index}
                src={imageItem.download_url}
                alt={imageItem.url}
                className="current-image"
              />
            );
          })
        : null}

      <BsArrowRightCircle className="arrow right-arrow" />

      {images && images.length
        ? images.map((_, index) => {
            return <span className="indicators" key={index}></span>;
          })
        : null}
    </div>
  );
}
