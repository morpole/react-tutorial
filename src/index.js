import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//set up vars
const books = [
  {
    id: 1,
    author: "Amelia Hepworth",
    title: "I love you to the moon and back",
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg",
  },
  {
    id: 2,
    author: "Colleen Hoover",
    title: "It Ends with Us: A Novela",
    img: "https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg",
  },
  {
    id: 3,
    author: "Colleen Hoover",
    title: "It Starts with Us: A Novel (It Ends with Us)",
    img: "https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL300_SR300,200_.jpg",
  },
  {
    id: 4,
    author: "Bonnie Garmus",
    title: "Lessons in Chemistry: A Novel",
    img: "https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL600_SR600,400_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  const clickHandler = () => {
    alert("hello oscarboy");
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <p>{author}</p>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
