

import {test,expect,Locator} from "@playwright/test"

test("Test forbootstrap dropdown",async({page})=>{

    await page.goto("https://demoqa.com/select-menu");

    //click 
    await page.locator("div#selectOne").click();
    let allOptions:Locator[]=await page.locator("//div[contains(@id,'listbox')]//div[contains(@id,'react-select')]").all();
    console.log("Total options are: "+allOptions.length);//7

    for(let option of allOptions)
    {
        console.log(await option.innerText());
        if((await option.innerText()).includes("Prof."))
        {
            await option.click();
            break;
        }
        
    }

    await page.waitForTimeout(2000);
})