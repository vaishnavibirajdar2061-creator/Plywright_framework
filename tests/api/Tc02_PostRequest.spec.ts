
import {test,expect, APIResponse} from "@playwright/test"

//const baseUrl="https://restful-booker.herokuapp.com";
const baseUrl=process.env.APIBASEURL!;

test("POST Request: Create new booking with Manual copy paste Payload",async({request})=>{

//Json payload
    let payload={
    "firstname" : "Priyanka",
    "lastname" : "Nigade",
    "totalprice" : 999,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2026-10-25",
        "checkout" : "2026-10-26"
    },
    "additionalneeds" : "Breakfast"
}

    let response:APIResponse=await request.post(`${baseUrl}/booking`,{headers:{"Content-Type":"application/json"},data:payload});

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
    // "firstname": "Priyanka"
    expect(jsonResponse.booking.firstname).toBe("Priyanka");
    console.log("First name matched!");
    


    // "checkin": "2026-10-25",
    expect(jsonResponse.booking.bookingdates.checkin).toBe("2026-10-25");
    console.log("Checkin date is matched!");
    
    //Validate Complete Respons booking Object 
    //toMatchObject(): Compares contents of the value with contents of expected, performing "deep equality" check
expect(jsonResponse.booking).toMatchObject({
    "firstname" : "Priyanka",
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