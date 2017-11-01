import { GreedygamesPage } from './app.po';

describe('greedygames App', () => {
  let page: GreedygamesPage;

  beforeEach(() => {
    page = new GreedygamesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
