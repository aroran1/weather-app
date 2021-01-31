// Object property shorthand
const name = 'Nidhi';
const age = 37;

const user = {
  name, // same as name: name,
  age, // same as age: age,
  location: 'London'
}

console.log(user);

// Object destructuring
const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
};

// const label = product.label;
// const stock = product.stock;
// same as above
 const { label, stock, rating } = product;
 console.log(label);
 console.log(stock);
 console.log(rating); // store as undefined

 // properties can be renamed
 // and can also set a default values
 const { label: productLable, stock: stock1, rating1 = 5 } = product; 
 console.log('productLable', productLable);
 console.log('stock1', stock1);
 console.log('rating1', rating1);

 // destructuring in function instead of passing the object
 // example passing object
// const transaction = (type, product) => { 
 // example passing destructured object properties
const transaction = (type, { label = "Unknown", stock = 0 } = {}) => {
  console.log(type, label, stock);
}
transaction('transaction order', product);

// passing default object value
transaction('transaction order');