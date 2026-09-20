import { Locator, Page, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, TestAnnotation, TestType } from "@playwright/test";


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

export async function attachScreenshot(page:Page,test:TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>)
{
    //Manually  we are attaching screenshot in report
    let screenshotReport=await page.screenshot({fullPage:true});
    test.info().attach("AmazonAppFullPage",{
        body:screenshotReport,
        contentType:'image/png'
    })
    
}