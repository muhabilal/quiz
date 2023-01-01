//Section2 1st part
import React from "react";
function ReadingStatus() {
  var library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      readingStatus: true,
    },
    {
      author: "Steve Jobs",
      title: "Walter Isaacson",
      readingStatus: true,
    },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false,
    },
  ];
  return (
    <>
      <h1>Write a JavaScript program to display the reading status</h1>
      {library.map((item, index) => (
        <div key={index}>
          <h1>Book</h1>
          <h2>{item.title}</h2>
          <p>Author Name: {item.author}</p>
          <p>Reading Status: {item.readingStatus}</p>
        </div>
      ))}
    </>
  );
}

export default ReadingStatus;
