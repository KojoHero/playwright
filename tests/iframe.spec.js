const {expect,test} = require('@playwright/test')
const baseURL = 'https://demoqa.com'

test.describe('Iframes',()=>{
    test('testing for iframes', async({page})=>{
        await page.goto(`${baseURL}/nestedframes`)
        await page.waitForSelector('iframe[id="#frame1"]')
        const parentFrame = await page.frame('iframe[name="#frame1"]')
        await parentFrame.waitForLoadState()
        const test = await parentFrame.evaluate(() => document.body.innerHTML)
        console.log(test)

        // console.log(parentFrame.content())
        // await expect(parentFrame.locator('body')).toContain('Parent frame')
    })
})