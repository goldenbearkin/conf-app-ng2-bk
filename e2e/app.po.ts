export class ConfAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('conf-app-app h1')).getText();
  }
}
