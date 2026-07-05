/*

Encapsulation=private data and public method
*/

class Employee
{
    eid:number;
    ename:string;
private esalary:number=50000;//hide

constructor(id:number,name:string)
{
    this.eid=id;
    this.ename=name;
}
//method
getData():void{
console.log("Employee id: "+this.eid);
console.log("Employee name: "+this.ename);
}

//setter
setSalary(sal:number):void{
this.esalary=sal;
}

//getter
getSalary():number{
    return this.esalary;
}


}

//object
let e1:Employee=new Employee(1010,"Poonam");
e1.getData();
console.log(e1.getSalary());

e1.setSalary(6878979809);

console.log(e1.getSalary());