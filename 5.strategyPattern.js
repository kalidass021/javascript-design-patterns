// strategy pattern
// choose different behaviour (strategy) at runtime

const noDiscount = (total) => total;
const tenPercent = (total) => total * 0.9; // ((100 - 10)/100)

const checkOut = (cart, discountStrategy) => {
    const total = cart.reduce((sum, item) => sum + item.price,0);

    return discountStrategy(total);
};

const cart = [
  { name: 'proudct1', price: 100 },
  { name: 'product2', price: 50 },
];

console.log(checkOut(cart, tenPercent)); // 135
console.log(checkOut(cart, noDiscount)); // 150
