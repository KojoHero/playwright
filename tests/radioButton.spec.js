const {expect,test} = require('@playwright/test')
const baseURL = 'https://demoqa.com'

test.describe('Elements', ()=>{
    test('radio button', async ({page})=>{
        await page.goto(`${baseURL}/radio-button`)
        await page.getByText('Yes').click();
        await expect(page.getByText('Yes').first()).toBeChecked();
    })
})