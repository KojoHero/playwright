const {expect,test} = require('@playwright/test')
const baseURL = 'https://demoqa.com'

test.describe('All forms of alert',()=>{
    //normal alert
    test('normal alert', async({page})=>{
        await page.goto(`${baseURL}/alerts`)
        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain('alert')
            expect(dialog.message()).toContain('You clicked a button')
            await dialog.accept()
        })
        await page.locator('#alertButton').click()

    })

        //confirm box
    test('confirm dialog', async({page})=>{
        await page.goto(`${baseURL}/alerts`)
        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain('confirm')
            expect(dialog.message()).toContain('Do you confirm action?')
            await dialog.accept()
        })
        await page.locator('#confirmButton').click()
        await expect(page.locator('#confirmResult')).toHaveText('You selected Ok')
    })

        //prompt alert
    test.only('prompt dialog', async({page})=>{
        await page.goto(`${baseURL}/alerts`)
        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain('prompt')
            expect(dialog.message()).toContain('Please enter your name')
            expect(dialog.defaultValue()).toContain('')
            await dialog.accept('Test Account')
        })
        await page.locator('#promtButton').click()
        await expect(page.locator('#promptResult')).toHaveText('You entered Test Account')

    })
})