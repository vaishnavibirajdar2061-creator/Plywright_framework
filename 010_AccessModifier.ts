

/*
In typescript 3 modifiers allowed

1.private
2.public 
3.protected

Access Modifier Table
-------------------------
modifiers           sameClass       sabClass/childClass   outsidetheclass            
public                  yes                 yes                 yes
private                 yes                 No                  No
protected               yes                 yes                  No

Rule for Private data/method
---------------------------
Private data we can call in same class thats the reason you need 
to follow encapsulation means to access private data create public method
*/





class Tester
{

    public testerName="Priyanka";
    private salary=8779878;

    public testing():void{
        console.log("This is public method....testing()");
        
    }

    private coding():void{
        console.log("This is private method....coding()");
        
    }

    //encapsulation: to access private data use public method
    public getSalary():number
    {
        return this.salary;
    }

    //within same class
    public getCodeStatus():void
    {
        this.coding();
        this.monitor();//protected method i can call using public method in same class
    }

    protected monitor():void
    {
        console.log("This is protected method.....monitor()");
        
    }

}

//objects are outside the class

let t1:Tester=new Tester();
console.log(t1.testerName);
t1.testing();
//t1.coding();
//Property 'coding' is private and only accessible within class 'Tester'.

console.log(t1.getSalary());
t1.getCodeStatus();
//t1.monitor();
//Property 'monitor' is protected and only accessible within class 'Tester' and its subclasses.


//for protected method/data
class Emp extends Tester{


    public getEmpData()
    {
        console.log("This is Employee class public method ");
        
    }

    //protected data inside child class you can call only through child class Object
    public testProtected():void
    {
        //object of child
        let e1:Emp=new Emp();
        e1.monitor();//protected method
    }


}

//object of child id outside the class
let c1:Emp=new Emp();
c1.testing();//public methods

c1.testProtected();


