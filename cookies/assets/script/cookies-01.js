'use strict';

// "document.cookie" lets you read and write cookies associated with the document //
document.cooke = "Name=Navjot";
//console.log(document.cookie);

let firstNameKey = encodeURIComponent('First Name');
let firstNameValue = encodeURIComponent('John Smith');
document.cookie = `${firstNameKey} =${firstNameValue}`;
console.log(document.cookie);

console.log(`Number of characters of cookies:${document.cookie.length}`);
console.log(typeof document.cookie);

//Write a function to print cookies
//Basic validation: document.cookie.length > 0

function printCookies() {
  if(document.cookie.length > 0) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let [key, value] = cookies[i].split('=');
      key = decodeURIComponent(key);
      value = decodeURIComponent(value);
      return `Key=${key}, Value=${value}`;
    }
  }
}

console.log(printCookies());