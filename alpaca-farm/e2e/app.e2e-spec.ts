import { AlpacaFarmPage } from './app.po';

describe('alpaca-farm App', () => {
  let page: AlpacaFarmPage;

  beforeEach(() => {
    page = new AlpacaFarmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
