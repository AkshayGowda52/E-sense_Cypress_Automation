const adminschoolpage = require('../../support/pageObjects/LMS/admin_Schoolpage.js')
const academicsetuppage = require('../../support/pageObjects/LMS/academicSetUpPage.js')
const gradeAndSubjectPage = require('../../support/pageObjects/LMS/academicSetUpGrade&SubjectPage.js')
const admin_Schoolpage = require('../../support/pageObjects/LMS/admin_Schoolpage.js')
const schoolInfrastructuresPage = require('../../support/pageObjects/LMS/schoolInfrastructuresPage')
const curriculumbuilderPage = require('../../support/pageObjects/LMS/curriculumBuilderPage')
const adminaccountsPage = require('../../support/pageObjects/LMS/adminAccountsPage')
const timeTableManagement = require('../../support/pageObjects/LMS/timeTableManagement')
const calenderPage = require('../../support/pageObjects/LMS/adminCalenderPage.js')
const adminDashboardPage = require("../../support/pageObjects/LMS/adminDashboardPage")
const teacherDashBoardPage=require('../../support/pageObjects/LMS/teacherDashboardPage.js')

describe("Admin School Validation", function () {

  beforeEach(function () {
    cy.visit(Cypress.env("url"))
    cy.viewport(1920, 1080)
    cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
      cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
    })
    cy.fixture("LMS/admin_School").as('academicSetUp')
  })
  

  it('admin school 001 Verify that School admin can add the new academic year successfully', function () {
    cy.wait(2000)
    adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
    adminschoolpage.getAdminSchoolQuickLinkTittle().should('have.text', this.academicSetUp.AdminSchoolQuickLinkTittle)
    adminschoolpage.getSchoolAcademicSetUp().click()
    adminschoolpage.getAcademicSetUpTittle().should('have.text', this.academicSetUp.academicSetUpTittle)
    cy.wait(2000)
    academicsetuppage.getAddNewBttn().click()
    academicsetuppage.getAddAcademicSetUpPopUpTittle().contains("Academic Year")
    // academicsetuppage.getAddAcademicPopUpSelectYearDropdownBttn().click()
    // academicsetuppage.getAddAcademicPopUpSelectYearDropdownLists().eq(0).click()
    // academicsetuppage.getAddAcademicSetUpPopUpStartDateCalenderIcon().eq(0).click()
    // academicsetuppage.getAddAcademicSetUpPopUpStartDateCalenderArrowRightIcon().click()
    // academicsetuppage.getAddAcademicSetUpPopUpCalenderDates().contains('30').click()
    // academicsetuppage.getAddAcademicSetUpPopUpStartDateCalenderIcon().eq(1).click()
    // academicsetuppage.getAddAcademicPopUpCalenderYearArrowDropDownIcon().eq(2).click()
    // academicsetuppage.getAddAcademicPopUpCalenderYearArrowDropDownLists().contains('2025').click()
    // academicsetuppage.getAddAcademicSetUpPopUpCalenderDates().contains('30').click()
    // academicsetuppage.getAddAcademicPopUpAddBttn().click()
  })

  it("admin school 002 Verify that School admin can add the Grades and subject successfully", function () {
    cy.wait(2000)
    adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
    adminschoolpage.getAdminSchoolQuickLinkTittle().should('have.text', this.academicSetUp.AdminSchoolQuickLinkTittle)
    adminschoolpage.getSchoolAcademicSetUp().click()
    adminschoolpage.getAcademicSetUpTittle().should('have.text', this.academicSetUp.academicSetUpTittle)
    cy.wait(2000)
    academicsetuppage.getGradeAndAcademicTab().click()
    cy.wait(3000)

    gradeAndSubjectPage.getSectionAddBtn('Grade 5').eq(0).click()

    gradeAndSubjectPage.getAddNewSectionPopUPTitle().should('have.text', this.academicSetUp.AddNewSectionTitle)
    gradeAndSubjectPage.getAddNewSectionPopUPSectionNameTextField().eq(0).type(this.academicSetUp.SectionName)
    cy.wait(1000)
    gradeAndSubjectPage.getAddNewSectionPopUPSectionNameTextField().eq(0).invoke('val').then((text) => {
      var sectext = text
      cy.log(sectext)
      cy.wrap(sectext).as('sectext')
    })
    gradeAndSubjectPage.getAddNewSectionPopUPSectionNameTextField().eq(1).type(this.academicSetUp.NumberOfStudent)
    gradeAndSubjectPage.getOptionalSubjectsDropDownBtn().click()
    gradeAndSubjectPage.getAddNewSectionPopUPOptionalSubjectsLists({timeout:4000}).click({ multiple: true })
    cy.wait(1000)
    cy.get('body').click(0, 0)
    cy.wait(3000)
    gradeAndSubjectPage.getAddNewSectionPopUPAddSectionBtn().click({ force: true })
    cy.wait(4000)
    adminschoolpage.getAcademicSetUpTittle().should('have.text', this.academicSetUp.academicSetUpTittle)
    cy.wait(4000)
    gradeAndSubjectPage.getSectionAddBtn('Grade 5',{timeout:4000}).eq(0).then((sectionText1) => {
      var sectionText = sectionText1.text()
      cy.log(sectionText)
      cy.get('@sectext').then((sectiontext) => {
        expect(sectiontext).to.eq(sectionText)
      })
    })


    gradeAndSubjectPage.getSectionAddBtn('Grade 5').eq(0).click()
    gradeAndSubjectPage.getSectionDeleteBtn({ timeout: 4000 }).click()
    gradeAndSubjectPage.getSectionDeletePopUpDeleteBtn({ timeout: 4000 }).click()

    gradeAndSubjectPage.getSectionAddBtn('Grade 6').eq(0).click()
    gradeAndSubjectPage.getAddNewSectionPopUPTitle().should('have.text', this.academicSetUp.AddNewSectionTitle)
    gradeAndSubjectPage.getAddNewSectionPopUPSectionNameTextField().eq(0).type(this.academicSetUp.SectionName)
    cy.wait(4000)
    gradeAndSubjectPage.getAddNewSectionPopUPSectionNameTextField().eq(0).invoke('val').then((text) => {
      var sectext = text
      cy.log(sectext)
      cy.wrap(sectext).as('sectext')
    })
    gradeAndSubjectPage.getAddNewSectionPopUPSectionNameTextField().eq(1).type(this.academicSetUp.NumberOfStudent)
    gradeAndSubjectPage.getOptionalSubjectsDropDownBtn().click()
    gradeAndSubjectPage.getAddNewSectionPopUPOptionalSubjectsLists().click({ multiple: true })
    cy.wait(3000)
    cy.get('body').click(0, 0)
    cy.wait(3000)
    gradeAndSubjectPage.getAddNewSectionPopUPAddSectionBtn().click({ force: true })
    cy.wait(2000)
    adminschoolpage.getAcademicSetUpTittle().should('have.text', this.academicSetUp.academicSetUpTittle)
    cy.wait(4000)
    gradeAndSubjectPage.getSectionAddBtn('Grade 6').eq(0).then((sectionText1) => {
      var sectionText = sectionText1.text()
      cy.log(sectionText)
      cy.get('@sectext').then((sectiontext) => {
        expect(sectiontext).to.eq(sectionText)
      })
    })

    gradeAndSubjectPage.getSectionAddBtn('Grade 6').eq(0).click()
    gradeAndSubjectPage.getSectionDeleteBtn({ timeout: 4000 }).click()
    gradeAndSubjectPage.getSectionDeletePopUpDeleteBtn({ timeout: 4000 }).click()

  })

  it('admin school 003 Verify that School admin can add the School infracture successfully', function () {
    cy.wait(2000)
    adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
    adminschoolpage.getAdminSchoolQuickLinkTittle().should('have.text', this.academicSetUp.AdminSchoolQuickLinkTittle)
    admin_Schoolpage.getSchoolInfrastructures().click()
    schoolInfrastructuresPage.getInfrastructureTitle().should('have.text', "School Infrastructure")

    schoolInfrastructuresPage.getInfrastructureSingleDeleteBtn('testyantra').click()
    schoolInfrastructuresPage.getInfrastructureDeleteBttnPopUp().click()

    schoolInfrastructuresPage.getAddInfrastructureBttn().click()
    schoolInfrastructuresPage.getPopUpAddInfrastructureTitle().should('have.text', "Add Infrastructure")
    schoolInfrastructuresPage.getInfrastructureNameTextField().type("testyantra")
    schoolInfrastructuresPage.getInfrastructureNameTextField().invoke('val').then((text) => {
      var infrastructurename = text
      cy.wrap(infrastructurename).as('infrastructurename')
    })
    schoolInfrastructuresPage.getNumberofFloorsTextField().type("10")
    schoolInfrastructuresPage.getDiscriptionTextField().type("Good infrastructure")
    schoolInfrastructuresPage.getaddbttn().click()
    cy.wait(1000)
    schoolInfrastructuresPage.getAddInfrastructureInsertedSuccessfully().should('have.text', "Inserted Successfully")
    schoolInfrastructuresPage.getInfrastructureTitle().should('have.text', "School Infrastructure")
    cy.wait(2000)
    schoolInfrastructuresPage.getInfrastructureNameTexts().each(($el, index, $list) => {
      var infraNames = $el.text()
      if (infraNames === "testyantra") {
        schoolInfrastructuresPage.getAddRoomBttn().eq(index).click()
        schoolInfrastructuresPage.getAddRoomPopUpTitle().should('have.text', "Add Room")
        schoolInfrastructuresPage.getRoomNameTextField().eq(0).type("Kannada")
        schoolInfrastructuresPage.getRoomNameTextField().eq(1).type("1")
        schoolInfrastructuresPage.getGradeDropDownBttn().click()
        schoolInfrastructuresPage.getGradeDropDownLists().contains("Grade 7 - a").click()
        schoolInfrastructuresPage.getRoomNameTextField().eq(2).type("kannada class start at 9:30am in 1 floor")
        schoolInfrastructuresPage.getPopupAddRoomBttn().click()
        // schoolInfrastructuresPage.getInfrastructureDeleteIconBtn().eq(index).click()
        // schoolInfrastructuresPage.getInfrastructureDeleteBttnPopUp().click()
      }
    })
  })


  it("admin school 04 Verify that School admin can create the Curriculum successfully for the Grades selected as part fo license", function () {
    cy.wait(2000)
    adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
    adminschoolpage.getAdminSchoolQuickLinkTittle().should('have.text', this.academicSetUp.AdminSchoolQuickLinkTittle)
    adminschoolpage.getCurriculumBuilder().click()
    curriculumbuilderPage.getCurriculumBuilderPageTitleText().should('have.text', 'Curriculum Builder')
    curriculumbuilderPage.getTopSchoolTabText().should('have.text', "TopSchool")
    curriculumbuilderPage.getMySchoolTab().click()
    curriculumbuilderPage.getMySchoolGradesText().each(($el, index, $list) => {
      let count = $el.length
      for (let i = 0; i <= count; i++) {
        curriculumbuilderPage.getViewDetailsBttn().eq(index).click()
        cy.get('.Pending').eq(index).should('be.visible')
      }
    })
    curriculumbuilderPage.getTopSchoolTabText().click()
    cy.wait(3000)
    curriculumbuilderPage.getAllSelectGradesCheckBox().eq(0).click()
    cy.wait(3000)
    curriculumbuilderPage.getBottomDuplicateBtn({timeout:4000}).click()
    curriculumbuilderPage.getOverWrightBtn().click()
    cy.wait(3000)
    curriculumbuilderPage.getSussfullMessage({timeout:4000}).should('be.visible')
    curriculumbuilderPage.getMySchoolTab().click()
    curriculumbuilderPage.getMySchoolAllSelectGradesCheckBox().eq(0).click()
    curriculumbuilderPage.getMyschlBootomApproveBtn().click()
    curriculumbuilderPage.getMyschlPopUpApproveBtn().click()
    curriculumbuilderPage.getCurriculumApprovePopUpText().should('be.visible')
    curriculumbuilderPage.getCurriculumApproveCloseBtn().click()

    curriculumbuilderPage.getMySchoolGradesText().each(($el1, index, $list) => {
      curriculumbuilderPage.getViewDetailsBttn().eq(index).click()
      cy.get('.Done').should('be.visible')
      cy.wait(1000)
    })
  })

  it("admin school 05 Verify that School admin can add new Admin accounts successfully with granting access per module required", function () {
    cy.wait(2000)
    adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
    adminschoolpage.getAdminSchoolQuickLinkTittle().should('have.text', this.academicSetUp.AdminSchoolQuickLinkTittle)
    adminschoolpage.getAdminAccounts().click()
    adminaccountsPage.getAdminAccountText().eq(0).should('have.text', 'Admin Accounts')
    adminaccountsPage.getAddnewBtn().click()
    adminaccountsPage.getAddNewRolePopUpText().should('contain.text', 'Add New Role')
    adminaccountsPage.getDesignationNameTextField().type("Teacher")
    adminaccountsPage.getDesignationNameTextField().invoke('val').then((text) => {
      var designationName = text
      cy.log(designationName)
      cy.wrap(designationName).as('designationName')
    })
    adminaccountsPage.getViewEditApprovalCheckBox().click({ multiple: true })
    adminaccountsPage.getAddRolePopUpBtn().click()
    cy.wait(4000)
    adminaccountsPage.getAdminTabBtn().click()
    adminaccountsPage.getAdminAddNewbtn().click()
    adminaccountsPage.getAdminFirstName().type('Sundri')
    adminaccountsPage.getAdminEmail().type('sundri@gmail.com')
    adminaccountsPage.getAdminCalenderIcon().click()
    adminaccountsPage.getAdminCalenderYearsbtn().click()
    adminaccountsPage.getAdminCalenderYears().contains('1998').click()
    adminaccountsPage.getAdminCalenderDate().contains('5').click()
    adminaccountsPage.getAdminGanderDropDown().click()
    adminaccountsPage.getAdminGanderDropDownLists().contains('Female').click()
    adminaccountsPage.getAdminContactTextField().type('9967885688')
    adminaccountsPage.getAdminBloodGroupbtn().click()
    adminaccountsPage.getAdminBloodGroupLists().contains('O+').click()
    adminaccountsPage.getAdminEmployeeIDbtn().type('Malco007')
    adminaccountsPage.getAdminSelectRoleBtn().click()
    adminaccountsPage.getAdminSelectRoleLists().contains('Teacher').click()
    adminaccountsPage.getAdminAddressLine1btn().type('Bnagalore Univercity')
    adminaccountsPage.getAdminAddressLine2Btn().type("Ulall")
    adminaccountsPage.getAdminPincode().type('560056')
    // cy.get('input[name="state"]').click({force:true})
    cy.wait(4000)
    adminaccountsPage.getAdminContinueBtn().click()
    cy.wait(3000)

    // adminaccountsPage.getAdminAccountTableRoleText('Teacher',{timeout:4000}).click()
    adminaccountsPage.getRoleTab({timeout:4000}).click()
    adminaccountsPage.getAdminAccountTableRoleTexts().then((roleText) => {
      var roletext = roleText.text()
      cy.log(roletext)
      if (roletext === 'Teacher') {
        cy.get('@designationName').then((designationname) => {
          cy.log(roletext)
          expect(designationname).to.eq(roletext)
        })
      }
    })
    adminaccountsPage.getAdminAccountTableRoleText('Teacher', { timeout: 4000 }).click()


    cy.wait(2000)
    // adminaccountsPage.getRoleTab().click()
    // adminaccountsPage.getRoleDeleteBtn().click()
    adminaccountsPage.getRoleDeletePopUpBtn().click()
    cy.get('body').click(0, 0)


  })

  it('admin school 07 Verify that School Admin can Create the Auto time table successfully', function () {
    cy.wait(2000)
    adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
    adminschoolpage.getAdminSchoolQuickLinkTittle().should('have.text', this.academicSetUp.AdminSchoolQuickLinkTittle)
    adminschoolpage.getAdminTimetableManagement().click()
    timeTableManagement.getTimetableManagmentText().should('have.text', 'Timetable Management')
    timeTableManagement.getTypeText().should('be.visible')
    timeTableManagement.getStatus().should('be.visible')
    timeTableManagement.getGenerateTimeTable().click()
    timeTableManagement.getCheckBtns().eq(1).should('be.checked')
    timeTableManagement.getSchoolStartingTimeBtns().eq(2).click()

    for (let i = 0; i < 3; i++) {

      calenderPage.getBody().type('{downArrow}')
      cy.wait(500)

    }
    calenderPage.getAMButton().click()
    timeTableManagement.getSchoolStartingTimeBtns().eq(2).click()
    timeTableManagement.getSchoolStartingTimeBtns().eq(3).click()
    cy.wait(3000)
    // calenderPage.getPMButton().eq(1).click({ force: true })
    cy.get('.css-sfp64 > .MuiTypography-root').click()
    cy.wait(500)
    timeTableManagement.getSchoolStartingTimeBtns().eq(3).click()
    cy.wait(500)
    timeTableManagement.getSchoolStartingTimeBtns().eq(3).click()
    for (let j = 0; j < 8; j++) {
      cy.get('body').type('{downArrow}')
      cy.wait(500)

    }
    timeTableManagement.getSchoolStartingTimeBtns().eq(3).click()
    timeTableManagement.getDropDowns().eq(0).click()
    timeTableManagement.getDayWeeksDropDownLists().contains('6').click()
    timeTableManagement.getDropDowns().eq(1).click()
    timeTableManagement.getDayWeeksDropDownLists().contains('7').click()
    timeTableManagement.getDropDowns().eq(2).click()
    timeTableManagement.getDayWeeksDropDownLists().contains('60 Minutes').click()
    timeTableManagement.getDropDowns().eq(3).click()
    timeTableManagement.getRoomLists().contains('Kannada').click()
    timeTableManagement.getBrealTextFields().eq(0).type('Break1')
    timeTableManagement.getDropDowns().eq(4).click()
    timeTableManagement.getDayWeeksDropDownLists().contains('15 Minutes').click()
    timeTableManagement.getDropDowns().eq(5).click()
    timeTableManagement.getRoomLists().contains("2nd").click()
    timeTableManagement.getAddBrerakBtn().click()
    timeTableManagement.getBrealTextFields().eq(1).type('Lunch Break')
    timeTableManagement.getDropDowns().eq(6).click()
    timeTableManagement.getDayWeeksDropDownLists().contains('30 Minutes').click()
    timeTableManagement.getDropDowns().eq(7).click()
    timeTableManagement.getRoomLists().contains("4th").click()
    timeTableManagement.getAddBrerakBtn().click()
    timeTableManagement.getBrealTextFields().eq(2).type('Tea Break')
    timeTableManagement.getDropDowns().eq(8).click()
    timeTableManagement.getDayWeeksDropDownLists().contains('15 Minutes').click()
    timeTableManagement.getDropDowns().eq(9).click()
    timeTableManagement.getRoomLists().contains("6th").click()
    timeTableManagement.getGenerateTimeSlotsBtn().click()
    cy.wait(4000)
    timeTableManagement.getGeneratedTimetableGradeText().should('contain', 'Grade 7 - a')
    timeTableManagement.getGeneratedTimetableWeeks().should('have.length', '6')
    timeTableManagement.getPeriodSlotsbtn().eq(3).click()
    timeTableManagement.getPeriodPopUpTitleText().should('have.text', 'Add Period')
    timeTableManagement.getPeriodSubjectAndTeacherdropdownBtns().eq(0).click()
    timeTableManagement.getPeriodSubjectDropDownLists().contains('Science VII').click()
    timeTableManagement.getPeriodTeacherDropDownBtn().click()
    timeTableManagement.getPeriodSubjectDropDownLists().contains('Abhi').click()
    timeTableManagement.getPeriodAddBtn().click()
    timeTableManagement.getPublishBtn().click()
    timeTableManagement.getTimeTableManagementClassLists().should('contain', 'Grade 7 - a')

    adminDashboardPage.logout()

    cy.visit(Cypress.env("url"))
    cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
      cy.teacherLogin(validAdminLoginData.teacherUserName3, validAdminLoginData.teacherPassword)
    })
    timeTableManagement.getTeacherDashBoardUpNextText().should('have.text','Up Next')
    timeTableManagement.getTeacherDashBoardLaterTodayText().should('have.text','Later Today')
    cy.wait(3000)
    timeTableManagement.getTeacherMyClassSideBarImgBtn().click()
    timeTableManagement.getTeacherMyClassSubjects().should('be.visible')
    timeTableManagement.getTeacherMyClassSubjects().eq(0).click()
    timeTableManagement.getMyclassPerticulatSubjectTabs().should('be.visible')
    cy.wait(2000)
    timeTableManagement.getTeacherMyCalanderSideBarImgBtn().click()
    var d = new Date();
    var date = d.getDate()
    cy.log(date)
    timeTableManagement.getMyClassTeacherAssingedClassbtn().should('be.visible')

    teacherDashBoardPage.teacherLogout()

    cy.visit(Cypress.env("url"))
    cy.viewport(1920, 1080)
    cy.fixture("LMS/Credentials").then(function (validAdminLoginData) {
      cy.adminLogin(validAdminLoginData.username, validAdminLoginData.password)
    })

    cy.wait(2000)
    adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
    adminschoolpage.getAdminSchoolQuickLinkTittle().should('have.text', this.academicSetUp.AdminSchoolQuickLinkTittle)
    adminschoolpage.getAdminTimetableManagement().click()
    timeTableManagement.getTimetableManagmentText().should('have.text', 'Timetable Management')
    timeTableManagement.getDeleteTimeTableForParticularGrade('Grade 7 - a',{timeout:1000}).click()
    timeTableManagement.getTimeTableDeletePopUpBtn().click()
    cy.wait(3000)

  })

  it('admin school 08 Verify that School Admin can Update and republish the Manual time table which is published already', function () {
    adminschoolpage.getSchoolSideBarNavigationImg().trigger('mouseover').click()
    adminschoolpage.getAdminSchoolQuickLinkTittle().should('have.text', this.academicSetUp.AdminSchoolQuickLinkTittle)
    adminschoolpage.getAdminTimetableManagement().click()
    timeTableManagement.getTimetableManagmentText().should('have.text', 'Timetable Management')
    cy.wait(3000)
    timeTableManagement.getTimeTableManagementTypes().each((TypeTexts) => {
      var typetexts = TypeTexts.text()
      cy.log(typetexts)
      if (typetexts === 'Manual') {
        timeTableManagement.getTimeTableManagementStatus().should('be.visible')
        timeTableManagement.getTimeTableManagementActionEditBtns().should('be.visible')
        timeTableManagement.getTimeTableManagementActionDeleteBtns().should('be.visible')
      }
    })
    timeTableManagement.getTimeTableEditBtnForPerticularGrade('Grade 7 - B').click()
    cy.wait(1000)
    // timeTableManagement.getTimeTableManagementActionEditBtns().eq(0).click({ force: true })
    cy.wait(2000)
    timeTableManagement.getEditTimetableTable().should('be.visible')
    timeTableManagement.getTimeTableManagementClassCardSections().should('be.visible')
  })

})


    //Akshay





