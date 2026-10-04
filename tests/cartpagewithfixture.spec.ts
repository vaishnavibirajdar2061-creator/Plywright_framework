

import {test,expect} from "../src/fixtures/pagefixtures.js"

//precodition
test.beforeEach(async({loginPage,inventoryPage})=>{

    await loginPage.doLogin(process.env.APPUSERNAME!,process.env.APPPASSWORD!);
    await loginPage.addWait();
    await inventoryPage.addProductToCart(process.env.PRODUCTNAME!);


})

test("Test for Launch of cart page",async({inventoryPage})=>{

    await inventoryPage.gotoCartPage();
    //assertion
    expect(await inventoryPage.getPageUrl()).toContain("cart");

})