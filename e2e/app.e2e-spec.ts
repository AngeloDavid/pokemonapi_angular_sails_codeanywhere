import { CrudePage } from './app.po';

describe('crude App', () => {
  let page: CrudePage;

  beforeEach(() => {
    page = new CrudePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
