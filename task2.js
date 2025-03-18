const { Builder, Browser, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser(Browser.CHROME).build();

const dragAndMove = async () => {
  await driver.get("https://the-internet.herokuapp.com/drag_and_drop");

  const sourceElement = await driver.findElement(By.id("column-a"));
  const targetElement = await driver.findElement(By.id("column-b"));

  await driver
    .actions()
    .dragAndDrop(sourceElement, targetElement)
    .pause(1000)
    .perform();

  await driver.quit();
};

dragAndMove();
