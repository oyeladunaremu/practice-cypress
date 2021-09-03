import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import PageActions from '../../support/PageResource/pageActions'

const pages = new PageActions();

Given (/^I am on the Webappsecurity site$/, function (){
    cy.visit('http://zero.webappsecurity.com/index.html');
});
