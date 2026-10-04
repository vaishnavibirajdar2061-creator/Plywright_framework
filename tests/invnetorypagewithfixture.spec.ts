

import {test,expect} from "../src/fixtures/pagefixtures.js"

test("Test for Product count validation",async({loginPage,inventoryPage})=>{
await loginPage.doLogin(process.env.APPUSERNAME!,process.env.APPPASSWORD!);
await loginPage.addWait();
let totalProduct:number=await inventoryPage.getTotalProductCount();
expect(totalProduct).toBe(6);
console.log("Total products count match "+totalProduct);

})

test("Test for Product details",async({loginPage,inventoryPage})=>{
await loginPage.doLogin(process.env.APPUSERNAME!,process.env.APPPASSWORD!);
await loginPage.addWait();
let allProducts=await inventoryPage.getProductDetails();
expect(allProducts.length).toBe(6);
console.log("------Total Product details-----");
console.log(allProducts);
})

test("Test for add product into cart",async({loginPage,inventoryPage})=>{
await loginPage.doLogin(process.env.APPUSERNAME!,process.env.APPPASSWORD!);
await loginPage.addWait();
let productName=await inventoryPage.addProductToCart(process.env.PRODUCTNAME!);
expect(productName).toBe(process.env.PRODUCTNAME!);
console.log("Product added into cart: "+productName);
})

test("Test for Footerlink validation",async({loginPage,inventoryPage})=>{
await loginPage.doLogin(process.env.APPUSERNAME!,process.env.APPPASSWORD!);
await loginPage.addWait();
let footerCount=await inventoryPage.getFooterLinksCount();
expect(footerCount).toBe(3);
console.log("Footer links count validated which is "+footerCount);
})

test("Test for navigation to cart page",async({loginPage,inventoryPage})=>{
await loginPage.doLogin(process.env.APPUSERNAME!,process.env.APPPASSWORD!);
await loginPage.addWait();
await inventoryPage.gotoCartPage();
await loginPage.addWait();
expect(await inventoryPage.getPageUrl()).toContain("cart");
console.log("User navigated to cart page");

})