for(let i=1;i<=4;i++)
{
    let row="";
    for(let j=1;j<=4;j++)
    {
       row=row+"*";
       
    }
    console.log(row);
       
}
/*
****
****
****
****
*/

console.log("--------------");
/*
*
**
***
****
*/
for(let i=1;i<=4;i++)
{
    let row="";
    for(let j=1;j<=i;j++)
    {
        row=row+"*";
    }
    console.log(row);
    
}
console.log("--------------");
/*
1
12
123
1234
*/
for(let i=1;i<=4;i++)
{
    let row="";
    for(let j=1;j<=i;j++)
    {
        row=row+j;
    }
    console.log(row);
    
}


console.log("--------------");
/*
1
22
333
4444
*/
for(let i=1;i<=4;i++)
{
    let row="";
    for(let j=1;j<=i;j++)
    {
        row=row+i;
    }
    console.log(row);
    
}

console.log("--------------");
/*
1
23
456
78910
*/
let k=1;
for(let i=1;i<=4;i++)
{
    let row="";
    for(let j=1;j<=i;j++)
    {
        row=row+k;
        k++;
    }
    console.log(row);
    
}




