require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');


describe('Buy Ticket', function () {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.tiketa.lt/EN/search');
        await driver.findElement(By.id('cookiescript_accept')).click();
        await driver.navigate().refresh();
    });

    it('Search for Ticket and Buy', async function() {
        await driver.wait(until.elementLocated(By.xpath('//h2[contains(text(),"Detailed search")]')), 10000);
        await driver.findElement(By.name('sf_TextFilter')).click();
        await driver.findElement(By.name('sf_TextFilter')).sendKeys('THE HAMLETMACHINE');
        await driver.findElement(By.xpath('//span[@id="arenaCaption"]')).click();
        await driver.findElement(By.xpath('//body/div[@id="main-container"]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]')).sendKeys('Artūro Areimos teatras');
        await driver.findElement(By.xpath('//a[contains(text(),"Artūro Areimos teatras")]')).click();
        let dateFrom = await driver.findElement(By.name('sf_DateFrom'));
        dateFrom.sendKeys('2022-11-01', Key.RETURN);
        let dateTo = await driver.findElement(By.name('sf_DateTo'));
        dateTo.sendKeys('2022-11-12', Key.RETURN);
        await driver.findElement(By.xpath('//button[contains(text(),"Search")]')).click();
        await driver.findElement(By.xpath('//button[contains(text(),"Buy")]')).click();  
        let header = await driver.findElement(By.xpath('//h4[contains(text(),"THE HAMLETMACHINE")]')).getText();
        assert.equal(header, 'THE HAMLETMACHINE Nukeliamas iš 2022 m. gegužės 14 d.');       
    });

    after(() => driver && driver.quit());
})