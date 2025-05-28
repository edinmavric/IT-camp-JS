// 1. Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

const student = new Student('Alice', 20, 'S123');
student.greet();

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set dimensions({ width, height }) {
    this.width = width;
    this.height = height;
  }
}

// 2. Modularno programiranje

export default function add(a, b) {
  return a + b;
}

// 3. Error handling

try {
  const result = add(5, '10'); // This will cause an error
  console.log(result);
} catch (error) {
  throw new Error(`An error occurred: ${error.message}`);
} finally {
  console.log('Execution completed.');
}

// 3.1 Custom error class

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

// 4. Reg Ex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 5. Event Delegation
document.querySelector('ul').addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    console.log('Element clicked:', event.target);
  }
});

// 6. Debouncing ad Throttling
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// 7. Date and Time Manipulation
const date = new Date();
date.getFullYear();
date.getMonth(); // Note: January is 0
date.setDate(1); // Setting the date to the 1st of the month
date.toUTCString();

// Async patterns

Promise.all([
  new Promise(resolve => setTimeout(() => resolve('First'), 1000)),
  new Promise(resolve => setTimeout(() => resolve('Second'), 2000)),
])
  .then(results => {
    console.log('All promises resolved:', results);
  })
  .catch(error => {
    console.error('Error in promises:', error);
  });

Promise.race([
  new Promise(resolve => setTimeout(() => resolve('First'), 1000)),
  new Promise(resolve => setTimeout(() => resolve('Second'), 2000)),
])
  .then(result => {
    console.log('First promise resolved:', result);
  })
  .catch(error => {
    console.error('Error in promises:', error);
  });

// 8. Destructuring

const [a, b] = [1, 2];

const user = { name: 'John', age: 30 };
const { name, age } = user;

// 9. Optional Chaining & Nullish Coalescing
const userProfile = {
  name: 'Jane',
  address: {
    city: 'New York',
    zip: '10001',
  },
};
const city = userProfile.address?.city || '-'; // 'New York'
console.log(city);

const value = null; // Example value for demonstration
console.log(value ?? 'default value'); // If value is null or undefined, use 'default value'

// 10. Memory leaks and Garbage Collection
// Pogledajte sami

// 11. TypeScript
// TypeScript example
// interface User {
//   name: string;
//   age: number;
// }
// function greet(user: User): string {
//   return `Hello, ${user.name}! You are ${user.age} years old.`;
// }
