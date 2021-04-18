import { AngularSpringProjectPage } from './app.po';

describe('angular-spring-project App', function() {
  let page: AngularSpringProjectPage;

  beforeEach(() => {
    page = new AngularSpringProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
