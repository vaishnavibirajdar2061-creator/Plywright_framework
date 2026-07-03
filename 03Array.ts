


//Arrays are dynamic 

let marks:number[]=[70,80,56,78];
console.log(marks);


let location:string[]=['Pune',"Delhi",'Mumbai'];
console.log(location);
console.log(location.length);//3
console.log(location[1]);//Delhi
location.push("Nashik");
console.log(location);

//declaration of array using Array Interface

let product:Array<string>=['display','keyboard','mouse'];
console.log(product);


let sid:Array<number>=[101,102,103,104];
console.log(sid);


let device:Array<string|number>=['mobile',898909,'monitor',798789,'printer'];
console.log(device.length);
console.log(device);



/*Static Array:size of array is fixed

touple: A touple is fixed length of array in typescript
As it is fixed length so each position has specific type
*/


let studentData:[string,number]=['Sumit',1010];
console.log(studentData.length);
console.log(studentData);
console.log(typeof studentData);


let person:[string,string,number,boolean,number]=['kiran','patil',30,true,68780989];
console.log(person);
console.log(person.length);

//during compilation code convert into js thats the reason its allowed
person.push("pune");
console.log(person);











