


/*
To create your own fixture, use test.extend()
 to create a new test object that will include it.
*/

import {test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { InventoryPage } from "../pages/InventoryPage.js";


// Declare the  data types of your fixtures.
type pageFixtures={
loginPage:LoginPage,//here loginPage is variable type of LoginPage class object


}

// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test=baseTest.extend<pageFixtures>({

loginPage:async({page},use)=>{
let loginPage=new LoginPage(page);
await loginPage.goToLoginPage();
await use(loginPage);//Use is object which supply current fixture to your test
}

})

export {expect} from "@playwright/test";