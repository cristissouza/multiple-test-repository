import { browser, ExpectedConditions as EC } from 'protractor';

class Helper {
  openPage(url) {
    browser.ignoreSynchronization = true;
    return browser.get(url);
  }

  waitForElement(subject, timeout = 5000) {
    return browser.wait(EC.visibilityOf(subject), timeout);
  }

  waitForElementToBeClickable(subject, timeout = 5000) {
    return browser.wait(EC.elementToBeClickable(subject, timeout));
  }

  waitForElementNotPresent(subject, timeout = 5000) {
    return browser.wait(EC.invisibilityOf(subject), timeout);
  }

  checkURLContains(url) {
    return browser.wait(EC.urlContains(url), 5000);
  }
}

module.exports = new Helper();
