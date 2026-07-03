


function test1(num1:number,num2:number):number
{
return num1+num2;
}

let res:number=test1(10,20);
console.log(res);

//default parameters
function getData(name:string,clgName:string="AISSPMS")
{
console.log(name+" : "+clgName);

}
getData("Sumit");
getData("Jay","Wadia");

/*
optional parameters: in Ts we specify with ?
optional parameter should be last parameter for function
multiple optional parameters allowed
*/

function getInfo(name:string,age?:number)
{
console.log(name);

if(age)
{
    console.log(age);
    
}

}
getInfo("Jay");
getInfo("Sumit",25);
getInfo('Seema');


console.log("-------------------");

//scenario: run test case with or without ui(headless)


function launchBrowser(bname:string,headless?:boolean)
{
    if(headless)
    {
        console.log("Run test case with headless on browser: "+bname);
        
    }else{
    console.log("Run test with UI using: "+bname);
    }
    
    

}

launchBrowser('chrome');
launchBrowser('edge',true);


function search(pname:string,price:number,brandName?:string,size?:number)
{
    if(brandName && size)
    {
        console.log("Product search with name: "+pname+" price: "+price+" brandName: "+brandName+"size:"+size);
        
    }else{
        console.log("Product search with name: "+pname+" & price: "+price);
        
    }

}

search("watch",89798);
search("iphone",990809,'inv',12);






