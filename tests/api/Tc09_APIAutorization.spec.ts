

import {test,expect, APIResponse} from "@playwright/test";
import { Buffer } from "buffer";
import { json } from "stream/consumers";
import { readingAPIPayload } from "../../src/utilities/ReadingAPI.js";

test("Test for NOAuth",async({request})=>{


const response:APIResponse=await request.get("https://jsonplaceholder.typicode.com/posts/1");
expect(response.status()).toBe(200);

//print json
let jsonResponse=await response.json();
console.log(jsonResponse);


})

test("API for Basic Authentication",async({request})=>{

    //Algorithm : Base64

    //username and password --->convert into base64 pattern then pass it
    let username="postman";
    let password="password";

    //to encode data in Base64 we use buffer package
    let base64=Buffer.from(`${username}:${password}`).toString('base64');
    console.log(base64);
    

let response:APIResponse=await request.get("https://postman-echo.com/basic-auth",{headers:{
    'Authorization':`Basic ${base64}`
}})

//jsonresponse
let jsonResponse=await response.json();
console.log(jsonResponse);


})

test('Test for API Key',async({request})=>{

    let response:APIResponse=await request.get("https://api.restful-api.dev/collections/products/objects",{headers:{
        "x-api-key":"895e84fa-dda5-4428-8511-b1b5fde1fe8e"

    }})

    expect(response.status()).toBe(200);

    let jsonResponse=await response.json();
    console.log(jsonResponse);
    

})

test("Test for Bearer Token API",async({request})=>{

    let token=process.env.APITOKEN!;
    //payload

let emailId="priyanka"+new Date().getTime()+"@gmail.com";

let payload={
    "name": "Priyanka Nigade",
    "email": `${emailId}`
}


const response:APIResponse=await request.post("https://gorest.co.in/public/v3/users",{headers:{
    Authorization:`Bearer ${token}`
},data:payload})


expect(response.status()).toBe(201);

})