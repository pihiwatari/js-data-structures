// Import stylesheets
import './style.css';
import MyArray from './array/array';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const array = new MyArray();

console.log(array.data);
console.log(array.length);

array.push('Item 1');
array.push('Item 2');
array.push('Item 3');
array.push('Item 4');
array.push('Item 5');
array.push('Item 6');

console.log(array.data);
console.log(array.pop());
console.log(array.data);
console.log(array.delete(2));
console.log(array.data);
console.log(array.shift());
console.log(array.data);
console.log(array.unshift("new item"));
console.log(array.data);
