import React, { useEffect, useState } from "react";
import "./uber_box.css";

function UberBox() {
  const [clickList, setClickList] = useState([]);
  useEffect(() => {
    if (clickList.length && clickList.length < 9) {
      const box = document.getElementById(clickList[clickList.length - 1]);
      box.style.backgroundColor = "rgb(88, 47, 238)";
    } else if (clickList.length && clickList.length === 9) {
      clickList.reverse();
      clickList.forEach((click, index) => {
        setTimeout(() => {
          const box = document.getElementById(click);
          box.style.backgroundColor = "rgb(215, 206, 255)";
        }, index * 1000);
      });
      setClickList([])
    }
  }, [clickList]);

  const clickHandler = (e) => {
    if(!clickList.includes(e.target.id)){
    setClickList([...clickList, e.target.id]);
    }
  };
  const createMatix = () => {
    let matrix = [];
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <div
            key={j}
            className="box"
            id={`box${i}${j}`}
            onClick={clickHandler}
          ></div>
        );
      }
      matrix.push(
        <div key={i} className="boxRow">
          {row}
        </div>
      );
    }
    return matrix;
  };
  return <div className="container">{createMatix()}</div>;
}

export default UberBox;
