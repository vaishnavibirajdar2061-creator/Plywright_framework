
import { Car } from "./08_Inheritance.js";

export class Audi extends Car
{
    autoGear():void
    {
        console.log("Audi.....autoGear()");
        
    }
    //ts
   override price():void{
        console.log("Audi....55L");
        
    }
}