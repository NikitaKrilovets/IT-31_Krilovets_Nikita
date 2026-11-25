import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <h1>Інтернет-магазин</h1>
      <p>Перегляньте наш каталог товарів.</p>

      <Link href="/catalog" className="button">
        Перейти до товарів
      </Link>
    </div>
  );
}