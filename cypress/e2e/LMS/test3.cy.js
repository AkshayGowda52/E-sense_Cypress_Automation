/// <reference types = "Cypress" />

describe('Validate Admin Edited the Gradebook Template Successfully',function(){

    before(function(){
        cy.visit(Cypress.env("url"))
        cy.viewport(1920,1080)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
    })

    it('',function(){
        cy.get('div.side-nav-bar ').invoke('show').contains('Reports').click()
        cy.get('[class="content-popover-reports"]').eq(0).click({force:true})
        cy.wait(2000)
        cy.contains('Student Gradebook').should('have.text','Student Gradebook')

    })
})