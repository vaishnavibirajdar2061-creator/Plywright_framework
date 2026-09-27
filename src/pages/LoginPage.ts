
/*
-Every page should follow encapsulation principle
(private data + public method)

- Every page should be child of BasePage(Parent)
- From basPage we can use playwright fixture

*/

import {BasePage} from "./BasePage.js"
import {Page} from "@playwright/test";

export class LoginPage extends BasePage
{

//locators(data)
private readonly username;
private readonly password;
private readonly loginButton;
private readonly errorMessage;

//constructor: To initialize locators/webelement
constructor(page:Page)
{
    super(page);//here initialize loginPage by BasePage
    this.username=page.getByPlaceholder("Username");
    this.password=page.getByPlaceholder("Password");
    this.loginButton=page.getByRole('button',{name:"Login"});
    this.errorMessage=page.locator("h3[data-test='error']");

}

//action commands in Method

async goToLoginPage():Promise<void>
{
    await this.page.goto("/");
    //read base url from playwright config file
}

async fillUserName(un:string):Promise<void>
{
await this.username.fill(un);
}

async fillPassword(psw:string):Promise<void>
{
    await this.password.fill(psw);

}

async clickOnLoginButton():Promise<void>
{
    await this.loginButton.click();
}

async doLogin(un:string,psw:string):Promise<void>
{
await this.username.fill(un);
await this.password.fill(psw);
await this.clickOnLoginButton();

}

async getErrorMessage():Promise<string>
{
    return await this.errorMessage.innerText();
}

}