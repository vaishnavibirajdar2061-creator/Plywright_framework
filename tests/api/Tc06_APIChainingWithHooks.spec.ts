
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
import {test,expect, APIResponse} from "@playwright/test";
import { readingAPIPayload } from "../../src/utilities/ReadingAPI.js";
let baseUrl=process.env.APIBASEURL!;

let bookingId:number;
let tokenValue:number;
//hook
test.beforeEach(async({request})=>{

    //step1: create new Booking
//create new booking
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


    //step2: generate token
//token payload
        let tokenPayload=await readingAPIPayload("tokendata");
        let getresponse:APIResponse=await request.post(`${baseUrl}/auth`,{headers:{"Content-Type":"application/json"},data:tokenPayload});
    
        expect(response.status()).toBe(200);
        console.log("Status code matched!: "+getresponse.status());
        
        //json response--->token
        let getjsonResponse=await getresponse.json();
        console.log(getjsonResponse);
        
        //extract token
        console.log("Token is: "+getjsonResponse.token);
         tokenValue=getjsonResponse.token;
})




//create booking--->bookingId--->token--->put
test("Create booking--->generate token-->update full record",async({request})=>{
    //step1: create a bokking and store id

    //step2: generate token and store it

    //step3: update full record based on id and token

    //payload
        let payload=await readingAPIPayload("putdata");
        let putresponse:APIResponse=await request.put(`${baseUrl}/booking/${bookingId}`,{headers:{
                                                                    "Content-Type":"application/json",
                                                                    "Accept":"application/json",
                                                                    "Cookie": `token=${tokenValue}`
                                                                },data:payload});
    
       expect(putresponse.status()).toBe(200);
       
       let putjsonResponse=await putresponse.json();
       console.log("Bokking updated with new Record!");
       console.log(putjsonResponse);
})

//create booking--->bookingId--->token--->patch
test("Create booking--->generate token-->update partial record",async({request})=>{
    //step1: create a bokking and store id

    //step2: generate token and store it

    //step3: update partial record based on id and token

    //payload
        let payload=await readingAPIPayload("patchdata");
        let putresponse:APIResponse=await request.patch(`${baseUrl}/booking/${bookingId}`,{headers:{
                                                                    "Content-Type":"application/json",
                                                                    "Accept":"application/json",
                                                                    "Cookie": `token=${tokenValue}`
                                                                },data:payload});
    
       expect(putresponse.status()).toBe(200);
       
       let putjsonResponse=await putresponse.json();
       console.log("Bokking updated with new Record!");
       console.log(putjsonResponse);
})

//create booking--->token--->delete
test("create booking--->generate token--->delete booking",async({request})=>{
//step1: create a bokking and store id

    //step2: generate token and store it

        //step3: delete booking
        
        let deleteresponse:APIResponse=await request.delete(`${baseUrl}/booking/${bookingId}`,{headers:{
                                                                        "Content-Type":"application/json",
                                                                        "Cookie": `token=${tokenValue}`
                                                                    }});
        
            expect(deleteresponse.status()).toBe(201);
            console.log("Record deleted!");
            

})