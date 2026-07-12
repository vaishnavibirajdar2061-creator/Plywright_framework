
import {test} from "@playwright/test";


test("Test for application launch",async({page})=>{

    //open application
    await page.goto("https://www.google.com");

})