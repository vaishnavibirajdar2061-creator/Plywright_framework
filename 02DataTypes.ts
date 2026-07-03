/*
DataTypes in TypesScript
--------------------------
number,string,boolean,null,undefined,any,unknown,void,never,union,touple

variable syntax
------------------
let/const variableName:datatype=value
*/

//variable
let id:number=101;
  console.log(id);//101
  console.log(typeof id);//number
  

let isActive:boolean=true;
console.log(isActive);//true
console.log(typeof isActive);//boolean

let fname:string="Kiran";
console.log(fname);//kiran
console.log(typeof fname);//string

let age:null=null;
console.log(age);//null
console.log(typeof age);//object

//undefined
let data;
console.log(data);//undefined
console.log(typeof data);//undefined

console.log("------new Data types from Typescript------");
//1.any type: any type of data we can add

let testValue:any;
testValue=100;
testValue="Selenium";
testValue=true;
//testValue=null;

console.log(testValue);
console.log(typeof testValue);

//2.unknown: something which is not known
//no difference between any and unknown

let report:unknown;
report=111;
report="abcd";
report=false;
console.log(report);//false
console.log(typeof report);//boolean

//Function
//3.void type: voidwe use to define return type to function
//void means function does not return any value


function test():void
{
    console.log("Testing Application in Production....");
    
}

test();

//function with return type
function add(a:number,b:number):number
{
return a+b;
}

let result:number=add(100,200);
console.log(result);

let t1=function():void
{
console.log("This is Anonymous function call....");

}

t1();


//function with return type
let t2=function(sname:string):string
{
//console.log("Hello "+sname);
return "Hello "+sname;
}

let res:string=t2("Pravin");
console.log(res);

console.log("----------------");
/*
4.never: this is applicable for function
functions which never complete normally there we can use never.
- function run forever
- function which throw error

*/

//Scenario: test executing on env: QA,Stage,Prod ,Error UAT

function testEnv(envName:string):void
{
  if(envName==='UAT')
  {
    throw new Error("Invalid Env for Test: "+envName);
  }else{
    console.log("Valid Env for Test!");
    
  }
}

function testWrongEnv(envName:string):never
{
  throw new Error("Invalid Env For Test! "+envName);
}

//testWrongEnv("UAT");

function test2():never
{
for(;;)
{
  console.log("Hi");
  
}
}

test2();



//5.Union (|): A union type allows variable to have more than one type

let postalcode:number|string;

postalcode=123456;
postalcode="SA45455";

console.log(postalcode);


   