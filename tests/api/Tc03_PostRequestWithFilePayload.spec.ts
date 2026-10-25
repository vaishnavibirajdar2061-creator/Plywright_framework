

import {test,expect, APIResponse} from "@playwright/test"
import fs from "fs";
import {readingAPIPayload} from "../../src/utilities/ReadingAPI.js";


const baseUrl=process.env.APIBASEURL!;

test("POST Request: Create new booking with File Payload",async({request})=>{

//read payload from json file : json file ---:js object
let payload=JSON.parse(fs.readFileSync("src/apiData/postdata.json",'utf-8'));

    let response:APIResponse=await request.post(`${baseUrl}/booking`,{headers:{"Content-Type":"application/json"},data:payload});//Jsobject--->json

    //assertion
    expect(response.status()).toBe(200);
    console.log("Status code is: "+response.status());
    
    expect(response.statusText()).toBe("OK");
    console.log("Status message is: "+response.statusText());

    //Json Response body
    let jsonResponse=await response.json();
    console.log(jsonResponse);
    
    //JSON Response validation

    //validate bookingid is available as response property?
    expect(jsonResponse).toHaveProperty("bookingid");

    //booking id should be number type
    //expect.any() matches any object instance created from the constructor or a corresponding primitive type.
    expect(jsonResponse.bookingid).toEqual(expect.any(Number));
    console.log("BookingId: ",jsonResponse.bookingid);
    

    //firstname should be string type
    expect(jsonResponse.booking.firstname).toEqual(expect.any(String));
    console.log("Firstname is: ",jsonResponse.booking.firstname);
    

    //"depositpaid": true, should be boolean
    expect(jsonResponse.booking.depositpaid).toEqual(expect.any(Boolean));
    console.log("Depositpaid status: ",jsonResponse.booking.depositpaid);
    

    //Validate JsonResponse  field with value
    // "firstname": "Jay"
    expect(jsonResponse.booking.firstname).toBe("Jay");
    console.log("First name matched!");
    


    // "checkin": "2026-10-25",
    expect(jsonResponse.booking.bookingdates.checkin).toBe("2026-10-25");
    console.log("Checkin date is matched!");
    
    //Validate Complete Respons booking Object 
    //toMatchObject(): Compares contents of the value with contents of expected, performing "deep equality" check
expect(jsonResponse.booking).toMatchObject({
    "firstname" : "Jay",
    "lastname" : "Nigade",
    "totalprice" : 999,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2026-10-25",
        "checkout" : "2026-10-26"
    },
    "additionalneeds" : "Breakfast"
})

expect(jsonResponse.booking).toMatchObject(payload)

console.log("Booking object validated!");


//bookingdates object validate
expect(jsonResponse.booking.bookingdates).toMatchObject({
        "checkin" : "2026-10-25",
        "checkout" : "2026-10-26"
    }) 

    console.log("Bookingdates object matched!");
    
})


test("POST Request: Create new booking with File Payload using utility",async({request})=>{

//read payload from json file from utility : json file ---:js object

   let payload=await readingAPIPayload("postdata");
    let response:APIResponse=await request.post(`${baseUrl}/booking`,{headers:{"Content-Type":"application/json"},data:payload});//Jsobject--->json

    //assertion
    expect(response.status()).toBe(200);
    console.log("Status code is: "+response.status());
    
    expect(response.statusText()).toBe("OK");
    console.log("Status message is: "+response.statusText());

    //Json Response body
    let jsonResponse=await response.json();
    console.log(jsonResponse);
    
    //JSON Response validation

    //validate bookingid is available as response property?
    expect(jsonResponse).toHaveProperty("bookingid");

    //booking id should be number type
    //expect.any() matches any object instance created from the constructor or a corresponding primitive type.
    expect(jsonResponse.bookingid).toEqual(expect.any(Number));
    console.log("BookingId: ",jsonResponse.bookingid);
    

    //firstname should be string type
    expect(jsonResponse.booking.firstname).toEqual(expect.any(String));
    console.log("Firstname is: ",jsonResponse.booking.firstname);
    

    //"depositpaid": true, should be boolean
    expect(jsonResponse.booking.depositpaid).toEqual(expect.any(Boolean));
    console.log("Depositpaid status: ",jsonResponse.booking.depositpaid);
    

    //Validate JsonResponse  field with value
    // "firstname": "Jay"
    expect(jsonResponse.booking.firstname).toBe("Jay");
    console.log("First name matched!");
    


    // "checkin": "2026-10-25",
    expect(jsonResponse.booking.bookingdates.checkin).toBe("2026-10-25");
    console.log("Checkin date is matched!");
    
    //Validate Complete Respons booking Object 
    //toMatchObject(): Compares contents of the value with contents of expected, performing "deep equality" check
expect(jsonResponse.booking).toMatchObject({
    "firstname" : "Jay",
    "lastname" : "Nigade",
    "totalprice" : 999,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2026-10-25",
        "checkout" : "2026-10-26"
    },
    "additionalneeds" : "Breakfast"
})

expect(jsonResponse.booking).toMatchObject(payload)

console.log("Booking object validated!");


//bookingdates object validate
expect(jsonResponse.booking.bookingdates).toMatchObject({
        "checkin" : "2026-10-25",
        "checkout" : "2026-10-26"
    }) 

    console.log("Bookingdates object matched!");
    
})