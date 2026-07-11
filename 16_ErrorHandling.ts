
/*
Error is predefined interface in ts
Whenever Error occurs we need to handle it
*/

console.log(10/0);//Infinity

//if you customize any error so you can throw error

function div(num1:number,num2:number):number
{
    if(num2===0)
    {
        //throw error
        throw new Error("Cannot divide any number by 0");
    }else
    {
        return num1/num2;
    }
}

//call
console.log("division is:" +div(10,5));
//console.log(div(10,0));
console.log("----done----");

console.log("---------------------");

let requestPayload=`{
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}`

console.log(requestPayload);
/*
function parsing()
{
    //JSON string--->Js object
    let jsObject=JSON.parse("Hello All");//SyntaxError: Unexpected token 'H', "Hello All" is not valid JSON
    console.log(jsObject);
    
}

//call
parsing();
*/

//how to handle error->try-catch block
console.log("---------------");

function parsing()
{
    try{
    let jsObject=JSON.parse("Hello All");//SyntaxError: Unexpected token 'H', "Hello All" is not valid JSON
    console.log(jsObject);
    }catch(error)
    {
        console.log("Please provide valid JSON string");
        
    }
    
    
}

//call
parsing();

console.log("-----------");

function division(num1:number,num2:number):number
{
    try{

     if(num2===0)
    {
        //throw error
        throw new Error("Cannot divide any number by 0");
    }else
    {
        return num1/num2;
    }
}
catch(error)
{
    console.log("Please use other number than 0 otherwise: "+error);
    return 0;
}
}

division(10,0);


/*Finally block
-----------------------
Finally block will run with or without errors
So any special code which you wanted to run with errors or without error that
you add inside the finally block
*/


function browserTest(bname:string)
{
    try{

    if(bname==='ie')
 {
    throw new Error("Invalid Browser!");
 }
 else{
    console.log("Test is executing on : "+bname);
    
 }
}catch(e)
{
console.log("Provide appropriate browser name");

}

finally{
    console.log("Finally block is calling....");
    console.log("Verify Browsers for Test...");
       
}

}

browserTest('chrome');
console.log("--------------------");
browserTest('ie');