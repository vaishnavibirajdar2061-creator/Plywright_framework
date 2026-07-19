

import {Locator, test} from "@playwright/test"


test("Test for login functionality",async({page})=>{


    //open app
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
/*
    //email ele: identifyElement+validate+action
    let emailEle:Locator=page.locator("#input-email");
    console.log("Is EmailEle is visible: "+await emailEle.isVisible());
    console.log("Is emailEle is editable: "+await emailEle.isEditable());
    console.log("Is Element is enable "+await emailEle.isEnabled());

    //action
    await emailEle.fill("test@gmail.com");
*/

//identify element +action
await page.locator("#input-email").fill("test@gmail.com");

    
    
    await page.waitForTimeout(2000);


})