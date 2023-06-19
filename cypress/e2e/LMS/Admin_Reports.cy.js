const adminReportPage = require('../../support/pageObjects/LMS/adminReportPage')
const ReportDashboardPage = require('../../support/pageObjects/LMS/adminReportPage')
const dashboard = require("../../support/pageObjects/LMS/adminDashboardPage")
const teacherDashboard = require("../../support/pageObjects/LMS/teacherDashboardPage")
const teacherReport = require('../../support/pageObjects/LMS/teacherReportPage')

describe('Admin Report Validation', function () {
  var randString;
  var randNumb;

  beforeEach(function () {
    cy.visit(Cypress.env("url"))
    cy.viewport(1920, 1080)
    cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
      cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
    })
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

    cy.fixture('LMS/GradeBook_templateDetails').as('TemplateDetails')
  })

  it('Tc_001 Verify that School Admin can Edit the TopSchool Gradebook Template', function () {
    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)
    ReportDashboardPage.getAdminReportsGradeEditButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getAdminReportsVerifyBasicTemplateDetailsText().should('have.text', this.TemplateDetails.BasicTemplateDetailsText)
    ReportDashboardPage.getCreateNewTemplateGradeDropdown().should('have.text', this.TemplateDetails.Grade)
    ReportDashboardPage.getCreateNewTemplateSectionDropdown().should('have.text', this.TemplateDetails.section)
    ReportDashboardPage.getCreateNewTemplateNumberOftermsDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectNumberOftermsValue().click()
    ReportDashboardPage.getCreateNewTemplatePublishGradebookInDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectPublishGradebookInValue().click({ force: true })
    ReportDashboardPage.getCreateNewTemplateAddTestTypeButton().click()
    ReportDashboardPage.getDelButton().click()
    ReportDashboardPage.getCreateNewTemplateTermDropdown().click().wait(1000)
    ReportDashboardPage.getCreateNewTemplateTermCheckbox().dblclick()
    cy.get('body').click()
    ReportDashboardPage.getCreateNewTemplateTestTypeDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectTestTypeValue().click()
    ReportDashboardPage.getCreateNewTemplateMaxMarksDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectMaxMarksValue().click()
    ReportDashboardPage.getCreateNewTemplateAddSubjectButton().click()
    //  cy.get(':nth-child(2) > .CreateNewTemplate_crtNewTempAddThyContr__1H9Jb > .MuiButton-root > img').click()
    ReportDashboardPage.getCreateNewTemplateSubjectDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectSubjectvalue().click()
    ReportDashboardPage.getCreateNewTemplateAddTheoryAndPracticleButton().click()
    ReportDashboardPage.getAddTheoryAndPracticleTestTypeDropdown().click({ force: true })
    ReportDashboardPage.getAddTheoryAndPracticleTestTypeValue().click()
    ReportDashboardPage.getCreateNewTemplateTheoryTextfield().should('have.value', this.TemplateDetails.Theory)
    ReportDashboardPage.getCreateNewTemplatePracticleTextfield().click().type(this.TemplateDetails.Practicle)
    ReportDashboardPage.getCreateNewTemplateAddActivityTextfield().type(this.TemplateDetails.AddActivityName)
    ReportDashboardPage.getCreateNewTemplateAddPrincipleSignatureButton().click()
    ReportDashboardPage.getCreateNewTemplateVerifyAddSignatureTxt().should('have.text', this.TemplateDetails.AddSignatureTxt)
    ReportDashboardPage.getCreateNewTemplateUploadImage().selectFile(this.TemplateDetails.SignatureFile)
    ReportDashboardPage.getSaveButton().click({ force: true })
    ReportDashboardPage.getCreateNewTemplateSaveAndPreviewBtn().click()
    ReportDashboardPage.getPreviewScreenSubDetailsText().should('be.visible')
    ReportDashboardPage.getPreviewScreenCoScholasticActivitiesTxt().should('be.visible')
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click()
    ReportDashboardPage.getStudentGradeBookTxt().should('have.text', this.TemplateDetails.StudentGradeBookTxt)
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getDraftStatusToggleButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click({ force: true })
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getDraftStatusToggleButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click()
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    ReportDashboardPage.getDeleteIcon(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getDeleteButton().click()
  })



  it('Tc_002 Verify that School Admin can Create the Gradebook Template', function () {

    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)
    ReportDashboardPage.getAdminReportsGradeViewButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getCreateNewButton().click()
    ReportDashboardPage.getAdminReportsVerifyBasicTemplateDetailsText().should('have.text', this.TemplateDetails.BasicTemplateDetailsText)
    ReportDashboardPage.getCreateNewTemplateGradeDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectGradeDropdownValue().contains(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getCreateNewTemplateSectionDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectSectionDropdownValue().contains(this.TemplateDetails.section).click()
    cy.get('body').click()
    ReportDashboardPage.getCreateNewTemplateNumberOftermsDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectNumberOftermsValue().click()
    ReportDashboardPage.getCreateNewTemplatePublishGradebookInDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectPublishGradebookInValue().click({ force: true })
    ReportDashboardPage.getCountinueButton().click()
    ReportDashboardPage.getCreateNewTemplateAddTestTypeButton().click()
    ReportDashboardPage.getCreateNewTemplateTermDropdown().click().wait(1000)
    ReportDashboardPage.getCreateNewTemplateTermCheckbox().click()
    cy.get('body').click()
    ReportDashboardPage.getCreateNewTemplateTestTypeDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectTestTypeValue().click()
    ReportDashboardPage.getCreateNewTemplateMaxMarksDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectMaxMarksValue().click()
    ReportDashboardPage.getCountinueButton().click()
    ReportDashboardPage.getCreateNewTemplateAddSubjectButton().click()
    ReportDashboardPage.getCreateNewTemplateSubjectDropdown().click()
    ReportDashboardPage.getCreateNewTemplateSelectSubjectvalue().click()
    ReportDashboardPage.getCreateNewTemplateAddTheoryAndPracticleButton().click()
    ReportDashboardPage.getAddTheoryAndPracticleTestTypeDropdown().click({ force: true })
    ReportDashboardPage.getAddTheoryAndPracticleTestTypeValue().click()
    ReportDashboardPage.getCreateNewTemplateTheoryTextfield().should('have.value', this.TemplateDetails.Theory)
    ReportDashboardPage.getCreateNewTemplatePracticleTextfield().click().type(this.TemplateDetails.Practicle)
    ReportDashboardPage.getCountinueButton().click()
    ReportDashboardPage.getAddActivityButton().click()
    ReportDashboardPage.getCreateNewTemplateAddActivityTextfield().type(this.TemplateDetails.AddActivityName)
    ReportDashboardPage.getCountinueButton().click()
    ReportDashboardPage.getCreateNewTemplateAddPrincipleSignatureButton().click()
    ReportDashboardPage.getCreateNewTemplateVerifyAddSignatureTxt().should('have.text', this.TemplateDetails.AddSignatureTxt)
    ReportDashboardPage.getCreateNewTemplateUploadImage().selectFile(this.TemplateDetails.SignatureFile)
    ReportDashboardPage.getSaveButton().click({ force: true })
    ReportDashboardPage.getCreateNewTemplateSaveAndPreviewBtn().click()
    ReportDashboardPage.getPreviewScreenSubDetailsText().should('be.visible')
    ReportDashboardPage.getPreviewScreenCoScholasticActivitiesTxt().should('be.visible')
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click()
    ReportDashboardPage.getStudentGradeBookTxt().should('have.text', this.TemplateDetails.StudentGradeBookTxt)
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click({ force: true })
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getDraftStatusToggleButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click()
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getDraftStatusToggleButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click()
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    ReportDashboardPage.getDeleteIcon(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getDeleteButton().click()

  })


  it('Tc_003 Verify that School Admin can Delete the Gradebook Template', function () {
    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)
    adminReportPage.CreateNewTemplate(this.TemplateDetails.Grade, this.TemplateDetails.section, this.TemplateDetails.Practicle, this.TemplateDetails.AddActivityName, this.TemplateDetails.SignatureFile)
    ReportDashboardPage.getDeleteIcon(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getDeleteButton().click()
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade).should('not.be.enabled')
    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)
    adminReportPage.CreateNewTemplate(this.TemplateDetails.Grade, this.TemplateDetails.section, this.TemplateDetails.Practicle, this.TemplateDetails.AddActivityName, this.TemplateDetails.SignatureFile)
    adminReportPage.getGradeCheckBoxStudentGradeBookPage(this.TemplateDetails.Grade).click()
    adminReportPage.getDeleteIconStudentGradeBookPage().click()
    ReportDashboardPage.getDeleteButton().click()
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade).should('not.be.enabled')
    dashboard.logout()
    cy.fixture('LMS/Credentials').then((validTeacherLoginData) => {
      cy.teacherLogin(validTeacherLoginData.teacherUsername2, validTeacherLoginData.teacherPassword)
    })
    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click({ force: true }).wait(2000)
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)
    cy.contains('No Data Found!').contains('No Data Found!')
  })


  it('Tc_004 Verify that School Admin can view the Gradebook Template', function () {

    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)
    ReportDashboardPage.getGradeDraftStatusViewIcon(this.TemplateDetails.Grade2).click()
    ReportDashboardPage.getAdminReportsVerifyBasicTemplateDetailsText().should('have.text', this.TemplateDetails.BasicTemplateDetailsText)
    ReportDashboardPage.getPreviewButton().click()
    ReportDashboardPage.getPreviewScreenSubDetailsText().should('be.visible')
    ReportDashboardPage.getPreviewScreenCoScholasticActivitiesTxt().should('be.visible')
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click({ force: true })
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade2).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade2).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade2).should('be.visible')
    ReportDashboardPage.getDraftStatusToggleButton(this.TemplateDetails.Grade2).click().wait(1000)
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click({ force: true })
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade2).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade2).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click().wait(2000)
    adminReportPage.CreateNewTemplate(this.TemplateDetails.Grade, this.TemplateDetails.section, this.TemplateDetails.Practicle, this.TemplateDetails.AddActivityName, this.TemplateDetails.SignatureFile)
    ReportDashboardPage.getDraftStatusToggleButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getPreviewScreenSubDetailsText().should('be.visible')
    ReportDashboardPage.getPreviewScreenCoScholasticActivitiesTxt().should('be.visible')
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click().wait(1000)
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getDraftStatusToggleButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click()
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click().wait(1000)
    ReportDashboardPage.getVerifyGradeContainDraftStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getDraftStatusToggleButton(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getPreviewScreenPublishButton().click()
    ReportDashboardPage.getPreviewScreenYesPublishButton().click()
    ReportDashboardPage.getVerifyGradeContainPublishedStatus(this.TemplateDetails.Grade).should('be.visible')
    ReportDashboardPage.getPublishedStatusToggleButton(this.TemplateDetails.Grade).click().wait(1000)
    ReportDashboardPage.getYesUnfinishButton().click()
    ReportDashboardPage.getDeleteIcon(this.TemplateDetails.Grade).click()
    ReportDashboardPage.getDeleteButton().click()

  })



  it('Tc_005 Verify that School Admin can search and select filters in template  Template', function () {

    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)
    ReportDashboardPage.getSearchTextfield().type('Grade 1')
    ReportDashboardPage.getGradesList().contains('Grade 1')// validation doubrt
    ReportDashboardPage.getAllDropdown().click()
    ReportDashboardPage.getTopSchoolBtn().click()
    ReportDashboardPage.getGradesList().each(($element) => {
      var grades = $element.text()
      if (grades.includes('Grade 10') || grades.includes('Grade 11') || grades.includes('Grade 12')) {
        ReportDashboardPage.getGradesList().should('be.visible')
      }
    })
    ReportDashboardPage.getAllDropdown().click()
    ReportDashboardPage.getMySchoolBtn().click()
    ReportDashboardPage.getGradesList().contains('Grade 1') // validation doubrt

  })



  it('Tc_006 Verify that School Admin can Add results for respective students', function () {

    adminReportPage.CreateStudentAccount("kumar", randString, 9999999999, "veena", 8888888888, "Bangalore", 561101, "2012", randNumb, randNumb)
    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)
    ReportDashboardPage.getGradeBookTab().click()
    ReportDashboardPage.getGradeBookPagePendingStatus().should('be.visible')
    ReportDashboardPage.getGradeBookStudentsLists().each(($element, index) => {
      if ($element.text() == "kumar" + "" + randString) {
        ReportDashboardPage.getArrowForwordIcon().eq(index).click()
      }
    })
    ReportDashboardPage.getEditButton().click()
    ReportDashboardPage.getTheoryTextField().click().wait(1000).type(55)
    ReportDashboardPage.getPracticleTextfield().click().wait(1000).type(45)
    teacherReport.getCoScholasticActivitiesMarksTxtField().click().type(5)
    ReportDashboardPage.getRemarksTextfield().type(this.TemplateDetails.Remarks)
    ReportDashboardPage.getTotalPercentage().should('be.visible')
    ReportDashboardPage.getResult().should('be.visible')
    ReportDashboardPage.getSaveBtn().click()
    ReportDashboardPage.getUpdatedStatus().should('be.visible')
    ReportDashboardPage.getGradeBookStudentsLists().each(($element, index) => {
      if ($element.text() == "kumar" + "" + randString) {
        ReportDashboardPage.getArrowForwordIcon().eq(index).click()
      }
    })
    ReportDashboardPage.getEditButton().click()
    ReportDashboardPage.getSaveBtn().click()
    ReportDashboardPage.getGradeBookStudentsLists().each(($element, index) => {
      if ($element.text() =="kumar" + "" + randString) {
        ReportDashboardPage.getArrowForwordIcon().eq(index).click()
      }
    })
    ReportDashboardPage.getShowGradingSystemDropdown().click()
    /// This step not done =>> Admin can able to see the Grade system
    ReportDashboardPage.getPreviewAndPrintButton().click({ force: true }).wait(2000)
    ReportDashboardPage.getPrintOptions().should('be.visible')
    cy.get('body').click()
    ReportDashboardPage.getPreviewScreenPublishButton().click({ force: true })
    ReportDashboardPage.getPreviewScreenProceedPublishButton().click()
    ReportDashboardPage.getPublishedStatus().should('be.visible')
    dashboard.logout()
    cy.fixture('LMS/Credentials').then((validTeacherLoginData) => {
      cy.teacherLogin(validTeacherLoginData.teacherUsername2, validTeacherLoginData.teacherPassword)
    })

    ReportDashboardPage.getTeacherModuleMyClassTab().click({ force: true })
    cy.go('back')
    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click({ force: true }).wait(2000)
    teacherReport.getStudentGradeBookTab().eq(0).wait(1000).click()
    ReportDashboardPage.getGradeBookStudentsLists().should('be.visible')
    // Step ====>Student login Not Done
    teacherDashboard.teacherLogout()
    cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
      cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
    })
    adminReportPage.DeleteCreatedStudentAccount("kumar", randString)

  })

  it('Tc_007 Verify that School Admin can search and select filters in Gradebook', function () {
    
    adminReportPage.CreateStudentAccount("kumar", randString, 9999999999, "veena", 8888888888, "Bangalore", 561101, "2012", randNumb, randNumb)
    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.getAdminReportsVerifyStudentGradebookText().should('have.text', this.TemplateDetails.StudentGradebookText)
    ReportDashboardPage.getGradeBookTab().click()
    ReportDashboardPage.getSearchStudentTxtfield().type("kumar" + "" + randString).wait(500)
    ReportDashboardPage.getGradeBookStudentsLists().each(($Txt) => {
      var StudentName = $Txt.text()
      if (StudentName == "kumar" + "" + randString) {
        ReportDashboardPage.getGradeBookStudentsLists().should('be.visible')
      }
    })
    ReportDashboardPage.getAllGradesDropdown().click()
    ReportDashboardPage.getAddStudentPageGradesList().click()
    ReportDashboardPage.getAllSectionDropdown().click()
    ReportDashboardPage.getAddStudentPageSectionList().click()
    ReportDashboardPage.getAllTermsDropdown().click()
    ReportDashboardPage.getTermsList().click()
    ReportDashboardPage.getGradeBookStudentsLists().each(($Txt) => {
      var StudentName = $Txt.text()
      if (StudentName == "kumar" + "" + randString) {
        ReportDashboardPage.getGradeBookStudentsLists().should('be.visible')
      }
    })
    adminReportPage.DeleteCreatedStudentAccount("kumar", randString)

  })

  it('Tc_008 Verify that School Admin can search and select filters in 360 reports', function () {

    adminReportPage.CreateStudentAccount("kumar", randString, 9999999999, "veena", 8888888888, "Bangalore", 561101, "2012", randNumb, randNumb)
    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getStudent360ReportTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.get360ReportPageTitle().should('have.text', '360˚ Reports').wait(2000)
    ReportDashboardPage.get360ReportPageStudentList().each(($Txt) => {
      var StudentName = $Txt.text()
      if (StudentName == 'bhai') {
        ReportDashboardPage.get360ReportPageStudentList().should('be.visible')
      }
    })
    ReportDashboardPage.get360ReportPageGradeDropdown().click()
    ReportDashboardPage.getAddStudentPageGradesList().click()
    ReportDashboardPage.get360ReportPageSectionDropdown().click()
    ReportDashboardPage.getAddStudentPageSectionList().click().wait(2000)
    ReportDashboardPage.get360ReportPageStudentList().each(($Txt) => {
      console.log($Txt.text());
      var StudentName = $Txt.text()
      if (StudentName == "kumar" + "" + randString) {
        ReportDashboardPage.get360ReportPageStudentList().should('be.visible')
      }
    })
    teacherDashboard.teacherLogout()
    cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
      cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
    })
    adminReportPage.DeleteCreatedStudentAccount("kumar", randString)
  })

  it('Tc_009 Verify that School Admin can add the Health report in 360 reports', function () {
    
    adminReportPage.CreateStudentAccount("kumar", randString, 9999999999, "veena", 8888888888, "Bangalore", 561101, "2012", randNumb, randNumb)
    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getStudent360ReportTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.get360ReportPageTitle().should('have.text', '360˚ Reports').wait(2000)
    ReportDashboardPage.get360ReportPageGradeDropdown().click()
    cy.get('[role="listbox"] li').contains('Grade 2').click()
    ReportDashboardPage.get360ReportPageSectionDropdown().click()
    cy.get('[role="listbox"] li').contains('A').click().wait(2000)
    ReportDashboardPage.get360ReportPageStudentList().each(($Txt, index) => {
      var StudentName = $Txt.text()
      if (StudentName == "kumar" + "" + randString) {
        cy.get('button[class="viewBtn"]').eq(index).click({ force: true })
      }
    })
    ReportDashboardPage.get360ReportPageAddReportButton().click()
    ReportDashboardPage.get360ReportAddNewReportPageSchoolTypeDropdown().click()
    ReportDashboardPage.get360ReportAddNewReportPageSchoolTypeList().click()
    ReportDashboardPage.get360ReportAddNewReportPageGradeDropdown().click()
    ReportDashboardPage.get360ReportAddNewReportPageGradeList().click()
    ReportDashboardPage.get360ReportAddNewReportPageWeightTxtfield().click().type(28)
    ReportDashboardPage.get360ReportAddNewReportPageHeightTxtfield().click().type(130).wait(500)
    ReportDashboardPage.get360ReportAddNewReportPageAddButton().click({ force: true }).wait(1000)
    dashboard.logout()
    cy.fixture('LMS/Credentials').then((validTeacherLoginData) => {
      cy.teacherLogin(validTeacherLoginData.teacherUsername2, validTeacherLoginData.teacherPassword)
    })
    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click({ force: true })
    ReportDashboardPage.getStudent360ReportTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.get360ReportPageTitle().should('have.text', '360˚ Reports').wait(2000)
    teacherDashboard.teacherLogout()
    cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
      cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
    })
    adminReportPage.DeleteCreatedStudentAccount("kumar", randString)

  })

  it.only("Tc_011 Verify that School Admin is able to view the ELA's evalutaed by Teacher in 360 reports", function () {

    ReportDashboardPage.getAdminReportsSideMenubarReportTab().click()
    ReportDashboardPage.getStudent360ReportTab().should('be.visible', { timeout: 2000 }).click({ force: true })
    ReportDashboardPage.get360ReportPageTitle().should('have.text', '360˚ Reports').wait(2000)
    ReportDashboardPage.get360ReportPageStudentList().each(($Txt, index) => {
      var StudentName = $Txt.text()
      if (StudentName == 'bhai') {
        cy.get('button[class="viewBtn"]').eq(index).click()
      }
    })
    ReportDashboardPage.get360ReportMyGradestab().click()
    ReportDashboardPage.get360ReportSubjectGrades().should('be.visible')
    ReportDashboardPage.get360ReportMyCompetencyTab().click()
    ReportDashboardPage.getMyCompetenctPageDropdown().click()
    ReportDashboardPage.getSelectSubject().click()
    //
    ReportDashboardPage.get360ReportSubjectPerformanceTab().click()
    ReportDashboardPage.getSubjectPerformancePageDropdown().click()
    ReportDashboardPage.getSelectSubject().click()



  })
















  //author - manoj
})