import { BugtringPage } from './app.po';

describe('bugtring App', () => {
  let page: BugtringPage;

  beforeEach(() => {
    page = new BugtringPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
