/// <reference types = "Cypress" />
const teacherDashboard = require("../../support/pageObjects/LMS/teacherDashboardPage")
const adminReportPage = require('../../support/pageObjects/LMS/adminReportPage')
const ReportDashboardPage = require('../../support/pageObjects/LMS/adminReportPage')
const dashboard = require("../../support/pageObjects/LMS/adminDashboardPage")
const teacherReport = require('../../support/pageObjects/LMS/teacherReportPage')

describe("TeacherReports", function () {
    var randString;
    var randNumb;

    beforeEach('Login to application', function () {

        cy.visit(Cypress.env("url"))
        cy.url().should('contain', `${Cypress.env("url")}`)
        cy.viewport(1920, 1080)

        //Random String
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        function RandomStr(length) {
            var result = ''
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength))
            }
            return result
        }
        randString = RandomStr(1)

        //Random Number
        randNumb = Math.floor(Math.random() * 100)
        cy.wait(500)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
    })

    it('Tc__001 Verify that Teacher can add / edit the results in Students Gradebook  of the respective grades', function () {

        adminReportPage.CreateStudentAccount("kumar", randString, 9999999999, "veena", 8888888888, "Bangalore", 561101, "2012", randNumb, randNumb)
        dashboard.logout()
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
        teacherReport.getRemarksTxtField().click().type('noo')
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
            if (studentName == "kumar" + "" + randString) {
                teacherReport.getArrowForwardIcon().eq(index).click({ force: true })
            }
        })
        teacherReport.getCancelBtn().click()
        teacherReport.getStudentFullName().each((txt, index) => {
            var studentName = txt.text()
            if (studentName == "kumar" + "" + randString) {
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
        adminReportPage.DeleteCreatedStudentAccount("kumar", randString)
    })

    it('Tc__002 Verify that Teacher can view the Published / Pending Students Gradebook of the respective grades ', function () {

        adminReportPage.CreateStudentAccount("kumar", randString, 9999999999, "veena", 8888888888, "Bangalore", 561101, "2012", randNumb, randNumb)
        dashboard.logout()
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

        teacherDashboard.teacherLogout()
        cy.wait(1000)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        adminReportPage.DeleteCreatedStudentAccount("kumar", randString)
    })

    it('TC__003 Verify that Teacher can search and select filters in Gradebook', function () {

        adminReportPage.CreateStudentAccount("kumar", randString, 9999999999, "veena", 8888888888, "Bangalore", 561101, "2012", randNumb, randNumb)
        dashboard.logout()
        cy.fixture('LMS/Credentials').then((validTeacherLoginData) => {
            cy.teacherLogin(validTeacherLoginData.teacherUsername2, validTeacherLoginData.teacherPassword)
        })
        teacherReport.getSideNavBar().invoke('show')
        teacherReport.getReportTab().click({ force: true })
        teacherReport.getStudentGradeBookTab().eq(0).wait(500).click().wait(500)
        ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', 'Student Gradebook')
        teacherReport.getStudentFullName().should('be.visible')
        teacherReport.getSearchTxtField().type("kumar" + "" + randString)
        teacherReport.getStudentFullName().each((txt) => {
            var studentName = txt.text()
            if (studentName == "kumar" + "" + randString) {
                teacherReport.getAlltermsDropdown().click()
                teacherReport.getAlltermsLists().click()

            }
        })
        teacherDashboard.teacherLogout()
        cy.wait(1000)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        adminReportPage.DeleteCreatedStudentAccount("kumar", randString)
    })

    it('Tc__004 Verify that Teacher can search and select filters in 360 reports', function () {

        adminReportPage.CreateStudentAccount("kumar", randString, 9999999999, "veena", 8888888888, "Bangalore", 561101, "2012", randNumb, randNumb)
        dashboard.logout()
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
                cy.get('div[class*="StudentDetails_stdDetailHeadTitle"]').should('have.text', 'kumar' + "" + randString + "" + '’s 360˚ Report')
            }
        })
        teacherDashboard.teacherLogout()
        cy.wait(1000)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        adminReportPage.DeleteCreatedStudentAccount("kumar", randString)

    })

    it('Tc__005 Verify that School Admin can add the Health report in 360 reports', function () {

        adminReportPage.CreateStudentAccount("kumar", randString, 9999999999, "veena", 8888888888, "Bangalore", 561101, "2012", randNumb, randNumb)
        dashboard.logout()
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

        teacherDashboard.teacherLogout()
        cy.wait(1000)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        adminReportPage.DeleteCreatedStudentAccount("kumar", randString)
    })

    it.skip('Tc__007 Verify that Teacher is able to generate the My yearly Performance and  view it in 360 reports', function () {

        adminReportPage.CreateStudentAccount("kumar", randString, 9999999999, "veena", 8888888888, "Bangalore", 561101, "2012", randNumb, randNumb)
        dashboard.logout()
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
        teacherReport.getMyYearlyPerformanceTab().should('be.visible').click()
        // validation step is pending
        teacherDashboard.teacherLogout()
        cy.wait(1000)
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
            cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
        ReportDashboardPage.getStudent360ReportTab().should('be.visible', { timeout: 2000 }).click({ force: true })
        ReportDashboardPage.get360ReportPageTitle().should('have.text', '360˚ Reports').wait(2000)
        ReportDashboardPage.get360ReportPageGradeDropdown().click()
        teacherReport.getAddNewReportPage_GradesLists().click()
        ReportDashboardPage.get360ReportPageSectionDropdown().click()
        teacherReport.getSectionsList().click().wait(2000)
        ReportDashboardPage.get360ReportPageStudentList().each(($Txt, index) => {
            var StudentName = $Txt.text()
            if (StudentName == "kumar" + "" + randString) {
                teacherReport.getViewReportBtn().eq(index).click({ force: true })
            }
        })
        teacherReport.getMyYearlyPerformanceTab().should('be.visible').click()
        // validation step is pending





    })



})

// Manoj