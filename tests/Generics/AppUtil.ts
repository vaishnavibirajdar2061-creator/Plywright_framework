import { Locator, Page } from "@playwright/test";


export async function scrollDown(page:Page)
{
    await page.evaluate(()=>{
        window.scrollTo(0,document.body.scrollHeight);
    })
}

export async function scrollUp(page:Page)
{
await page.evaluate(()=>{
        window.scrollTo(document.body.scrollHeight,0);
    })
}

export async function scrollToTheElement(page:Page,loc:Locator)
{
await loc.scrollIntoViewIfNeeded();
}