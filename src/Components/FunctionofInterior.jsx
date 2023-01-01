import React from "react";

function FunctionofInterior() {
  function sumOfInteriorAngles(n) {
    if (n < 3) return 0;
    else return (n - 2) * 180;
  }
  let n = 6;
  console.log(sumOfInteriorAngles(n));
  return (
    <div>
      <h1>Section3 part 4</h1>
    </div>
  );
}

export default FunctionofInterior;
