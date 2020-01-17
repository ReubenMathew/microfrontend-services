import React, { useState } from "react";

function Todos() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [book, setBook] = useState([]);
  function handleClick(e) {
    e.preventDefault();
    console.log("test");
    setBook([...book, { title: title, author: author, id: Date.now() }]);
  }
  function removeBook(id) {
    setBook(book.filter(x => x.id !== id));
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="author"
          onChange={e => setAuthor(e.target.value)}
        />
        <button name="button" onClick={handleClick}>
          Add Book
        </button>
      </form>
      <ul>
        {book.map(items => (
          <li key={items.id}>
            title:{items.title} Author:{items.author} id:{items.id}
            <button onClick={() => removeBook(items.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todos;
