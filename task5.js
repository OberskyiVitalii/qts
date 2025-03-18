const { Builder, Browser, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser(Browser.CHROME).build();

const selectFromDropdown = async () => {
  await driver.get("https://the-internet.herokuapp.com/dropdown");
  const select = await driver.findElement(By.id("dropdown"));

  await select.click();

  await driver.sleep(1000);

  const options = await driver.findElements(By.css("option"));

  const option = await options[2].getText();

  await driver.actions().sendKeys(select, option).pause(1000).perform();

  await driver.sleep(1000);

  await driver.quit();
};

selectFromDropdown();
