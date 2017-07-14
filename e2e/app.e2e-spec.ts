import { CarebearclubPage } from './app.po';

describe('carebearclub App', () => {
  let page: CarebearclubPage;

  beforeEach(() => {
    page = new CarebearclubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
