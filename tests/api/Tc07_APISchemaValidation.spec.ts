/*
Schema validation
1. install required package: ajv library
https://www.npmjs.com/package/ajv

npm install ajv
 
-AJV stands for "Another Json Schema Validator"
-Ajv used for schema validation
- Ajv used one compile() where we can pass schema and 
this method returnd anonymous validator function which we can 
store into variable


let validate=ajv.compile(schema);

- in validate function we can provide actual server response which we
wanted to validate with respect to schema

-In real time you dont required to generate schema , it wil be 
provided in detialed design document by developers
*/

import {test,expect, APIResponse} from "@playwright/test"
import { readingAPIPayload } from "../../src/utilities/ReadingAPI.js"
//import Ajv from "ajv";

import AjvModule from 'ajv'
const Ajv=AjvModule.default;

const ajv=new Ajv();

const baseUrl=process.env.APIBASEURL!;

test("For Create bookingSchema validation",async({request})=>{

    let payload=await readingAPIPayload("postdata");

    let response:APIResponse=await request.post(`${baseUrl}/booking`,{headers:{
        "Content-Type":"application/json"
    },data:payload});

    //get the response
   let jsonResponse=await response.json();

   //schema:https://transform.tools/json-to-json-schema

   let schema={
    "type": "object",
  "properties": {
    "bookingid": {
      "type": "number"
    },
    "booking": {
      "type": "object",
      "properties": {
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "totalprice": {
          "type": "number"
        },
        "depositpaid": {
          "type": "boolean"
        },
        "bookingdates": {
          "type": "object",
          "properties": {
            "checkin": {
              "type": "string"
            },
            "checkout": {
              "type": "string"
            }
          },
          "required": [
            "checkin",
            "checkout"
          ]
        },
        "additionalneeds": {
          "type": "string"
        }
      },
      "required": [
        "firstname",
        "lastname",
        "totalprice",
        "depositpaid",
        "bookingdates",
        "additionalneeds"
      ]
    }
  },
  "required": [
    "bookingid",
    "booking"
  ]}


   //validate: AJV library
  
   let validate=ajv.compile(schema)

    let isValid=validate(jsonResponse);

    if(!isValid)
    {
        console.log("Schema Errors: ",validate.errors);
        
               
    }
expect(isValid).toBeTruthy();
console.log("Schema validation completed!");

    

})















