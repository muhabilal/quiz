//Section3 3rd part
import React from "react";

function OddNumber() {
  const [number, setNumber] = React.useState([null]);
  console.log(typeof number);
  //   convert it into an array
  var vary = Array.from(number);
  console.log("vary", typeof vary);
  const onShow = () => {
    const odds = vary.filter((num) => num % 2 === 1);
    console.log("array of odd number", odds);
    var numberArray = odds.map(Number);
    const sum = numberArray.reduce((sum, num) => sum + num);
    console.log("sum is", sum);
  };
  return (
    <div>
      <h1>Write a program that takes a number of greater than 5 digits</h1>
      <h1>Please Enter more than or equal to 5 digits</h1>
      <button onClick={onShow}>Show result</button>
      <input type={"number"} onChange={(e) => setNumber(e.target.value)} />
    </div>
  );
}

export default OddNumber;
