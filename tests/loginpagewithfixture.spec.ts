

//we are using custom fixture
import {test,expect} from "../src/fixtures/pagefixtures.js";
import {excelDDTSheetWiseDataReading} from "../src/utilities/ExcelDDT.js"
import {csvDDTUtil} from "../src/utilities/CsvDDT.js"

test("Test for Application url validation",async({loginPage})=>{
let appUrl:string=await loginPage.getPageUrl();
expect(appUrl).toBe("https://www.saucedemo.com/");
console.log("Current page url matched! "+appUrl);
})

test("Test for Application title",async({loginPage})=>{

    let appTitle=await loginPage.getPageTitle();
    expect(appTitle).toBe("Swag Labs");
    console.log("Application title matched! "+appTitle);
    
})

test("Test for loginFunctionality with valid credentials",async({loginPage,page})=>{

    await loginPage.doLogin(process.env.APPUSERNAME!,process.env.APPPASSWORD!);
    await expect(page).toHaveURL(/inventory/);
    console.log("User navigated to Inventory page!");
    
})

test("Test for login functionality with invalid credentials",async({loginPage})=>{

await loginPage.doLogin("","");
let message:string=await loginPage.getErrorMessage();
expect(message).toBe("Epic sadface: Username is required");
console.log("Error message for block username and passowrd: "+message);

})

//login functionality===>data driven testing//Excel file

let dataSet=excelDDTSheetWiseDataReading("Datadriventest");

for(let data of dataSet)
{
    test(`Test for invalid credentials with excel data driven for id ${data.id}`,async({loginPage})=>{

        await loginPage.doLogin(data.username,data.password);
        expect(await loginPage.getErrorMessage()).toBeTruthy()
        console.log("ErrorMessage is: "+await loginPage.getErrorMessage());
        
    })
}

//for csv

let csvDataSet=csvDDTUtil();
for(let data of csvDataSet)
{
 test(`Test for invalid credentials with csv data driven for id ${data.id}`,async({loginPage})=>{

        await loginPage.doLogin(data.username,data.password);
        expect(await loginPage.getErrorMessage()).toBeTruthy()
        console.log("ErrorMessage is: "+await loginPage.getErrorMessage());
        
    })
}