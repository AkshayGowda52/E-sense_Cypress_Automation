/// <reference types = "Cypress" />
const teacherDashboard = require("../../support/pageObjects/LMS/teacherDashboardPage")
const adminReportPage = require('../../support/pageObjects/LMS/adminReportPage')
const ReportDashboardPage = require('../../support/pageObjects/LMS/adminReportPage')
const dashboard = require("../../support/pageObjects/LMS/adminDashboardPage")
const teacherReport = require('../../support/pageObjects/LMS/teacherReportPage')

describe("TeacherReports", function () {
    var randString;

    beforeEach('Login to application', function () {

        cy.visit(Cypress.env("url"))
        cy.url().should('contain', `${Cypress.env("url")}`)
        cy.viewport(1920, 1080)

        //Random String
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        function RandomStr(length) {
            var result = ''
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength))}
            return result }
        randString = RandomStr(1)

                //Random Number
        var randNumb = Math.floor(Math.random() * 100)
        cy.wait(500)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        ReportDashboardPage.getUserTab().click()
        ReportDashboardPage.getStudentsTab().click()
        ReportDashboardPage.getAddStudentsIcon().click({ force: true })
        ReportDashboardPage.getAddStudentPageFullNameTxtfield().click().type("kumar" + "" + randString)
        ReportDashboardPage.getAddStudentPageGenderDropdown().click()
        ReportDashboardPage.getAddStudentPageGenderList().click()
        ReportDashboardPage.getAddStudentPagePrimaryDetailsContactNumb().click().type(9999999999)
        ReportDashboardPage.getAddStudentPageSelectRelationDropdown().click()
        ReportDashboardPage.getAddStudentPageSelectRelation().click()
        ReportDashboardPage.getAddStudentPageGuardianNameTxtfield().click().type("veena")
        ReportDashboardPage.getAddStudentPageGuardianContactNumb().click().type("8888888888")
        ReportDashboardPage.getAddStudentPageAddressLine1TxtField().click().type("Bangalore")
        ReportDashboardPage.getAddStudentPagePincodeTxtfield().click().type(561101).wait(1000)
        ReportDashboardPage.getAddStudentButton().click()
        ReportDashboardPage.getAddStudentPageAdmissionYeartxtfield().click({ force: true }).type("2012")
        ReportDashboardPage.getAddStudentPageAdmissionNumbTxtfield().click().type(randNumb)
        ReportDashboardPage.getAddStudentPageGradeDropdown().click()
        teacherReport.getListOfGrade().click()
        ReportDashboardPage.getAddStudentPageSectionDropdown().click()
        teacherReport.getSectionList().click()
        ReportDashboardPage.getAddStudentPageRollNumbTxtfield().click().wait(1000).type(randNumb)
        ReportDashboardPage.getAddStudentButton().click()
        dashboard.logout()

    })

    it('Tc__001 Verify that Teacher can add / edit the results in Students Gradebook  of the respective grades', function () {

        cy.fixture('LMS/Credentials').then((validTeacherLoginData) => {
            cy.teacherLogin(validTeacherLoginData.teacherUsername2, validTeacherLoginData.teacherPassword)
        })
        teacherReport.getSideNavBar().invoke('show')
        teacherReport.getReportTab().click({ force: true })
        teacherReport.getStudentGradeBookTab().eq(0).wait(500).click()
        cy.wait(500)
        teacherReport.getStudentFullName().each((txt, index) => {
            var studentName = txt.text()
            if (studentName == "kumar" + "" + randString) {
                teacherReport.getArrowForwardIcon().eq(index).click({ force: true })
            }
        })
        teacherReport.getEditBtn().click().wait(500)
        teacherReport.getTheoryTxtField().click().type(55)
        teacherReport.getPracticleTxtField().click().type(45)
        teacherReport.getCoScholasticActivitiesMarksTxtField().click().type(5)
        teacherReport.getRemarksTxtField().click().type('nothing')
        teacherReport.getTotalPercentage().should('be.visible')
        teacherReport.getStudentResult().should('be.visible')
        teacherReport.getSaveBtn().click()
        teacherReport.getStudentFullName().each((txt, index) => {
            var studentName = txt.text()
            if (studentName == "kumar" + "" + randString) {
                teacherReport.getUpdatedStatus().should('be.visible')
            }
        })
        teacherReport.getStudentFullName().each((txt, index) => {
            var studentName = txt.text()
            if (studentName == "kumar" +""+ randString) {
                teacherReport.getArrowForwardIcon().eq(index).click({ force: true })
            }
        })
        teacherReport.getCancelBtn().click()
        teacherReport.getStudentFullName().each((txt, index) => {
            var studentName = txt.text()
            if (studentName == "kumar" +""+randString) {
                teacherReport.getArrowForwardIcon().eq(index).click({ force: true })
            }
        })
        teacherReport.getShowGradingSystemDropdown().click()
        teacherReport.getGradeSystemLists().should('be.visible')
        teacherReport.getPreviewANDprintBtn().click()
        teacherReport.getPreviewANDprintList().should('be.visible')
        cy.get('body').click()
        teacherDashboard.teacherLogout()
        cy.wait(1000)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
        ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
        ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', 'Student Gradebook')
        teacherReport.getGradesList().each((gradeslist, index) => {
            const ListOfGrades = gradeslist.text()
            if (ListOfGrades == 'Grade 2') {
                teacherReport.getPublishedStatus(index).should('be.visible')
            }
        })

        // Post conditon- Delete Created Student account
        ReportDashboardPage.getUserTab().click({ force: true })
        ReportDashboardPage.getStudentsTab().click().wait(1000)
        ReportDashboardPage.getAdminModuleUserPageStudentsList().each(($text, index) => {
            var studentName = $text.text().trim()
            if (studentName == "kumar" + "" + randString) {
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeleteIcon().eq(index).click()
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeletePopup().click()
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeleteButton().click()
            }
        })
    })

    it('Tc__002 Verify that Teacher can view the Published / Pending Students Gradebook of the respective grades ', function () {

        cy.fixture('LMS/Credentials').then((validTeacherLoginData) => {
            cy.teacherLogin(validTeacherLoginData.teacherUsername2, validTeacherLoginData.teacherPassword)
        })
        teacherReport.getSideNavBar().invoke('show')
        teacherReport.getReportTab().click({ force: true })
        teacherReport.getStudentGradeBookTab().eq(0).wait(500).click().wait(500)
        teacherReport.getStudentFullName().each((txt, index) => {
            var studentName = txt.text()
            if (studentName == "kumar" + "" + randString) {
                teacherReport.getArrowForwardIcon().eq(index).click({ force: true })
            }
        })
        teacherReport.getEditBtn().click().wait(1000)
        teacherReport.getTheoryTxtField().click().type(55)
        teacherReport.getPracticleTxtField().click({ force: true }).type(45)
        teacherReport.getCoScholasticActivitiesMarksTxtField().click().type(5)
        teacherReport.getCancelBtn().click()
        teacherReport.getSaveANDcountinueBtn().click()
        ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', 'Student Gradebook')

        // Post conditon- Delete Created Student account
        teacherDashboard.teacherLogout()
        cy.wait(1000)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        ReportDashboardPage.getUserTab().click({ force: true })
        ReportDashboardPage.getStudentsTab().click().wait(500)
        ReportDashboardPage.getAdminModuleUserPageStudentsList().each(($text, index) => {
            var studentName = $text.text().trim()
            if (studentName == "kumar" + "" + randString) {
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeleteIcon().eq(index).click()
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeletePopup().click()
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeleteButton().click()
            }
        })
    })

    it('TC__003 Verify that Teacher can search and select filters in Gradebook', function () {

        cy.fixture('LMS/Credentials').then((validTeacherLoginData) => {
            cy.teacherLogin(validTeacherLoginData.teacherUsername2, validTeacherLoginData.teacherPassword)
        })
        teacherReport.getSideNavBar().invoke('show')
        teacherReport.getReportTab().click({ force: true })
        teacherReport.getStudentGradeBookTab().eq(0).wait(500).click().wait(500)
        ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', 'Student Gradebook')
        teacherReport.getStudentFullName().should('be.visible')
        teacherReport.getSearchTxtField().type('sanjay')
        teacherReport.getStudentFullName().each((txt) => {
            var studentName = txt.text()
            if (studentName == "kumar" + "" + randString) {
                teacherReport.getAlltermsDropdown().click()
                teacherReport.getAlltermsLists().click()

            }
        })
        // Post conditon- Delete Created Student account
        teacherDashboard.teacherLogout()
        cy.wait(1000)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        ReportDashboardPage.getUserTab().click({ force: true })
        ReportDashboardPage.getStudentsTab().click().wait(500)
        ReportDashboardPage.getAdminModuleUserPageStudentsList().each(($text, index) => {
            var studentName = $text.text().trim()
            if (studentName == "kumar" + "" + randString) {
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeleteIcon().eq(index).click()
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeletePopup().click()
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeleteButton().click()
            }
        })
    })

    it.only('Tc__004 Verify that Teacher can search and select filters in 360 reports', function () {

        cy.fixture('LMS/Credentials').then((validTeacherLoginData) => {
            cy.teacherLogin(validTeacherLoginData.teacherUsername2, validTeacherLoginData.teacherPassword)
        })
        teacherReport.getSideNavBar().invoke('show')
        teacherReport.getReportTab().click({ force: true })
        teacherReport.getStudent360ReportsTab().eq(1).wait(500).click().wait(500)
        teacherReport.get360ReportTxt().should('have.text', '360˚ Reports')
        teacherReport.getStudentsName().should('be.visible')
        teacherReport.getSearchTxtField().type("kumar" + "" + randString).wait(2000)
        teacherReport.getStudentsName().each((txt) => {
            var studentName = txt.text()
            if (expect(studentName).to.eq("kumar" + "" + randString)) {
                teacherReport.get360ReportPageGradeDropdown().click()
                teacherReport.getListOfGrade().click()
                teacherReport.get360ReportPageSectionDropdown().click()
                teacherReport.getSectionList().click()
            }
        })
        teacherReport.getStudentsName().each((Txt, index) => {
            var StudentNames = Txt.text()
            if (StudentNames == "kumar" + "" + randString) {
                teacherReport.getViewReportBtn().eq(index).click()
                 cy.get('div[class*="StudentDetails_stdDetailHeadTitle"]').should('have.text', 'kumar'+ "" + randString+""+'’s 360˚ Report')
            }
        })

        // Post conditon- Delete Created Student account
        teacherDashboard.teacherLogout()
        cy.wait(1000)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        ReportDashboardPage.getUserTab().click({ force: true })
        ReportDashboardPage.getStudentsTab().click().wait(500)
        ReportDashboardPage.getAdminModuleUserPageStudentsList().each(($text, index) => {
            var studentName = $text.text().trim()
            if (studentName == "kumar" + "" + randString) {
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeleteIcon().eq(index).click()
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeletePopup().click()
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeleteButton().click()
            }
        })


    })

    it('Tc__005 Verify that School Admin can add the Health report in 360 reports', function () {

        cy.fixture('LMS/Credentials').then((validTeacherLoginData) => {
            cy.teacherLogin(validTeacherLoginData.teacherUsername2, validTeacherLoginData.teacherPassword)
        })
        teacherReport.getSideNavBar().invoke('show')
        teacherReport.getReportTab().click({ force: true })
        teacherReport.getStudent360ReportsTab().eq(1).wait(500).click().wait(500)
        teacherReport.get360ReportTxt().should('have.text', '360˚ Reports')
        teacherReport.getStudentsName().each((Txt, index) => {
            var StudentNames = Txt.text()
            if (StudentNames == "kumar" + "" + randString) {
                teacherReport.getViewReportBtn().eq(index).click()
            }
        })
        teacherReport.getAddReportsBtn().click()
        teacherReport.getAddNewReportTxt().should('have.text', 'Add New Report')
        teacherReport.getSchoolTypeDropdown().click()
        teacherReport.getSchoolLists().click()
        teacherReport.getGradesDropdown().click()
        teacherReport.getAddNewReportPage_GradesLists().click()
        teacherReport.getWeightTxtField().click().type('60')
        teacherReport.getHeightTxtField().click().type('125')
        teacherReport.getAddBtn().click()
        ///// STUDENT App


        // Post conditon- Delete Created Student account
        teacherDashboard.teacherLogout()
        cy.wait(1000)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        ReportDashboardPage.getUserTab().click({ force: true })
        ReportDashboardPage.getStudentsTab().click().wait(500)
        ReportDashboardPage.getAdminModuleUserPageStudentsList().each(($text, index) => {
            var studentName = $text.text().trim()
            if (studentName == "kumar" + "" + randString) {
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeleteIcon().eq(index).click()
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeletePopup().click()
                ReportDashboardPage.getAdminModuleUserPageStudentsListDeleteButton().click()
            }
        })
    })

    it('Tc__007 Verify that Teacher is able to generate the My yearly Performance and  view it in 360 reports', function () {


    })



})

// Manoj