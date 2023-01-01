//Section2 3rd part
import React from "react";
function JsonProblem() {
  React.useEffect(() => {
    fetch(
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
    )
      .then((res) => res.json())
      .then((data) => console.log(JSON.stringify(data.members[2].powers)));
  });
  const result = () => {
    fetch(
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
    )
      .then((res) => res.json())
      .then((data) => console.log(JSON.parse(JSON.stringify(data.members))));
  };
  return (
    <>
      <h1>JSON Solution </h1>
      <button onClick={result}>Parse Data</button>
    </>
  );
}

export default JsonProblem;
