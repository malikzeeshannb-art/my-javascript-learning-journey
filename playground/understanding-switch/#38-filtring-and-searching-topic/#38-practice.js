let products = [
{ name: "Shampoo", price: 50, category: "care" },
{ name: "Soap", price: 20, category: "care" },
{ name: "Perfume", price: 150, category: "luxury" },
{ name: "Oil", price: 80, category: "care" },
{ name: "Face Wash", price: 120, category: "care" }
];

let newProducts = products.filter(function(matchedProducts) {
return matchedProducts.price > 50;
});
console.log(newProducts);

// task two provided by GPT...

let firstProduct = products.find(function(firstMatchedProduct) {
return firstMatchedProduct.category === "care";
});
console.log(firstProduct);

// task 3 provided by GPT!

let luxuryProduct = products.filter(function(allProduct) {
return allProduct.price > 100 && allProduct.category === "luxury";
});

console.log(luxuryProduct);