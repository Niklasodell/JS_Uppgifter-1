// Uppgift 1

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const doubledEvens = numbers.filter(num => num % 2 === 0).map(num => num * 2);

console.log(doubledEvens);



// Uppgift 2

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 15 },
  ];
  
  const usersOver18 = users.filter(user => user.age > 18).map(user => user.name);
  
  console.log(usersOver18);



// Uppgift 3

const nameUsers = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'Berith', age: 63 },
    { name: 'Claes', age: 48 },
    { name: 'KersYn', age: 72 },
    { name: 'Lars', age: 54 },
    { name: 'David', age: 15 },
  ];
  
  const filteredUsers = nameUsers.filter(user => (user.age >= 15 && user.age <= 20) || user.age >= 50).map(user => user.name);
  
  console.log(filteredUsers);
  


// Uppgift 4

const ageUsers = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'Berith', age: 63 },
    { name: 'Claes', age: 48 },
    { name: 'KersYn', age: 72 },
  ];
  
  const totalAge = ageUsers.reduce((sum, user) => sum + user.age, 0);
  
  console.log(totalAge);


  
// Uppgift 5

const shoppingCart = [
    {
      name: "T-Shirt",
      price: 249,
      quantity: 1
    },
    {
      name: "Keps",
      price: 199,
      quantity: 1
    },
    {
      name: "Strumpor",
      price: 39,
      quantity: 5
    }
  ];
  
  const subtotal = shoppingCart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  const taxRate = 0.25;
  const taxAmount = subtotal * taxRate;
  const totalSum = subtotal + taxAmount;
  
  const result = {
    totalSum: totalSum.toFixed(2),
    moms: taxAmount.toFixed(2)
  };
  
  console.log(result);
  