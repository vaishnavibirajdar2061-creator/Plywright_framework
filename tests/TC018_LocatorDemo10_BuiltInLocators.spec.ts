

import {test,expect} from "@playwright/test";


test("Test for Built In locator getByRole()",async({page})=>{

    await page.goto("https://automationplayground.com/crm/");

    //SignIn getByRole('role',{name:'accessibility name'})
   await page.getByRole('link',{name:"Sign In"}).click();

    //email
    await page.getByRole('textbox',{name:"Enter email"}).fill("test@gmail.com");

    //password
    await page.getByRole('textbox',{name:"Password"}).fill("test123");

    //checkbox
    await page.getByRole('checkbox',{name:"Remember me"}).check();

    //submit
    await page.getByRole('button',{name:"Submit"}).click();


await page.waitForTimeout(2000);





})