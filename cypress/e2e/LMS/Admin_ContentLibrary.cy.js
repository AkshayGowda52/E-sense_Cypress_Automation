const adminDashboardPage = require('../../support/pageObjects/LMS/adminDashboardPage')
const adminContentLibraryPage = require('../../support/pageObjects/LMS/adminContentLibraryPage')

describe("Admin Content library Validation", function () {

    beforeEach(function () {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.visit(Cypress.env("url"))
        cy.viewport(1920, 1080)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        
    })
    it('E2E_01 Validate that user is able to view the Presentation contents on topschool library ', function () {
        adminDashboardPage.getContentlibrarySideBar().click({force:true}).wait(2000)
        adminContentLibraryPage.getPublicationsDropdown().click().wait(1000)
        adminContentLibraryPage.getPublicationsDropdownRaiseSeriesOpt({timeout:2000}).scrollIntoView().click()
        adminContentLibraryPage.getSearchBtn().click().wait(2000)
        adminContentLibraryPage.getPresentationsTab({timeout:2000}).click()
        adminContentLibraryPage.getCardViewBtn().should('contain','View Presentations')
        adminContentLibraryPage.getGradesDropdown({timeout:2000}).click()
        adminContentLibraryPage.getGradesDropdownGrade1Opt().click()
        adminContentLibraryPage.getSearchBtn().click().wait(2000)
        adminContentLibraryPage.getCardGrade().should('contain','Grade 1 grade').wait(2000)
        adminContentLibraryPage.getSubjectsDropdown({timeout:4000}).click()
        adminContentLibraryPage.getSubjectsDropdownOpt('Basic maths').click()
        adminContentLibraryPage.getSearchBtn().click().wait(2000)
        adminContentLibraryPage.getCardSubjects().should('contain','Basic maths')
        adminContentLibraryPage.getChapterDropdown().click().wait(2000)
        adminContentLibraryPage.getChapterDropdownOpt('Maths part 1',{timeout:4000}).click().wait(2000)
        adminContentLibraryPage.getTopicDropdown().click()
        adminContentLibraryPage.getTopicDropdownOpt('Math',{timeout:4000}).click().wait(2000)
        adminContentLibraryPage.getSearchBtn().click().wait(2000)
        adminContentLibraryPage.getViewAllBtn().click()
        adminContentLibraryPage.getCardSubjects().should('contain','Basic maths')
    })
})