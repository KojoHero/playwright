test.describe('Elements', ()=>{
    test('web table', async ({page})=>{
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