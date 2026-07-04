import { Car } from "./08_Inheritance.js";


export class BMW extends Car
{
    autoEngine():void
    {
        console.log("BMW....autoEngine()");
        
    }
//ts
   override price():void{
        console.log("BMW....50L");
        
    }
}
