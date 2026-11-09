"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div>
      <h2>Сталася помилка!</h2>
      <p>Не вдалося завантажити користувачів.</p>
      <button onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </div>
  );
}
