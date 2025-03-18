const { Builder, Browser, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser(Browser.CHROME).build();

const enterData = async () => {
  await driver.get("https://the-internet.herokuapp.com/inputs");

  const input = await driver.findElement(By.css("input[type='number']"));

  await input.sendKeys("42");

  await driver.sleep(1000);

  await driver.quit();
};

enterData();
