"use client";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section>
      <h2>Сталася помилка!</h2>
      <p>Не вдалося завантажити сторінку.</p>

      <button onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </section>
  );
}
