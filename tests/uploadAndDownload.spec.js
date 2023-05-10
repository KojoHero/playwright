const {expect,test} = require('@playwright/test')
const baseURL = 'https://demoqa.com'

test.describe('Elements - Upload and Download', ()=>{
    test('upload & download a file', async ({page})=>{
        const fs = require('fs');
        await page.goto(`${baseURL}/upload-download`)
        await page.locator('#uploadFile').click();
        await page.locator('#uploadFile').setInputFiles('./files/sampleFile.jpeg');

        const downloadPromise = page.waitForEvent('download');
        await page.locator('#downloadButton').click();
        const download = await downloadPromise;
        console.log(await download.path());
        const suggestedFileName = download.suggestedFilename()
        const filePath = 'files/' + suggestedFileName
        await download.saveAs(filePath)
        expect(fs.existsSync(filePath)).toBeTruthy()
        })
})