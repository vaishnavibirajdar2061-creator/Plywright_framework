


function orderPizza()
{
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve("Pizza will ready in 5sec")
        },5000);

    })

   
}

//calling
let status=orderPizza();
//console.log(status);//Promise { <pending> }

//Way1
// orderPizza().then((res)=>{
//     console.log("Pizza status is:");
//     console.log(res);

// })

console.log("--------------");

//way2: async function and await keyword

async function test()
{
    let status=await orderPizza();
    console.log(status);
    
}

//test();


console.log("--------------------");


class Product
{

    //data
    pid;
    pname;


    //constructor
    constructor(pid,pname)
    {   
        this.pid=pid;
        this.pname=pname;
    }


    //methods
    getData()
    {
        console.log("Product name is: "+this.pname);
        console.log("Product id: "+this.pid);
        
        
    }



}

//Outside of Class we create object

let p1=new Product(1010,"Keyboard");
p1.getData();