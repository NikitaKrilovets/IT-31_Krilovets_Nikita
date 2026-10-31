import InteractiveList from "./InteractiveList";

export default function PracticePage() {
  const books = [
    { id: 1, title: "Гаррі Поттер", author: "Джоан Роулінг", genre: "Фантастика" },
    { id: 2, title: "1984", author: "Джордж Орвелл", genre: "Антиутопія" },
    { id: 3, title: "Гобіт", author: "Джон Толкін", genre: "Фантастика" },
    { id: 4, title: "Маленький принц", author: "Антуан де Сент-Екзюпері", genre: "Казка" },
    { id: 5, title: "Дюна", author: "Френк Герберт", genre: "Фантастика" },
    { id: 6, title: "Шерлок Холмс", author: "Артур Конан Дойл", genre: "Детектив" },
  ];

  return (
    <main>
      <h1>Електронна бібліотека</h1>

      <p>Загальна кількість книг: {books.length}</p>

      <InteractiveList books={books} />
    </main>
  );
}
