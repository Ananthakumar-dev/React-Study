import React, { useState } from "react";
import "./index.css";
import data from "./data";

export default function Accordian() {
  const [selectedAccordian, setSelectedAccordian] = useState(null);
  const [multipleEnabled, setMultipleEnabled] = useState(false);
  const [multipleAccordian, setmultipleAccordian] = useState([]);

  function handleQuestionClick(question_id) {
    if (multipleEnabled) {
      const acc = [...multipleAccordian];
      if (acc.indexOf(question_id) === -1) {
        acc.push(question_id);
      } else {
        acc.splice(acc.indexOf(question_id), 1);
      }

      setmultipleAccordian(acc);
    } else {
      setSelectedAccordian(
        selectedAccordian === question_id ? null : question_id
      );
    }
  }

  function handleMultipleAccordianSelection() {
    setMultipleEnabled(!multipleEnabled);
    setmultipleAccordian([]);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        <button type="button" onClick={handleMultipleAccordianSelection}>
          {multipleEnabled ? "Disable" : "Enable"} Multiple Selection
        </button>
        {data && data.length ? (
          data.map((data, key) => {
            return (
              <div key={key} className="item">
                <div
                  className="question"
                  onClick={() => handleQuestionClick(data.id)}
                >
                  <h3> {data.question} </h3>
                  <span>+</span>
                </div>

                {selectedAccordian === data.id ||
                multipleAccordian.indexOf(data.id) > -1 ? (
                  <div className="answer">{data.answer}</div>
                ) : null}
              </div>
            );
          })
        ) : (
          <div> No data's found</div>
        )}
      </div>
    </div>
  );
}
