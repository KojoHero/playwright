const {expect,test} = require('@playwright/test')
const baseURL = 'https://demoqa.com'

test.describe('Iframes',()=>{
    test('testing for iframes', async({page})=>{
        await page.goto(`${baseURL}/nestedframes`)
        const parentFrame = await page.frameLocator('#frame1')
        await expect(parentFrame.locator('body')).toContain('Parent frame')
    })
})