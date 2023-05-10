const {expect,test} = require('@playwright/test')
const baseURL = 'https://demoqa.com'

test.describe('Elements', ()=>{
    test('buttons', async ({page})=>{
        await page.goto(`${baseURL}/buttons`)
        await page.locator('#doubleClickBtn').dblclick();
        await page.locator('#rightClickBtn').click({button:'right'})
        await page.getByRole('button', {name: 'Click Me', exact:true}).click()
        await expect(page.locator('doubleClickMessage')).toBeVisible
        await expect(page.locator('rightClickMessage')).toBeVisible
        await expect(page.locator('dynamicClickMessage')).toBeVisible
    })
})