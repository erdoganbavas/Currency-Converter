import { ConverterPage } from './app.po';

describe('converter App', () => {
  let page: ConverterPage;

  beforeEach(() => {
    page = new ConverterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
