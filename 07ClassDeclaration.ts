

class Product
{
    pid:number;
    pname:string;

    constructor(pid:number,pname:string)
    {
        this.pid=pid;
        this.pname=pname;
    }

    getData():void
    {
        console.log("Product id: "+this.pid+" Name: "+this.pname);
        
    }

}

//Object

let p1:Product=new Product(2020,"Mobile");