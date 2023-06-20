const teacherMyclassesPage=require("../../support/pageObjects/LMS/teacherMyClasses.js")
const teacherCalenderPage=require('../../support/pageObjects/LMS/teacherCalenderPage.js')
const calenderPage=require('../../support/pageObjects/LMS/adminCalenderPage.js')
const teacherCommonPage=require("../../support/pageObjects/teacherCommonPage.js")

describe('MyClasses',function(){
    beforeEach('Login to application', function () {
        cy.visit(Cypress.env("url"))
        cy.url().should('contain', `${Cypress.env("url")}`)
        cy.viewport(1920, 1080)
        cy.fixture("LMS/Credentials").then(function (credentials) {
            cy.teacherLogin(credentials.teacherUsername1, credentials.teacherPassword)
            this.credentials=credentials;

        })
    })
it('E2E-01_My Classes_To validate the upcoming class is reflected in My Class overview Section and user is able to start the class.',function(){
    teacherCommonPage.getTeacherDashBoardPage().should('be.visible').and('have.text','Your Dashboard')
    teacherCommonPage.getTeacherSideNavbar().invoke('show').wait(500)
    teacherCommonPage.getTeacherMyCalenderTab().click({force:true}).wait(1000)
    teacherCalenderPage.getYourCalenderPage().should('be.visible')
    calenderPage.getCreateNewButton().click()  
    calenderPage.getCreateANewCalenderText().should('be.visible',{timeout:10000})
    teacherMyclassesPage.getLiveClassesTabInCreateANewCalenderEntry().click({force:true})
    teacherMyclassesPage.getCreateALiveClassPopup().should('be.visible',{timeout:1000})
    teacherMyclassesPage.getClassDropdownInCreateLiveClass().click({force:true},{timeout:1000})
    teacherMyclassesPage.getClassDropdownlistInCreateLiveClass("Grade 1 - A").click({force:true},{timeout:1000})
    teacherMyclassesPage.getSubjectDropdownInCreateLiveClass().click({force:true},{timeout:1000})
    teacherMyclassesPage.getSubjectDropdownListInCreateLiveClass("Basic maths").click({force:true},{timeout:1000})
    teacherMyclassesPage.getClassTypeDropdownInCreateLiveClass().click({force:true},{timeout:1000})
    teacherMyclassesPage.getClassTypeDropdownListInCreateLiveClass("Online").click({force:true},{timeout:1000})
   let ran=Math.ceil(Math.random())
    
    var liveClassTitle="LiveClass"+ran
    teacherMyclassesPage.getEnterLiveClassTitleTextField().type(liveClassTitle)
    teacherMyclassesPage.getAttendeesInCreateLiveClass().click({force:true})
    teacherMyclassesPage.getAddPeopleCheckbox("bhai").click({force:true})
    teacherMyclassesPage.getAttendeesCloseButton().click()

    calenderPage.getDateButtonInAppointmentPage().click()
    var d=new Date()
    var date=d.getDate()+1
    calenderPage.getPickDateInCalender(date).click().wait(1000)
    calenderPage.getStartTimeButton().click()
    for (let i = 0; i < 2; i++) {
        
        calenderPage.getBody().type('{downArrow}').wait(500)
        

    }
    calenderPage.getAMButton().click()
    calenderPage.getCreateAppointmentBody().click({ force: true })
    calenderPage.getStartTimeButton().should('have.value', '10:00 am')
    calenderPage.getEndTimeButton().click().wait(500)
    calenderPage.getPMButton().click().wait(500)
    calenderPage.getCreateAppointmentBody().click({ force: true })
    cy.wait(500)
    calenderPage.getEndTimeButton().click()
    cy.wait(500)
    for (let j = 0; j < 2; j++) {
        calenderPage.getBody().type('{downArrow}').wait(500)

    }
    calenderPage.getCreateAppointmentBody().click({ force: true })
    calenderPage.getEndTimeButton().should('have.value', '10:00 pm').wait(500)
    calenderPage.getRemindDropdownInAppointmentPage().click()
    calenderPage.getRemindDropdownListInAppointmentPage("15 minutes before the event").click()
    var description="Description"+ran
    calenderPage.getAddDescriptionTextarea().type(description)
    calenderPage.getMeetingLinkTextField().type("dklfe03201-982#^^%!28wuw7essyd6363ws6wy12")
    teacherMyclassesPage.getSaveLiveClassButton().click()
    teacherMyclassesPage.getLiveClassCreatedSuccessfullymsg().should('be.visible',{timeout:1000})
    teacherMyclassesPage.getClassesInCalender().click({force:true})
    teacherMyclassesPage.getVerifyLiveClassTitle(liveClassTitle).should('be.visible')
    teacherMyclassesPage.getDeleteButtonInParticularClass().click({force:true})
    teacherMyclassesPage.getDeleteButtonInDoUWantDeleteClasspopup().click({force:true})
    teacherMyclassesPage.getLiveClassDeletedSuccessfullymsg().should('be.visible',{timeout:1000})

})

it("E2E-07_Teacher_MyClasses_To validate scheduled live class is reflected in my calender",function(){
    teacherCommonPage.getTeacherDashBoardPage().should('be.visible').and('have.text','Your Dashboard')
    teacherCommonPage.getTeacherSideNavbar().invoke('show').wait(500)
    teacherCommonPage.getTeacherMyClassesTab().click({force:true},{timeout:1000})
    teacherMyclassesPage.getParticularStudentTab().click({force:true})
    teacherMyclassesPage.getLiveClassesTabInMyClasses().click({force:true})
    teacherMyclassesPage.getCreateNewLiveClassInMyClasses().click({force:true})
    teacherMyclassesPage.getCreateLiveClassPage().should('be.visible')


    teacherMyclassesPage.getClassDropdownInCreateLiveClass().click({force:true},{timeout:1000})
    teacherMyclassesPage.getClassDropdownlistInCreateLiveClass("Grade 1 - A").click({force:true},{timeout:1000})
    teacherMyclassesPage.getSubjectDropdownInCreateLiveClass().click({force:true},{timeout:1000})
    teacherMyclassesPage.getSubjectDropdownListInCreateLiveClass("Basic maths").click({force:true},{timeout:1000})
    teacherMyclassesPage.getClassTypeDropdownInCreateLiveClass().click({force:true},{timeout:1000})
    teacherMyclassesPage.getClassTypeDropdownListInCreateLiveClass("Online").click({force:true},{timeout:1000})
   let ran=Math.ceil(Math.random())
    
    var liveClassTitle="LiveClass"+ran
    teacherMyclassesPage.getEnterLiveClassTitleTextField().type(liveClassTitle)
    teacherMyclassesPage.getAttendeesInCreateLiveClass().click({force:true})
    teacherMyclassesPage.getAddPeopleCheckbox("bhai").click({force:true})
    teacherMyclassesPage.getAttendeesCloseButton().click()

    calenderPage.getDateButtonInAppointmentPage().click()
    var d=new Date()
    var date=d.getDate()+1
    calenderPage.getPickDateInCalender(date).click().wait(1000)
    calenderPage.getStartTimeButton().click()
    for (let i = 0; i < 2; i++) {
        
        calenderPage.getBody().type('{downArrow}').wait(500)
        

    }
    calenderPage.getAMButton().click()
    calenderPage.getCreateAppointmentBody().click({ force: true })
    calenderPage.getStartTimeButton().should('have.value', '10:00 am')
    calenderPage.getEndTimeButton().click().wait(500)
    calenderPage.getPMButton().click().wait(500)
    calenderPage.getCreateAppointmentBody().click({ force: true })
    cy.wait(500)
    calenderPage.getEndTimeButton().click()
    cy.wait(500)
    for (let j = 0; j < 2; j++) {
        calenderPage.getBody().type('{downArrow}').wait(500)

    }
    calenderPage.getCreateAppointmentBody().click({ force: true })
    calenderPage.getEndTimeButton().should('have.value', '10:00 pm').wait(500)
    calenderPage.getRemindDropdownInAppointmentPage().click()
    calenderPage.getRemindDropdownListInAppointmentPage("15 minutes before the event").click()
    var description="Description"+ran
    calenderPage.getAddDescriptionTextarea().type(description)
    calenderPage.getMeetingLinkTextField().type("dklfe03201-982#^^%!28wuw7essyd6363ws6wy12")
    teacherMyclassesPage.getSaveLiveClassButton().click()
    teacherMyclassesPage.getLiveClassCreatedSuccessfullymsg().should('be.visible',{timeout:1000})
    teacherMyclassesPage.getClassesInCalender().click({force:true})
    teacherMyclassesPage.getVerifyLiveClassTitle(liveClassTitle).should('be.visible')
    teacherMyclassesPage.getDeleteButtonInParticularClass().click({force:true})
    teacherMyclassesPage.getDeleteButtonInDoUWantDeleteClasspopup().click({force:true})
    teacherMyclassesPage.getLiveClassDeletedSuccessfullymsg().should('be.visible',{timeout:1000})

})
it("E2E_2_Teacher_MyClasses_To validate that user is able to create the workload to the studnet",function(){
    teacherCommonPage.getTeacherDashBoardPage().should('be.visible').and('have.text','Your Dashboard')
    teacherCommonPage.getTeacherSideNavbar().invoke('show').wait(500)
    teacherCommonPage.getTeacherMyClassesTab().click({force:true},{timeout:1000})
    teacherMyclassesPage.getParticularStudentTab().click({force:true}).wait(1000)
    teacherMyclassesPage.getWorkLoadparticularday().click({force:true}).wait(1000)
    teacherMyclassesPage.getCreatehomeWorkthroughWorkLoad().click({force:true})
    teacherMyclassesPage.getCreateHomeWorkPopup().should("be.visible",{timeout:1000})
    let hrand=Math.ceil(Math.random()*1000)
    let homeWorkTitle="HomeWork"+hrand
    let hDescription="Description"+hrand
    teacherMyclassesPage.getHomeWorkTitleTextField().type(homeWorkTitle)
    teacherMyclassesPage.getDescriptionTextareaField().type(hDescription)
    teacherMyclassesPage.getDueDateButton().click({force:true})
    var d = new Date();
    var date = d.getDate()+1
    calenderPage.getPickDateInCalender(date).click().wait(1000)

    teacherMyclassesPage.getDueTimeButton().click({force:true})
    for (let j = 0; j < 2; j++) {
        cy.get('body').type('{downArrow}')
        cy.wait(500)

    }
    teacherMyclassesPage.getCreateHomeworkContent().click({force:true})
    teacherMyclassesPage.getApproxTimeRequiredTextField().click({force:true}).wait(1000)
    teacherMyclassesPage.getApproxTimeRequiredList('15-30').click({force:true})
    teacherMyclassesPage.getSaveButtonInCreateHomeworkPopup().click({force:true})
    teacherMyclassesPage.getHomeworkCreatedMsg().should("be.visible",{timeout:1000}).wait(500)
    teacherMyclassesPage.getVerifyHomeworkCreated(homeWorkTitle).should('be.visible',{timeout:1000})
    teacherMyclassesPage.getHomeWorkDeleteIcon().click({force:true})
    teacherMyclassesPage.getDeleteButtonInDoUWantDeleteHomeWorkPopup().click({force:true})
    teacherMyclassesPage.getHomeworkDeletedMsg().should('be.visible',{timeout:1000})

    




})




})
//Pavani
