
import {test,expect} from "../src/fixtures/pagefixtures.js";
import { jsonUtil } from "../src/utilities/JsonUtil.js";
//precodition
test.beforeEach(async({loginPage,inventoryPage,cartPage})=>{
    await loginPage.doLogin(process.env.APPUSERNAME!,process.env.APPPASSWORD!);
    await loginPage.addWait();
    await inventoryPage.addProductToCart(process.env.PRODUCTNAME!);
    await loginPage.addWait();
    await inventoryPage.gotoCartPage();
    await cartPage.gotoCheckoutPage();
})

test("Test for checkout process",async({checkoutPage})=>{
    let data=jsonUtil(0);
    await checkoutPage.doContinueCheckoutProcess(data.firstname,data.lastname,data.postalcode);
    expect(await checkoutPage.getPageUrl()).toContain("checkout-step-two");
})

test("Test for Cancel checkout process",async({checkoutPage})=>{
await checkoutPage.doCancelCheckout();
expect(await checkoutPage.getPageUrl()).toContain("cart");
})