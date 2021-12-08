export default class BasePage {
    url = null;
    open() {
        cy.visit(this.url);
    }
}