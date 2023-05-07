type ProductTuple = [string, number, number];

function getProductTotal(products: ProductTuple[]): number {
  let Total: number = 0;
  for (let [productName, productPrice, productQuantity] of products) {
    Total += productPrice * productQuantity;
  }
  return Total;
}

const myProducts: ProductTuple[] = [
  ["Product 1", 10, 2],
  ["Product 2", 20, 3],
  ["Product 3", 30, 1],
];

const totalCost = getProductTotal(myProducts);
console.log(totalCost);
