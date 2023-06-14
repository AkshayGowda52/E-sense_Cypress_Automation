const adminDashboardPage = require("../../support/pageObjects/LMS/adminDashboardPage")
const teacherDashboard = require("../../support/pageObjects/LMS/teacherDashboardPage")
const adminUsersPage = require("../../support/pageObjects/LMS/adminUsersPage")
const teacherLogin = require('../../support/pageObjects/LMS/adminIndexPage')
const quickLinks = require('../../support/pageObjects/LMS/adminQuickLinksPage')

describe("Admin School Validation", function () {

  beforeEach(function () {
    cy.visit(Cypress.env("url"))
    cy.viewport(1920, 1080)
    cy.fixture("LMS/Credentials").then(function (credential) {
      cy.adminLogin(credential.username, credential.password)
    })
    cy.fixture("LMS/SchoolBasicList").as('basic');
    cy.fixture("LMS/TimeTableCreation").as('timeTableCreation')
  })

  it('Adm_Dashboard 001 To validate user is able to view the attendance marked is reflected in the Grade wise attendace section and Student Present widgets', function () {
    adminDashboardPage.logout()
    cy.fixture("LMS/Credentials").then(function (validTeacherLoginData) {
      cy.teacherLogin(validTeacherLoginData.teacherUsername1, validTeacherLoginData.teacherPassword)
    })
    teacherDashboard.getMarkClassAttendanceBtn().click().wait(2000)
    teacherDashboard.getMarkAttendanceBtnInMarkAttendancePage().invoke('text').then((text) => {
      if (text === "Mark Attendance ") {
        teacherDashboard.getMarkAttendanceBtnInMarkAttendancePage().click()
        teacherDashboard.getMarkAttendanceSubmitBtn().click()
        cy.contains("Submit Attendance Record!").should('be.visible')
        teacherDashboard.getYesSubmitMarkAttendanceSubmitBtn().click()
        cy.contains("Attendence updated successfully").should('be.visible')
      } else {
        cy.log("Attendance is already marked")
      }
      cy.go('back')
      teacherDashboard.teacherLogout()
    })
    cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
      cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
    })
    adminDashboardPage.getGradeWiseAttendanceBarLst(this.basic.className).trigger('mouseover').wait(1500)
    cy.contains("100% present").should('be.visible')
  })

  it("Adm_Dashboard 002 To validate user is able to update School picture is reflected in Reports", function () {
    adminDashboardPage.getSchoolTabInSideNavigationBar().click().wait(1000)
    adminDashboardPage.getStudentGradebookTabInReportsTab().trigger('mouseover', { force: true }).wait(1000).click({ force: true })
    adminDashboardPage.getLogoPicInStudentGradebookTemplatePage().eq(0).should('be.visible')
    adminDashboardPage.getDashboardTabInSideNavigationBar().click()
    adminDashboardPage.getProfileImageInDashboard().should('be.visible')
  })

  it("Adm_Dashboard 003 To validate user is able to see the average score based on the Marks updated in Gradebook", function () {
    adminDashboardPage.getSchoolTabInSideNavigationBar().click().wait(1000)
    adminDashboardPage.getStudentGradebookTabInReportsTab().click({ force: true })
    adminDashboardPage.getGradebookTabInStudentGradebookPage().click()
    adminDashboardPage.getArrowIconLstForGradebookInStudentGradebookPage(this.basic.student1).click({ timeout: 2000 })
    adminDashboardPage.getEditButttonInStudentGradebookPage().scrollIntoView().click()
    adminDashboardPage.getScholosticActivitiesTheoryFirstBoxinStudentGradebookPage().type(50)
    adminDashboardPage.getScholosticActivitiesTheoryThirdBoxinStudentGradebookPage().type(50)
    adminDashboardPage.getScholosticActivitiesPageSaveBtn().scrollIntoView().click()
    cy.contains("Grade Updated Succesfully").should('be.visible')
    adminDashboardPage.getTotalScoreLstTxtForGradebookInStudentGradebookPage(this.basic.student1).should('have.text', "50%")
  })

  it("Adm_Dashboard 004 To validate user is able to view the TOP PERFORMER based on the marks updated in the Gradebook", function () {
    adminDashboardPage.getTopPerformersGradeDrpdwn().click()
    adminDashboardPage.getDropdownLstInDashboard().contains(this.basic.dropdownClassName).scrollIntoView().click()
    adminDashboardPage.getTopPerformerOverallPercentageTxt(this.basic.student1).should('have.text', "50.00 %")
  })

  it("Adm_Dashboard 005 To Validate user is able to view the average percentage of the entire class in Site Analytics >> Overall Result", function () {
    adminDashboardPage.getOverallResultTabInSiteAnalytics().click()
    adminDashboardPage.getGradeDropDwnInOverallResultTab().click()
    adminDashboardPage.getDropdownLstInDashboard().contains(this.basic.dropdownClassName).click()
    adminDashboardPage.getOverallResultBarInSiteAnalytics().trigger('mouseover').wait(1500)
    cy.contains("50%").should('be.visible')
  })

  it("Adm_Dashboard 005 To Validate the Teacher count is displayed based on the teacher present or Absent", function () {
    adminUsersPage.newTeacherCreation()
    adminUsersPage.getSiTeacherLst().contains("alex").invoke('text').then((name) => {
      adminDashboardPage.logout()
      cy.fixture("LMS/Credentials").then(function (validTeacherLoginData) {
        cy.teacherLogin(name, validTeacherLoginData.teacherPassword)
      })
      teacherLogin.getSetPasswordBtn().should('be.visible').then(($element) => {
        if ($element.length === 0) {
          cy.fixture("LMS/Credentials").then(function (validTeacherLoginData) {
            cy.teacherLogin(name, validTeacherLoginData.teacherPassword)
          })
        } else {
          teacherLogin.getSetPassrwordContinueBtn().click()
          teacherLogin.getSetPasswordFld().type("Test@123")
          teacherLogin.getSetConfirmPasswordFld().type("Test@123")
          teacherLogin.getSetPassWordSubmitBtn().click()
          cy.contains("Log In Details Sent Successfully").should('be.visible')
          teacherLogin.getGoBackToLoginBtn().click()
          teacherLogin.getUserNameTxtFld().clear().type(name)
          teacherLogin.getPasswordTxtFld().clear().type("Test@123")
          teacherLogin.getLogInBtn().click().wait(2000)
        }
        teacherDashboard.getNewTeacherPopupCancelIcon().click()
        for (let i = 0; i < 3; i++) {
          teacherDashboard.getNewTeacherFirstPageContinueBtn().click().wait(1000)
        }
        teacherDashboard.getCalendarTabInSideNavigationBar().click({ force: true })
        teacherDashboard.getRequestLeaveBtnInCalendarPage().click().wait(2000)
        teacherDashboard.getFullDayCheckBoxInRequestAbsencePopup().click()
        teacherDashboard.getStartDateInRequestAbsencePopup().click()
        teacherDashboard.getTodaysDateInCalendarPickerInRequestAbsencePopup().click()
        teacherDashboard.getEndDateInRequestAbsencePopup().click()
        teacherDashboard.getTodaysDateInCalendarPickerInRequestAbsencePopup().click().wait(2000)
        teacherDashboard.getCloseDateInRequestAbsencePopup().click()
        teacherDashboard.getSendRequestBtnInRequestAbsencePopup().click()
        cy.contains("Request Sent Successfully").should('be.visible').wait(5000)
        teacherDashboard.teacherLogout()
        cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
          cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        adminDashboardPage.getSupportTicketTabInSideNavBar().click()
        adminDashboardPage.getLeaveRequestInSupportTickets().click()
        adminDashboardPage.getApproveBtnInLeaveRequestPage().eq(0).click()
        adminDashboardPage.getApproveRequestBtnInLeaveRequestPage().click()
        cy.contains("Leave Request Approved Substitution Pending").should('be.visible').wait(1500)
        adminDashboardPage.getApprovedStatusLstInLeaveRequestsPage("alex").should('have.text', "Approved")
        adminDashboardPage.getDashboardTabInSideNavigationBar().scrollIntoView().click()
        adminDashboardPage.getRightArrowIconInDashboardPage().click().wait(3000)
        adminDashboardPage.getTeacherPresentCount().scrollIntoView().invoke('text').then(text => {
          cy.log(text)
          var first = Number(text.charAt(0));
          var last = Number(text.charAt(text.length - 1));
          cy.wrap(last).should('be.greaterThan', first);
        })
      })
    })
  })

  it("Adm_Dashboard 006 To Validate the Student registration count is reflected in the Student Registration Sections", function () {
    adminUsersPage.getAdminUsersSideMenuTab().click()
    adminUsersPage.getAdminUsersStudentTab().click()
    let studentCount;
    adminUsersPage.getStudentLst().its('length').then((length) => {
      studentCount = Number(length);
    cy.log(studentCount)
    adminDashboardPage.getDashboardTabInSideNavigationBar().click()
    adminDashboardPage.getStudentRegistrationBtn().click({timeout:2000})
    adminDashboardPage.getStudentRegistrationCountPoint().scrollIntoView().trigger('mouseover',{force:true})
    cy.contains(studentCount+" students").should('be.visible')
    })
  })

  it.only("Adm_Dashboard 006 To Validate the cards are generated based on the pending tasks under Pending Actions Section and user is navigated to respective page on clicking on the button in each card", function () {
    cy.wait(2000)
    quickLinks.getMenuSchoolImg().click()
    quickLinks.getTimetableManagementBtn().contains('School Infrastructure').should('be.visible').click()
    cy.wait(2500)
    cy.contains('School Infrastructure').should('be.visible')
    cy.get('body').then(($el) => {
      if ($el.find('[class="rooms-delete-out"] img').length > 0) {
        quickLinks.getDeleteIconInfrastructure().then(($el) => {
          var delLen = $el.length
          cy.wrap(delLen).as('delLen')
        })
        cy.get('@delLen').then((delLen) => {
          for (let index = 0; index < delLen; index++) {
            quickLinks.getDeleteIconInfrastructure().eq(0).click()
            cy.wait(1000)
            quickLinks.getDeleteConfirmIconInfrastructure().should('be.visible').click()
            quickLinks.getDeleteSuccessMsg().should('be.visible')
            cy.wait(1000)
          }
        })
        cy.reload()
      }
    })
    cy.contains('No data found').should('be.visible')
    quickLinks.getAddInfrastructureButton().should('be.visible').click()
    quickLinks.getAddInfrastructureTextFields().should('be.visible').eq(0).clear().type(this.timeTableCreation.infraStructureName)
    quickLinks.getAddInfrastructureTextFields().eq(1).clear().type(this.timeTableCreation.floors)
    quickLinks.getAddInfrastructureTextFields().eq(2).clear().type(this.timeTableCreation.description)
    quickLinks.getAddInfrastructureAddBtn().click()
    quickLinks.getInsertedSuccessMsg().should('be.visible')
    let roomLen = (this.timeTableCreation.roomName).length
    for (let index = 0; index < roomLen; index++) {
      quickLinks.getAddRoomBtn().should('be.visible').click()
      quickLinks.getAddInfrastructureTextFields().should('be.visible').eq(0).clear().type(this.timeTableCreation.roomName[index])
      if (index < roomLen / 3) {
        quickLinks.getAddInfrastructureTextFields().eq(1).clear().type(this.timeTableCreation.floorLevel[0])
      }
      else if (index < (roomLen / 3) * 2) {
        quickLinks.getAddInfrastructureTextFields().eq(1).clear().type(this.timeTableCreation.floorLevel[1])
      }
      else {
        quickLinks.getAddInfrastructureTextFields().eq(1).clear().type(this.timeTableCreation.floorLevel[2])
      }
      quickLinks.getAddInfrastructureTextFields().eq(2).clear().type(this.timeTableCreation.description)
      quickLinks.getAddRoomGradeDropdown().click()
      quickLinks.getAddRoomGradeDropdownList().should('be.visible').eq(index).click({ force: true })
      quickLinks.getAddInfrastructureAddBtn().click()
      quickLinks.getInsertedSuccessMsg().should('be.visible')
    }
    cy.wait(3000)
    quickLinks.getGoBackBtn().click()
    cy.wait(3000)
  })
  //author - shiva
  //sample
})