import Filter from "../components/filter";

export default async function CatalogPage() {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw new Error("Помилка завантаження товарів");
  }

  const data = await response.json();

  return (
    <div className="catalog">
      <h1>Товари</h1>

      <Filter products={data.products} />
    </div>
  );
}