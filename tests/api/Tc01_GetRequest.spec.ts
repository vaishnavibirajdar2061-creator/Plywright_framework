


import {test,expect, APIResponse} from "@playwright/test";

//let baseUrl="https://restful-booker.herokuapp.com";
const baseUrl=process.env.APIBASEURL!;


test("GET Request: Get all Booking Ids",async({request})=>{

    let response:APIResponse=await request.get("https://restful-booker.herokuapp.com/booking");

 console.log("Status code is: "+response.status());
 console.log("Status message is: "+response.statusText());
 
 //validate-Assertion
 //status code should be 200
 expect(response.status()).toBe(200);

 //status message should be OK
 expect(response.statusText()).toBe("OK");

 //Returns the buffer with response body.
 //console.log(await response.body());

//get the response in raw type text()
let textResponse=await response.text();
console.log(textResponse);


 //Get the response in Json body
 let jsonResponse=await response.json();
 console.log(jsonResponse);
 


})

test("GET Request: Get All booking Ids With BaseUrl",async({request})=>{


    let response:APIResponse=await request.get(`${baseUrl}/booking`);

    expect(response.status()).toBe(200);
    console.log("Status code is: "+response.status());

    expect(response.statusText()).toBe("OK");
    console.log("Status message is: "+response.statusText());

    console.log("Response time: ",response.timing());
    
    //json Response body
    let jsonResponse=await response.json();
    console.log(jsonResponse);
    

})

/*
https://restful-booker.herokuapp.com/booking?firstname=Sally

BaseUrl: https://restful-booker.herokuapp.com
PathParameter: /booking (variable pointing to some resource)
QueryParameter: ?firstname=Sally (filtering records)

*/

test("GET Request: Get BookingIds for Path and Query parameter",async({request})=>{

    const firstname="Sally";
    const response:APIResponse=await request.get(`${baseUrl}/booking`,{params:firstname});

    //let response:APIResponse=await request.get(`https://restful-booker.herokuapp.com/booking?firstname=Sally`);[]
    console.log("Status code is: "+response.status());
    console.log("Status message is: "+response.statusText());

    //Json body
    let jsonResponse=await response.json();
    console.log(jsonResponse);
    

    
})
