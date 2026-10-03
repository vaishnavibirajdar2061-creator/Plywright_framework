

import {test,expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";

//AAA: Arrange--->Act--->Assert

test("Test for validate Application Url",async({page})=>{

    let loginPage=new LoginPage(page);
    await loginPage.goToLoginPage();
   let actUrl=await loginPage.getPageUrl();
  expect(actUrl).toBe("https://www.saucedemo.com/");
  console.log("Url of application matched! Url Is: "+actUrl);
   })


   test("Test for Application title",async({page})=>{
    let loginPage=new LoginPage(page);
    await loginPage.goToLoginPage();
    let actTitle=await loginPage.getPageTitle();
    expect(actTitle).toBe("Swag Labs");
    console.log("Title validated...title is: "+actTitle);
    
   })

   test("Test for Login function with valid Credentials",async({page})=>{
    let loginPage=new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.fillUserName("standard_user");
    await loginPage.fillPassword("secret_sauce");
    await loginPage.clickOnLoginButton();
    await expect(page).toHaveURL(/inventory/);
    console.log("User login completed...User navigated to Inventory page!");
    
   })

   //negative scenario
   test("Test for login with invalid credentials",async({page})=>{
   let loginPage=new LoginPage(page);
   await loginPage.goToLoginPage();
   await loginPage.doLogin("standard_user","admin123");
   await expect(page).not.toHaveURL(/inventory/);
   console.log("Error Message:",await loginPage.getErrorMessage());
   })

 