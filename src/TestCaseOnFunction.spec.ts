
//IIFE

(()=>{
console.log("Hello");

})();

import {Browser, chromium,Page} from "@playwright/test"

(async()=>{

//start browser
//launch():Returns the browser instance.
let browser:Browser=await chromium.launch({headless:false,channel:"chrome"});

//browser--->newPage()---->page instance
let page:Page=await browser.newPage();

//open app
await page.goto("https://www.google.com");

console.log("Title is: "+await page.title());


//close browser
await page.close();
})();
