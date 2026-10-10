

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

test("Test for get cart product details",async({inventoryPage,cartPage})=>{
await inventoryPage.gotoCartPage();
let allProducts:string[]=await cartPage.getCartProductDetails();
expect(allProducts[0]).toBe(process.env.PRODUCTNAME!);
console.log("Product from cart: ",allProducts);
})

test("Test for Product remove from cart",async({inventoryPage,cartPage})=>{
await inventoryPage.gotoCartPage();
await cartPage.removeProduct();
await cartPage.addWait();
expect(cartPage.getCartProductDetails.length).toBe(0);
console.log("Product removed from cart!");
})

test("Test for Continue shopping",async({inventoryPage,cartPage})=>{
await inventoryPage.gotoCartPage();
await cartPage.addWait();
await cartPage.doContinueShipping();
await cartPage.addWait();
expect(await cartPage.getPageUrl()).toContain("inventory");
console.log("User navigated to inventory page");
})

test("Test for launch of checkout page",async({inventoryPage,cartPage})=>{
await inventoryPage.gotoCartPage();
await cartPage.gotoCheckoutPage();
expect(await cartPage.getPageUrl()).toContain("checkout");
console.log("User navigated to Checkout page!");

})