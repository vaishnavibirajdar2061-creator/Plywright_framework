
/*
API Interception
================
- Before request goes to the real server playwright can intercept it and take control of request

API mocking
============
- In some cases server may be under development process and we expect response then using Playwright
we can intercept request and genearte fake response and send that as response to a request

*/

import {test,expect} from "@playwright/test";
import { log } from "reporting-labs";

test("Test For API interception and observe the request",async({page})=>{

//interception: page.route():here we got all 5 request which goes to the server
await page.route("**/*",async(routePath)=>{ //**/* it matches every url and every method
    console.log("This is Network Interception");
    console.log("Request URL: "+routePath.request().url());
    console.log("Request Method: "+routePath.request().method());
    
    //send the request to the server
    await routePath.continue();
})


await page.goto("https://demo.playwright.dev/api-mocking/");

await page.waitForTimeout(2000);

})


test("Test for Single API request interception",async({page})=>{

    console.log("This is API Interception");
//intercept
await page.route("**/api/v1/fruits",async(routePath)=>{
console.log("URL: "+routePath.request().url());
console.log("Request Type: "+routePath.request().method());

//to complete this request --->send the request to original server
await routePath.continue();//method send request to real server
 
})
   
await page.goto("https://demo.playwright.dev/api-mocking/");

await page.waitForTimeout(2000);


})

test("Test for API Interception to block any request",async({page})=>{

    console.log("Request is intercepted!");
    
await page.route("https://demo.playwright.dev/api-mocking/",async(routePath)=>{

    //block this request
    await routePath.abort();
})

await page.waitForTimeout(2000);

})

test("APIInterception with API response mocking",async({page})=>{

    await page.route("https://jsonplaceholder.typicode.com/users/1",async(routePath)=>{

        //generate fake data/mock data:JSObject
        let mockData={
            id:2020,
            fname:"Sarang",
            profile:"QA",
            address:"Pune",
            skills:["Selenium","Cypress","Playwright"]
        }

        //send this mock data to the client as response:fullfill()
        routePath.fulfill({
            status:200,
            contentType:"application/json",
            //Jsobject--->Json data:stringify()
            body:JSON.stringify(mockData)//jsobject---Json-->attached as body
        })

        
    })

    await page.goto("https://jsonplaceholder.typicode.com/users/1");
    await page.waitForTimeout(2000);
})



test('Test for API Mocking',async({page})=>{

    await page.route("https://tutorialsninja.com/demo/index.php?route=product/search&search=macbook",async(routePath)=>{

        //mock data
        let mockData=[
            {id:101,name:'Mackbook air',price:7098098},
            {id:102,name:'Mackbook pro',price:709834234},
            {id:103,name:'Mackbook',price:546598},
        ]

        //pass this as response
        await routePath.fulfill({
            status:200,
            contentType:"application/json",
            body:JSON.stringify(mockData)
        })
    })


    await page.goto("https://tutorialsninja.com/demo/index.php?route=product/search&search=macbook");
    await page.waitForTimeout(2000);
})