const { Builder, Browser, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser(Browser.CHROME).build();

const search = async () => {
  await driver.get("https://the-internet.herokuapp.com/");
  const links = await driver.findElements(By.css("ul > li > a"));

  for (const link of links) {
    const url = await link.getAttribute("href");
    const name = await link.getText();
    console.log(`${name} - ${url}`);
  }

  await driver.quit();
};

search();
