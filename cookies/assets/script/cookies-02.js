'use strict';

// Defining the lifetime of a cookie //
let validatedCookie = document.cookie.length > 0 ? 'Cookies Available' : 'No Cookies Available';
console.log(validatedCookie);

const date = new Date();
date.setSeconds(date.getSeconds() + 12); // 12 seconds in the future
let utcDate = date.toUTCString();

document.cookie = `City = Winnipeg; path=/; expires =${utcDate}`;
console.log(`Initially set cookie: ${document.cookie}`);

setTimeout(() => {
  document.cookie = `City = Winnipeg; path=/; expires =Thu, 01 Jan 2020 00:00:00 UTC`;
  console.log(`Cookies after 12 seconds: ${document.cookie}`);
}, 5000);