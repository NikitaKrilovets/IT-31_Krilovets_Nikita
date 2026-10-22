import Link from "next/link";

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>
        <Link href="/catalog">Усі товари</Link>
        <Link href="/catalog/smartphones">Смартфони</Link>
        <Link href="/catalog/laptops">Ноутбуки</Link>
      </nav>

      {children}
    </section>
  );
}
