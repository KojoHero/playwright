test.describe('Elements', ()=>{
    test('links', async ({browser})=>{
        //open link in a new tab
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto('https://demoqa.com/links')
        const newTabLink = page.locator('#simpleLink')

        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            newTabLink.click()
        ])
        await expect(newPage).toHaveTitle('DEMOQA')
    })
})