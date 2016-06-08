import { ConfAppPage } from './app.po';

describe('conf-app App', function() {
  let page: ConfAppPage;

  beforeEach(() => {
    page = new ConfAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('conf-app works!');
  });
});
