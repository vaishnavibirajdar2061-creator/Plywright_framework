/*
Data Abstraction
-------------------
It is a process where internal structure of software is hided and from
the user and only relevant information is provided to the user

What is purpose?
----------------------
Information hiding

Real time Example
-------------------------
1.ATM
2.Google Map

How to implement?
------------------------
1.Using Abstract class(partial abstraction)
2.Using interface(100% abstraction)

Abstract class
====================
- Any class which is declare with abstract keyword and which
has implemented method(method with body) and nonimplemented method(method without body)
such class called abstract

-method without body we can declare using abstract keyword soit is called 
abstract method

-we can not create object of abstract clas

-To implement allthe non implemented method from abstract class
we need child class

-Abstract class support partial abstraction

2.Using Interface(100% abstraction)
======================================
- It is special class which has all the methods are by defualt
abstract and public method

-Interface methods implemented by child class

-Can not create object of interface

- Multiple Inheritance +Hybrid Inheritance possible to achieve using interface

In Typescript we can use interface at object levela and class level

In Object literal we use interface as Prototype
*/

//object level interface
//protoype
interface usertype
{
    //properties
    name:string,
    id:number,
    city:string,

    //methods
    coding():void,
    testing():void

}


let user1:usertype={

    name:"Jay",
    id:1010,
    city:"Pune",

    coding():void{
        console.log('coding impemented by user1');
        
    }
,
    testing():void{
        console.log('testing impemented by user1');

    }
}

console.log(user1);
user1.coding();
user1.testing();

console.log("------------------");

let user2:usertype={
 name:"Smita",
    id:2010,
    city:"Pune",

    coding():void{
        console.log('coding impemented by user1');
        
    }
,
    testing():void{
        console.log('testing impemented by user1');

    }
}

console.log(user2);

user2.testing();









