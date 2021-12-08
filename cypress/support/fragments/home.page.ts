import BasePage from './base.page';

class HomePage extends BasePage {
    url = 'https://www.amazon.com/'
    get menuButton() { return cy.get('.nav-hamburger-menu') }
    get menus() { return cy.get('.hamburger-menu__list > .hamburger-menu__item') }
    get submenus() { return cy.get('.item--expanded li.item--child') }

    openMenu({ menu, submenu }) {
        this.menuButton.click();
        if (submenu) {
            this.menus.contains(menu).parent().click();
            this.submenus.contains(submenu).click()
        } else {
            this.menus.contains(menu).click();
        }
    }
}

export default new HomePage();
