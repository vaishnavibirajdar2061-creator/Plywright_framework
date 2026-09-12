

import {test,expect, Locator} from "@playwright/test"


test("Test for Right click Action",async({page})=>{


page.on('dialog',async(alertBox)=>{
console.log("Alert type is: "+alertBox.type());
console.log("Alert text is: "+alertBox.message());

//ok
await alertBox.accept();


})



await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

//rightclick
await page.getByText("right click me").click({button:'right'});

//get the menu
let allOptions:Locator[]=await page.locator("ul.context-menu-list>li>span").all();

for(let i of allOptions)
{
    console.log(await i.innerText());
    if((await i.innerText()).includes('Copy'))
    {
        //click
        await i.click();//alert will appear
        break;
    }
    
    
}

await page.waitForTimeout(2000);

})


test("Test for DoubleClick action",async({page})=>{

page.on('dialog',async(alertBox)=>{
console.log("Type of Alert is: "+alertBox.type());
console.log("Alert text is: "+alertBox.message());

//ok
await alertBox.accept();


})

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    await page.getByRole('button',{name:'Double-Click Me To See Alert'}).dblclick();

    await page.waitForTimeout(2000);
})



test.only("Test for Mouse hover",async({page})=>{

    await page.goto("https://www.naukri.com/");

//mouse hover on Jobs
await page.getByText("Jobs").first().hover();

let allOptions:Locator[]=await page.locator("div.nI-gNb-Jobs>ul>li>a").all();

for(let i of allOptions)
{
    console.log(await i.innerText());
    if((await i.innerText()).includes("MNC jobs"))
    {
        await i.click();
        break;
    }
    
}


await page.waitForTimeout(2000);
})