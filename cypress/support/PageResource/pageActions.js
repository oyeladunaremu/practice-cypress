class PageActions{
    clickElement(element){
        cy.get(element).click();
    }
    typeAValue(field, text){
        cy.get(field).type(text);
    }
    selectValue(element, value){
        cy.get(element).select(value);
    }
    pageWait(element){
        cy.get(element).should('be.visible');
    }
    viewElementText(element, text){
        cy.get(element).should('contain', text);
    }
    scroll(position){
        cy.scrollTo(position);
    }
    scrollToElement(element){
        cy.get(element).scrollIntoView();
    }
}
export default PageActions