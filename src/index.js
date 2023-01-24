import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//set up vars
const books = [
  {
    author: "Amelia Hepworth",
    title: "I love you to the moon and back",
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg",
  },
  {
    author: "Colleen Hoover",
    title: "It Ends with Us: A Novela",
    img: "https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg",
  },
  {
    author: "Colleen Hoover",
    title: "It Starts with Us: A Novel (It Ends with Us)",
    img: "https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL300_SR300,200_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{author}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
