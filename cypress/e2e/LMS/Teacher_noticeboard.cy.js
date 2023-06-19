
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
        teacherNoticeboardPage.getSearchTextfield().should('be.visible')
        teacherNoticeboardPage.getCalenderIcon().should('be.visible')
        teacherNoticeboardPage.getAcademicYearDropdown().should('be.visible')
        teacherNoticeboardPage.getSortByDropdown().should('be.visible')

    })


    it('E2E_02 Verify that School Teacher  can see the School Notice Board successfully', function () {
        teacherDashboardPage.getNoticeboardSideBar().click({force:true})
        teacherNoticeboardPage.getTeacherNoticesList().should('be.visible')
        teacherNoticeboardPage.getNoticeTitle().should('be.visible')
        teacherNoticeboardPage.getNoticeDate().should('be.visible')
        teacherNoticeboardPage.getNoticeAttachment().should('be.visible').last().click()
        teacherNoticeboardPage.getNoticeAttached().should('be.visible').click()
        teacherNoticeboardPage.getNoticeAttachedPreviewCloseBtn().click()
        cy.get('body').click()
        teacherNoticeboardPage.getSearchTextfield().type('manohara')
        teacherNoticeboardPage.getTeacherNoticesList().should('be.visible')
        teacherNoticeboardPage.getSortByDropdown().should('be.visible')
        teacherNoticeboardPage.getSortByDropdown().click({force:true})
        teacherNoticeboardPage.getSortByDropdownGenaralOpt().click({timeout:4000})
        teacherNoticeboardPage.getTeacherNoticesList().should('be.visible')
        teacherNoticeboardPage.getSortByDropdown().should('be.visible').click()
        teacherNoticeboardPage.getSortByDropdownAllOpt().click()
        teacherNoticeboardPage.getTeacherNoticesList().should('be.visible')
    })
})