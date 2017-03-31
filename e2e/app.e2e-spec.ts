import { LabsAngular2Page } from './app.po';

describe('labs-angular2 App', () => {
  let page: LabsAngular2Page;

  beforeEach(() => {
    page = new LabsAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
