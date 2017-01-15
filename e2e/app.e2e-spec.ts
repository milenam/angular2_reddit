import { Angular2redditPage } from './app.po';

describe('angular2reddit App', function() {
  let page: Angular2redditPage;

  beforeEach(() => {
    page = new Angular2redditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
