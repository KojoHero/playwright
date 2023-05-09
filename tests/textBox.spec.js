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
})