

import {Page} from "@playwright/test";



/*
BasePage is required for to initialize every pageClass(login,inventory,cart,checkout,Overview)
readonly is property we can use to create constant object properties where no
on can modify it once describe

*/

export class BasePage
{

//for page fixture
protected readonly page;

constructor(page:Page)//from playwright
{
    this.page=page;
}

//common setup

async getPageTitle():Promise<string>
{

    return await this.page.title();

}


async getPageUrl():Promise<string>
{
return this.page.url();
}


async addWait():Promise<void>
{
    await this.page.waitForTimeout(2000);

}



}