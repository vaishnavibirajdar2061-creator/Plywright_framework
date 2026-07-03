

let user:{name:string,id:number,city:string,isActive:boolean}={
    name:"Jay",
    id:1010,
    city:'Pune',
    isActive:true
}
console.log(user);
console.log(typeof user);

/*
type alise
------------------------
To cdeclare custom type of object in ts we have type keyword: type alise
using this type we can create prototype for object and we can use it for Object 

*/

//prototype
type userType={name:string, readonly id:number,city:string,isActive:boolean};

let newUser:userType={
    name:"Jay",
    id:1010,
    city:'Pune',
    isActive:true
}
console.log(newUser);
//Property 'phno' does not exist on type 'userType'.
//newUser.phno=87989;


let empData:userType={
    name:"Saritha",
    id:1010,
    city:'Pune',
    isActive:true
}

console.log(empData);
//Cannot assign to 'id' because it is a read-only property.
//empData.id=2020;
console.log(empData);


/*
const for ts allowed for variable/object but readonly applicable for Object
*/

const pi:number=3.14;


