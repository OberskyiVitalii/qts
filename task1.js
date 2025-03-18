const { Builder, Browser, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser(Browser.CHROME).build();

const openContextMenu = async () => {
  await driver.get("https://the-internet.herokuapp.com/context_menu");
  const box = await driver.findElement(By.id("hot-spot"));

  await driver.actions().contextClick(box).pause(1000).perform();

  await driver.sleep(1000);

  await driver.switchTo().alert().accept();

  await driver.sleep(1000);

  await driver.quit();
};

openContextMenu();
