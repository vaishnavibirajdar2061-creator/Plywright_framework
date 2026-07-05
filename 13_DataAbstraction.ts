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



*/

abstract class Page
{

//implemented 
pageLoad():void
{
console.log("Page is loading in 2sec...");

}

//non implemented(abstract)
abstract getTitle():void;

abstract getUrl():void;
}

//object
//Cannot create an instance of an abstract class.
//let p1:Page=new Page();

//child class
class LoginPage extends Page{

getTitle(): void
{
   console.log("GetTitle implemented by child");
   
}

getUrl():void{
       console.log("GetUrl implemented by child");

}

getloginPage():void{
    console.log("This is calling from loginpage");
    
}


}

//Object 
//parent class ref and parent class object:Invalid
//Cannot create an instance of an abstract class.
//let p1:Page=new Page();

//child class ref and child class object:Parent +child
let lp:LoginPage=new LoginPage();
lp.pageLoad();//inherited
lp.getloginPage();//individual
lp.getTitle();//inherited abstract method
lp.getUrl();//inherited abstract method

console.log("------------------");

//parent ref and child object: parent class
let p1:Page=new LoginPage();
p1.pageLoad();
p1.getTitle();
p1.getUrl();







