import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <header>
          <h1>Мій сайт</h1>

          <nav>
            <Link href="/">Головна</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/contacts">Контакти</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>Навчальний проєкт Next.js</p>
        </footer>
      </body>
    </html>
  );
}
