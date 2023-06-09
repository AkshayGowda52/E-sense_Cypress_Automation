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
        adminContentLibraryPage.getPublicationsDropdownRaiseSeriesOpt({timeout:2000}).scrollIntoView().should('be.visible').click()
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


    it('E2E_02 Validate that user is able to view the vedios contents on topschool library ', function () {
        adminDashboardPage.getContentlibrarySideBar().click({force:true}).wait(2000)
        adminContentLibraryPage.getPublicationsDropdown().click().wait(1000)
        adminContentLibraryPage.getPublicationsDropdownOpt('Publications',{timeout:2000}).scrollIntoView().click()
        adminContentLibraryPage.getSearchBtn().click().wait(2000)
        adminContentLibraryPage.getContentDropdown({timeout:2000}).click()
        adminContentLibraryPage.getContentDropdownOpt('Video').click()
        adminContentLibraryPage.getGradesDropdown({timeout:2000}).click()
        adminContentLibraryPage.getGradesDropdownpt('Grade 8').click()
        adminContentLibraryPage.getSearchBtn().click().wait(2000)
        adminContentLibraryPage.getCardGrade().should('contain','Grade 8 grade').wait(2000)
        adminContentLibraryPage.getSubjectsDropdown({timeout:4000}).click()
        adminContentLibraryPage.getSubjectsDropdownOpt('12121').click()
        adminContentLibraryPage.getSearchBtn().click().wait(2000)
        adminContentLibraryPage.getCardSubjects().should('contain','12121')
        adminContentLibraryPage.getChapterDropdown().click().wait(2000)
        adminContentLibraryPage.getChapterDropdownOpt('Kiayada Paul',{timeout:4000}).click().wait(2000)
        adminContentLibraryPage.getSearchBtn().click().wait(2000)
        adminContentLibraryPage.getViewAllBtn().click()
        adminContentLibraryPage.getCardSubjects().should('contain','12121')
    })


    it('E2E_03 Validate that user is able to view the NCERT textbook contents on topschool library ', function () {
        adminDashboardPage.getContentlibrarySideBar().click({force:true}).wait(2000)
        adminContentLibraryPage.getPublicationsDropdown().click().wait(1000)
        adminContentLibraryPage.getPublicationsDropdownRaiseSeriesOpt({timeout:2000}).scrollIntoView().click()
        adminContentLibraryPage.getContentDropdown({timeout:2000}).click()
        adminContentLibraryPage.getContentDropdownOpt('NCERT TextBook').click()
        adminContentLibraryPage.getSearchBtn().click().wait(2000)
        adminContentLibraryPage.getCardGrade().should('contain','NCERT TextBook').wait(2000)
    })


    it('E2E_04 Validate that user is able to view the Lesson plans contents on topschool library ', function () {
        adminDashboardPage.getContentlibrarySideBar().click({force:true}).wait(2000)
        adminContentLibraryPage.getPublicationsDropdown().click().wait(1000)
        adminContentLibraryPage.getPublicationsDropdownRaiseSeriesOpt({timeout:2000}).scrollIntoView().click()
        adminContentLibraryPage.getContentDropdown({timeout:2000}).click()
        adminContentLibraryPage.getContentDropdownOpt('Lesson Plan').click()
        adminContentLibraryPage.getSearchBtn().click().wait(2000)
        adminContentLibraryPage.getCardGrade().should('contain','Lesson Plan').wait(2000)
    })

    it('E2E_05 Validate that user is able to view the Lesson plans contents on topschool library ', function () {
        adminDashboardPage.getContentlibrarySideBar().click({force:true}).wait(2000)
        adminContentLibraryPage.getPublicationsDropdown().click().wait(1000)
        adminContentLibraryPage.getPublicationsDropdownRaiseSeriesOpt({timeout:2000}).scrollIntoView().click()
        adminContentLibraryPage.getContentDropdown({timeout:2000}).click()
        adminContentLibraryPage.getContentDropdownOpt('RISE TextBook').click()
        adminContentLibraryPage.getSearchBtn().click().wait(2000)
        adminContentLibraryPage.getCardGrade().should('contain','RISE TextBook').wait(2000)
    })

})