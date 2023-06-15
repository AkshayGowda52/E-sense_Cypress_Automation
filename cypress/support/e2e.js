//X-path plugin
require('cypress-xpath');
import '@shelex/cypress-allure-plugin';

// File-Upload Plugin
import 'cypress-file-upload';
import './commands'

//To handle Uncaught Exception
Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(`Caught at: ${runnable.title}\n`, err)
  return false
})

// Stubbing the window:alert event
cy.on('window:alert', (message) => {
  cy.on('window:alert', cy.stub().as('alertStub').returns(true)); // Close the alert
});

//To Login As Admin
const login = require('./pageObjects/LMS/adminIndexPage')
Cypress.Commands.add('adminLogin', (email, password) => {
  login.getLoginAsAdminBtn().click()
  login.getUserNameTxtFld().clear().type(email)
  login.getPasswordTxtFld().clear().type(password)
  login.getLogInBtn().click().wait(2000)
  cy.url().should('contain', 'dashboard').wait(1000)
})

//To Login As Teacher
const teacherLogin = require('./pageObjects/LMS/adminIndexPage')
Cypress.Commands.add('teacherLogin', (email, password) => {
  teacherLogin.getLoginAsTeacherBtn().click()
  teacherLogin.getUserNameTxtFld().clear().type(email)
  teacherLogin.getPasswordTxtFld().clear().type(password)
  teacherLogin.getLogInBtn().click().wait(2000)
})













