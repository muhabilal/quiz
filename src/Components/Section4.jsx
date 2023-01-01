//Section4

import React from "react";
import axios from "axios";
function Section4() {
  const [isShown, setIsShown] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);
  const fetchAPI = () => {
    if (isShown == 0) {
      fetch("https://learnwebcode.github.io/json-example/animals-1.json")
        .then((response) => response.json())
        .then((data) => console.log(data));
      setIsShown(1);
    } else if (isShown == 1) {
      fetch("https://learnwebcode.github.io/json-example/animals-2.json")
        .then((response) => response.json())
        .then((data) => console.log(data));
      setIsShown(2);
      //   setIsVisible(false);
    } else if (isShown == 2) {
      // fetchAPI("https://learnwebcode.github.io/json-example/animals-3.json")
      //   .then((response) => response.json())
      //   .then((data) => console.log(data));
      // alert("hello");
      res();
      setIsShown(0);
      setIsVisible(false);
    }
  };
  const res = async () => {
    await axios
      .get("https://learnwebcode.github.io/json-example/animals-3.json")
      .then((data) => console.log(data));
  };

  console.log(isShown);
  console.log(isVisible);
  return (
    <>
      {isVisible == true ? <button onClick={fetchAPI}>Click me</button> : null}
    </>
  );
}

export default Section4;
