const { By } = require("selenium-webdriver/lib/by");
const until = require('selenium-webdriver/lib/until');


class SearchPage {
    constructor(driver) {
        this.driver = driver;
    }

    async DatePicker() {
    let dateField = await driver.findElement(By.id('datepicker'));
        dateField.sendKeys('2022-11-01', Key.RETURN);
    }
    async DatePicker2() {
        let dateField = await driver.findElement(By.id('datepicker'));
            dateField.sendKeys('2022-11-12', Key.RETURN);
        }

        async ClickTextField() {
            return await driver.findElement(By.name('sf_TextFilter')).click();
        }

        async InputData() {
          return await driver.findElement(By.name('sf_TextFilter')).sendKeys('THE HAMLETMACHINE');
    
        }
      
        

}

module.exports = SearchPage;