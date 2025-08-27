// Part 1

let userAge = prompt("Enter your age:"); // Capture user input
userAge = parseInt(userAge); // Convert input to a number

if (userAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Part 2
function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

// Usage
const shoppingCart = [
  { name: 'Shirt', price: 25.00, quantity: 2 },
  { name: 'Pants', price: 40.00, quantity: 1 }
];
const cartTotal = calculateTotal(shoppingCart);
console.log(`Your cart total is: $${cartTotal.toFixed(2)}`);

// Part 3
// for loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i); // Output: Iteration: 0, 1, 2, 3, 4
}

// while loop
let count = 0;
while (count < 3) {
  console.log("Count:", count); // Output: Count: 0, 1, 2
  count++;
}

//forEach
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit) {
  console.log("Fruit:", fruit); // Output: Fruit: apple, Fruit: banana, Fruit: cherry
});

// Part 4
const myParagraph = document.getElementById('myParagraph');
        const myButton = document.getElementById('myButton');

        myButton.addEventListener('click', () => {
            myParagraph.textContent = 'The text has been updated!';
            myParagraph.classList.toggle('highlight');
        });