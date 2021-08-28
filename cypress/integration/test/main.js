import PageActions from '../../support/PageResources/pageActions'

const pages = new PageActions();

context('Web App Security site', ()=>{
  beforeEach(()=>{
    //Launch the webapp site
    cy.visit('http://zero.webappsecurity.com/index.html');
  });

  it('Test Valid Signin on Webappsecurity site', () => {
    //Make a search using the word "pay"
    cy.fixture("elementMapper").then((em)=>{
    //cy.get(em.searchBox).type(em.searchItem);
    pages.insertValue(em.searchBox, em.searchItem);
    cy.get(em.signinButton).click();
    cy.get(em.loginBox).type(em.userName);
    cy.get(em.passwordBox).type(em.passWord);
    cy.wait(3000)
    //cy.get('input#user_remember_me').click();
    cy.get(em.signIn).click();

    })

});

it('Test Invalid Signin on Webappsecurity site', () => {
  cy.fixture("elementMapper").then((em)=>{
    cy.get(em.searchBox).type(em.searchItem);
    cy.get(em.signinButton).click();
    cy.get(em.loginBox).type(em.userName);
    cy.get(em.passwordBox).type(em.invalidPassword);
    cy.wait(3000)
    cy.get(em.signIn).click();


    //cy.get('.navbar-search.pull-right').type('pay{enter}');
    //cy.type('pay{enter}');
    //cy.wait(3000)

    }) 
   
});
});