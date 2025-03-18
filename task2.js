const { Builder, Browser, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser(Browser.CHROME).build();

const changeCheckboxes = async () => {
  await driver.get("https://the-internet.herokuapp.com/checkboxes");

  const checkboxes = await driver.findElements(
    By.css("input[type='checkbox']")
  );

  for (const checkbox of checkboxes) {
    (await checkbox.isSelected()) ? checkbox.click() : checkbox.click();
  }

  await driver.sleep(2000);

  await driver.quit();
};

changeCheckboxes();
