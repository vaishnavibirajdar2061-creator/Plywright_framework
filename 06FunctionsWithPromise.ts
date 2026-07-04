

function orderPizza():Promise<string>
{
    return new Promise((resolve,reject)=>{
       
        setTimeout(() => {
            resolve("Pizza will ready in 2sec!")
        }, 2000);
    })
}

//console.log(orderPizza());

//way1
// orderPizza().then((res)=>{
// console.log(res);

// })


//way2:
async function test()
{
    let status=await orderPizza();
    console.log(status);
    
}

//test();

console.log("-----------------");



function getTrainerName():Promise<String>
{
    return Promise.resolve("Priyanka");
}

function getId():Promise<number>
{
    return Promise.resolve(1010);
}

function getTitle():Promise<string>
{
    return Promise.resolve("Facebook Title");
}

function getData():Promise<void>
{
    return Promise.resolve();
}

//to handle promise declare async function and use await keyword

async function testTrainerName()
{
    let name=await getTrainerName();
    console.log(name);
    
}

//call
testTrainerName();


//title
async function testTitle()
{
    let title=await getTitle();
    console.log("Application title is: "+title);
    
}

testTitle();

console.log("-----------------------");
//Playwright

function click(webelement:string):Promise<void>
{
console.log("Click on:  "+webelement);
return Promise.resolve();

}

//handle this creating utility
async function doClick(element:string)
{
    await click(element);
} 

doClick('loginButton');
doClick("Forgotten Password Link");



