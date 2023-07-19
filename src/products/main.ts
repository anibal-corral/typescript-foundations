import { createProduct, calcStock, products } from "./product.service";


createProduct({
  name:'Product 1',
  createdAt: new Date(),
  stock:12,
  size:'XS'
});
createProduct({
  name:'Product 2',
  createdAt: new Date(),
  stock:100,
  size:'L'
});

console.log(products);

console.log(calcStock());
