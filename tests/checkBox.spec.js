const {expect,test} = require('@playwright/test')

test.describe('Elements', ()=>{
    test('check box', async({page})=>{
        await page.goto('https://demoqa.com/checkbox')
        await page.locator('.rct-checkbox').first().check()
        await page.locator('[title="Toggle"]').first().click()
        await expect(page.locator('.rct-checkbox').first()).toBeChecked()
        await expect(page.locator('.rct-checkbox').nth(1)).toBeChecked()
        await expect(page.locator('.rct-checkbox').nth(2)).toBeChecked()
        await expect(page.locator('.rct-checkbox').nth(3)).toBeChecked()
    })
})