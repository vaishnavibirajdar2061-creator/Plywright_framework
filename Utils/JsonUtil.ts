
import fs from "fs";

export function jsonUtil(index:number):any
{
    let data=JSON.parse(fs.readFileSync("TestData/CRMMultipleDataSet.json","utf-8"));
    return data[index];
}

