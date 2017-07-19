import { GcNg2Page } from './app.po';

describe('gc-ng2 App', () => {
  let page: GcNg2Page;

  beforeEach(() => {
    page = new GcNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
