import React, { useState, useEffect, useMemo } from "react";
import "./Main.scss";
import Pdf from "../../files/Yeva_Terteryan_CV.pdf";

const Main = () => {
  const expressions = useMemo(
    () => ["Developer", "Programmer", "Coder", "Problem Solver", "Creator"],
    []
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === expressions[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      if (index === expressions.length - 1) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 70 : subIndex === expressions[index].length ? 1000 : 150
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, expressions]);

  return (
    <div className="cvWrapper" id="home">
      <div>
        <h1>
          <span>y</span>Eva Terteryan
        </h1>
        <p>
          The {expressions[index].substring(0, subIndex)}
          <span>|</span>
        </p>
      </div>
      <button>
        <a href={Pdf} target="_blank" rel="noreferrer">
          Download my CV
        </a>
      </button>
    </div>
  );
};

export default Main;
