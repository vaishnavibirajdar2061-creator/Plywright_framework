
/*
API Chaining
===============
When we send request and output of request we use as input to send to send other request
is called APIchaining

1.create new booking(post)------------->bookingid----->confirm from getBooking APi where we use id
2.create new booking(post)------------->bookingid----->create token---->PUT call for full update
3.create new booking(post)------------->bookingid----->create token---->PATCH call for partial update
4.create new booking(post)------------->bookingid----->create token---->DELETE to delete record


Temporary solution
====================
Run all test in sequence

Right technique to run api
============================
But with respect to playwright where every test case we run in parallel so we need to design AAA pattern
independent test is the solution

*/

import {test,expect, APIResponse} from "@playwright/test"
import {readingAPIPayload} from "../../src/utilities/ReadingAPI.js"


let baseUrl=process.env.APIBASEURL!;
let bookingId:number;
let tokenValue:number;

test.describe.serial("This is for API chaining",()=>{

test("POST: Create new Booking",async({request})=>{

    //payload
    let requestPayload=await readingAPIPayload("postdata");

    //post
    let response:APIResponse=await request.post(`${baseUrl}/booking`,{headers:{"Content-Type":"application/json"},data:requestPayload});

    //assertion
    expect(response.status()).toBe(200);
    console.log("Status code is: "+response.status());

    //extract bookingid from json response
    let jsonResponse=await response.json();

    console.log(jsonResponse);
    
    //bookingid
    
    bookingId=jsonResponse.bookingid;
    console.log("New Booking is created with Booking id: "+bookingId);
})


//get the booking details
test("GET: Get the booking details",async({request})=>{

let response:APIResponse=await request.get(`${baseUrl}/booking/${bookingId}`);

expect(response.status()).toBe(200);
console.log("Status code is: "+response.status());

//json payload
let jsonResponse=await response.json();
console.log(jsonResponse);

//firstname="Jay"
expect(jsonResponse.firstname).toBe("Jay");
console.log("Firstname validated!");

})

//token
test("POST: Create new Token",async({request})=>{

    //token payload
    let tokenPayload=await readingAPIPayload("tokendata");
    let response:APIResponse=await request.post(`${baseUrl}/auth`,{headers:{"Content-Type":"application/json"},data:tokenPayload});

    expect(response.status()).toBe(200);
    console.log("Status code matched!: "+response.status());
    
    //json response--->token
    let jsonResponse=await response.json();
    console.log(jsonResponse);
    
    //extract token
    console.log("Token is: "+jsonResponse.token);
    tokenValue=jsonResponse.token;

})


//put/patch/delete
//upadate full record
test("PUT: Update full booking",async({request})=>{

    //payload
    let payload=await readingAPIPayload("putdata");
    let response:APIResponse=await request.put(`${baseUrl}/booking/${bookingId}`,{headers:{
                                                                "Content-Type":"application/json",
                                                                "Accept":"application/json",
                                                                "Cookie": `token=${tokenValue}`
                                                            },data:payload});

   expect(response.status()).toBe(200);
   
   let jsonResponse=await response.json();
   console.log("Bokking updated with new Record!");
   console.log(jsonResponse);
   
})

test("PATCH: update partial booking",async({request})=>{

    let payload=await readingAPIPayload("patchdata");

     let response:APIResponse=await request.patch(`${baseUrl}/booking/${bookingId}`,{headers:{
                                                                "Content-Type":"application/json",
                                                                "Accept":"application/json",
                                                                "Cookie": `token=${tokenValue}`
                                                            },data:payload});
    
     expect(response.status()).toBe(200);
    
     let jsonResponse=await response.json();
     console.log(jsonResponse);

     //firstname should be James
     expect(jsonResponse.firstname).toBe("James");
      console.log("Record updated parially");
     

                                                             
})


test("DELETE: delete booking",async({request})=>{


let response:APIResponse=await request.delete(`${baseUrl}/booking/${bookingId}`,{headers:{
                                                                "Content-Type":"application/json",
                                                                "Cookie": `token=${tokenValue}`
                                                            }});

    expect(response.status()).toBe(201);
    console.log("Record deleted!");
    


      

})



})












