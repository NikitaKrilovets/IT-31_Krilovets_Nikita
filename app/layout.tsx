import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <header>
          <Link href="/">
            <h2>Інтернет-магазин</h2>
          </Link>

          <nav>
            <Link href="/">Головна</Link>
            <Link href="/catalog">Товари</Link>
            <Link href="/form">Замовлення</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>Навчальний сайт</p>
        </footer>
      </body>
    </html>
  );
}