const {expect,test} = require('@playwright/test')
const baseURL = 'https://demoqa.com'

test.describe('Elements', ()=>{
    test('text box', async({page})=>{
        await page.goto('https://demoqa.com/text-box')
        await page.locator('#userName').fill('Test Account')
        await page.locator('#userEmail').fill('test@test.com')
        await page.locator('#currentAddress').fill('Test address location')
        await page.locator('#permanentAddress').fill('test permanent address')
        await page.locator('#submit').click()

        await expect(page.locator('#output')).toHaveText('Name:Test AccountEmail:test@test.comCurrent Address :Test address location Permananet Address :test permanent address')
    })


    test('check box', async({page})=>{
        await page.goto('https://demoqa.com/checkbox')
        await page.locator('.rct-checkbox').first().check()
        await page.locator('[title="Toggle"]').first().click()
        await expect(page.locator('.rct-checkbox').first()).toBeChecked()
        await expect(page.locator('.rct-checkbox').nth(1)).toBeChecked()
        await expect(page.locator('.rct-checkbox').nth(2)).toBeChecked()
        await expect(page.locator('.rct-checkbox').nth(3)).toBeChecked()
    })

    test('radio button', async ({page})=>{
        await page.goto(`${baseURL}/radio-button`)
        await page.getByText('Yes').click();
        await expect(page.getByText('Yes').first()).toBeChecked();
    })

    test.only('web table', async ({page})=>{
        await page.goto(`${baseURL}/webtables`)
        await page.locator('#addNewRecordButton').click();
        await page.locator('#firstName').fill('Test')
        await page.locator('#lastName').fill('Account')
        await page.locator('#userEmail').fill('test@test.com')
        await page.locator('#age').fill('50')
        await page.locator('#salary').fill('10,000')
        await page.locator('#department').fill('test department')
        await page.locator('#submit').click()
        await expect(page.getByText('Test')).toBeVisible
    })
})