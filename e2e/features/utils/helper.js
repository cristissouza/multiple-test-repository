const { browser, ExpectedConditions} = require('protractor');

class Helper {
  openPage(url) {
    browser.ignoreSynchronization = true;
    return browser.get(url);
  }

  waitForElement(subject, timeout = 5000) {
    browser.ignoreSynchronization = true;
    return browser.wait(ExpectedConditions.visibilityOf(subject), timeout);
  }

  waitForElementToBeClickable(subject, timeout = 5000) {
    return browser.wait(ExpectedConditions.elementToBeClickable(subject, timeout));
  }

  waitForElementNotPresent(subject, timeout = 5000) {
    return browser.wait(ExpectedConditions.invisibilityOf(subject), timeout);
  }

  checkURLContains(url) {
    return browser.wait(ExpectedConditions.urlContains(url), 7000);
  }

  waitElement(element){
    return browser.wait(element);
  }
}

module.exports = new Helper();
