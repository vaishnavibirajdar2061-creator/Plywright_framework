/*

Method/function overloading
---------------------------------
Any method can be overloaded only when method has same name and define with
different signature in same class that is called method overloaded.

Signature
-------------
1.number of parameters
2.different type of parameters
3.change the order of parameter

Note:
--------------
In Js method overloading not supported
In ts we dont have full support for function overloading
In ts we can have prototype based function overloading


*/


//prototype signature

function calculation(num1:number,num2:number):number;
function calculation(num1:string,num2:number):string
function calculation(num1:boolean,num2:string):string
function calculation(num1:boolean,num2:boolean):boolean

function calculation(num1:any,num2:any):any
{
    return num1+num2;
}

//call
console.log(calculation(100,200));
console.log(calculation("Hi",100));
console.log(calculation(true,"Hello"));



