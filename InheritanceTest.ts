



//test all car

import {Car} from "./08_Inheritance.js"
import { BMW } from "./09Inheritanceclass2.js"
import { Audi } from "./Audi.js"


//Scenario1: Parent class ref and parent class Object: Parent class Methods

let c1:Car=new Car();
c1.start();
c1.refule();
c1.stop();

console.log("----------------");

//Scenario2: child class ref and child class object:parent +child

let b1:BMW=new BMW();
b1.start();//inherited
b1.refule();//inherited
b1.stop();//inherited
b1.autoEngine();//individual
b1.price();

console.log("----------------");

let a1:Audi=new Audi();
a1.autoGear();//individual
a1.start();
a1.refule();
a1.stop();
a1.price();
console.log("----------------");
//Special scenario: Parent ref and child object: Parent class 

let b2:Car=new BMW();
b2.start();
b2.refule();
b2.stop();
b2.price();//updated result









