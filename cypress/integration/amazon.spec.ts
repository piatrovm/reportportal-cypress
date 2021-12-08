import homePage from '../support/fragments/home.page';

describe('Amazon Home Page',() => {
    it('should open Amazon Home Page', () => {
        homePage.open();
        homePage.openMenu({
            menu: 'Amazon Music',
            submenu: 'Stream Music'
        });
    });
})