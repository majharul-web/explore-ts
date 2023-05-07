interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

function filterProducts<T extends keyof Product>(
  products: Product[],
  criterion: T,
  value: Product[T]
): Product[] {
  return products.filter((product: Product) => product[criterion] === value);
}

const products: Product[] = [
  { id: 1, name: "Product 1", price: 10, category: "Category 1" },
  { id: 2, name: "Product 2", price: 20, category: "Category 2" },
  { id: 3, name: "Product 3", price: 30, category: "Category 1" },
];

const filteredProducts = filterProducts(products, "category", "Category 1");
console.log(filteredProducts); // [{ id: 1, name: "Product 1", price: 10, category: "Category 1" }, { id: 3, name: "Product 3", price: 30, category: "Category 1" }]
