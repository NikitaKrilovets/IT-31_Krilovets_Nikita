
"use client";

import { useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
};

export default function InteractiveList({ books }: { books: Book[] }) {
  const [query, setQuery] = useState("");
  const [onlyFantasy, setOnlyFantasy] = useState(false);

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesGenre = !onlyFantasy || book.genre === "Фантастика";

    return matchesTitle && matchesGenre;
  });

  return (
    <div>
      <h2>Список книг</h2>

      <input
        type="text"
        placeholder="Пошук за назвою книги..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div>
        <label>
          <input
            type="checkbox"
            checked={onlyFantasy}
            onChange={(e) => setOnlyFantasy(e.target.checked)}
          />
          Лише фантастика
        </label>
      </div>

      <div>
        {filteredBooks.length === 0 ? (
          <p>Нічого не знайдено</p>
        ) : (
          filteredBooks.map((book) => (
            <div key={book.id}>
              <h3>{book.title}</h3>
              <p>Автор: {book.author}</p>
              <p>Жанр: {book.genre}</p>
              <hr />
            </div>
          ))
        )}
      </div>

      <p>Знайдено книг: {filteredBooks.length}</p>
    </div>
  );
}
