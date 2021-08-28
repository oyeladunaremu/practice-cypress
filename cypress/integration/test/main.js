import PageActions from '../../support/PageResource/pageActions'

const pages = new PageActions();

context('Web App Security site', ()=>{
  beforeEach(()=>{
    //Launch the webapp site
    cy.visit('http://zero.webappsecurity.com/index.html');
  });

  it('Test Valid Signin on Webappsecurity site', () => {
    //Make a search using the word "pay"
    cy.fixture("elementMapper").then((em)=>{
    cy.get(em.searchBox).type(em.searchItem);
    //pages.insertValue(em.searchBox, em.searchItem);
    pages.clickElement(em.signinButton);
    pages.typeAValue(em.loginBox, em.userName);
    pages.typeAValue(em.passwordBox, em.passwordBox);
    cy.wait(3000)
    //cy.get('input#user_remember_me').click();
    //cy.get(em.signIn).click();
    pages.clickElement(em.signIn);

    })

});

it('Test Invalid Signin on Webappsecurity site', () => {
  cy.fixture("elementMapper").then((em)=>{
    cy.get(em.searchBox).type(em.searchItem);
    pages.clickElement(em.signinButton);
    pages.typeAValue(em.loginBox, em.userName);
    //cy.get(em.passwordBox).type(em.invalidPassword);
    pages.typeAValue(em.passwordBox, em.invalidPassword);
    cy.wait(3000)
    cy.get(em.signIn).click();


    //cy.get('.navbar-search.pull-right').type('pay{enter}');
    //cy.type('pay{enter}');
    //cy.wait(3000)

    }) 
   
});
});