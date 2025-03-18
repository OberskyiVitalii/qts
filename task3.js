const { Builder, Browser, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser(Browser.CHROME).build();

const infinityScroll = async () => {
  await driver.get("https://the-internet.herokuapp.com/infinite_scroll");

  for (let i = 0; i < 10; i++) {
    await driver.executeScript(
      "window.scrollTo(0, document.body.scrollHeight);"
    );
    await driver.sleep(1000);
  }

  await driver.quit();
};

infinityScroll();
