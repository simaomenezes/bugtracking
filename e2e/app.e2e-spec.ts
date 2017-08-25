import { BugPage } from './app.po';

describe('bug App', () => {
  let page: BugPage;

  beforeEach(() => {
    page = new BugPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
