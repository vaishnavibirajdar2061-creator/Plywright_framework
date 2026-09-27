

//we are using custom fixture
import {test,expect} from "../src/fixtures/pagefixtures.js";


test("Test for loginFunctionality with valid credentials",async({loginPage,page})=>{

    await loginPage.doLogin("standard_user","secret_sauce");
    await expect(page).toHaveURL(/inventory/);
    console.log("User navigated to Inventory page!");
    
})
