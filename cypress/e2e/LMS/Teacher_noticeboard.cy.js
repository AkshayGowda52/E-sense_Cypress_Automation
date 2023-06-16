
const teacherDashboardPage = require('../../support/pageObjects/LMS/teacherDashboardPage')
const teacherNoticeboardPage = require('../../support/pageObjects/LMS/teacherNoticeboardPage')

describe("Teacher Notice board Validation", function () {

    beforeEach(function () {
        cy.visit(Cypress.env("url"))
        cy.viewport(1920, 1080)
        cy.fixture("LMS/Teacher_Creadentials.json").then(function (validTeacherLoginData) {
            cy.teacherLogin(validTeacherLoginData.username, validTeacherLoginData.password)
        })
    })

    it('E2E_01 Verify that School Teacher sees "No Notice Found" text when notices were not published', function () {
        teacherDashboardPage.getNoticeboardSideBar().click({force:true})
        cy.contains('No Notice Found').should('be.visible')
        teacherNoticeboardPage.getSearchTextfield().should('be.visible')
        teacherNoticeboardPage.getCalenderIcon().should('be.visible')
        teacherNoticeboardPage.getAcademicYearDropdown().should('be.visible')
        teacherNoticeboardPage.getSortByDropdown().should('be.visible')
        
    })

})