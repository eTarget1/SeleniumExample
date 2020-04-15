const { Builder, By, Key, util } = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();

// options.setPreference("browser.download.folderList", "C:\\myseleniumDownloads")
// options.setPreference("browser.download.folderList", 2);
// options.setPreference("browser.helperApps.neverAsk.saveToDisk", "application/x-csv")
async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://google.com');
  await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
}
example();

// const driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();
// driver.get('http://samplecsv.s3.amazonaws.com/Sacramentorealestatetransactions.csv'); 