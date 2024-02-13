import React, { useEffect, useState } from "react";

export default function Color() {
  const [colorType, setColorType] = useState("hex");
  const [hexColor, setHexColor] = useState("");
  const [rgbColor, setRgbColor] = useState("");

  function getRandomValue(array_length) {
    return Math.floor(Math.random() * array_length);
  }

  function handleGenerateRandomColor() {
    if (colorType === "hex") {
      const randomArray = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];

      let hexColor = "#";

      for (let i = 0; i < 6; i++) {
        hexColor += randomArray[getRandomValue(randomArray.length)];
      }

      setHexColor(hexColor);
    } else {
      const r = getRandomValue(256);
      const g = getRandomValue(256);
      const b = getRandomValue(256);

      const rgb = `rgb(${r},${g},${b})`;

      setRgbColor(rgb);
    }
  }

  useEffect(() => {
    handleGenerateRandomColor();
  }, [colorType]);

  return (
    <div
      className="random-color"
      style={{
        backgroundColor: colorType === "hex" ? hexColor : rgbColor,
        height: "100vh",
        width: "100vw",
      }}
    >
      <button type="button" onClick={() => setColorType("hex")}>
        HEX Color
      </button>
      <button type="button" onClick={() => setColorType("rgb")}>
        RGB Color
      </button>
      <button type="button" onClick={handleGenerateRandomColor}>
        Generate Random Color
      </button>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          flexDirection: "column",
          fontSize: "2rem",
          color: "#fff",
        }}
      >
        <h2> {colorType === "hex" ? "HEX Color" : "RGB Color"}</h2>
        <h4> {colorType === "hex" ? hexColor : rgbColor} </h4>
      </div>
    </div>
  );
}
