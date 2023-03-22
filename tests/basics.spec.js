const {test, expect}  = require('@playwright/test')


test('browser context declaration', async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://demoqa.com')  
})

test('using default page', async ({page})=>{
    await page.goto('https://demoqa.com')  
    await expect(page).toHaveTitle('DEMOQA')
})