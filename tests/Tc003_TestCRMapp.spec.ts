
import {test} from "@playwright/test"
//page: Isolated Page instance, created for each test.
test("Test for CRM app launch",async({page})=>{

    //open application
    await page.goto("https://automationplayground.com/crm/");
    console.log("Title is: "+await page.title());
    console.log("Current url: "+page.url());
    
    

})