const adminDashboardPage=require("../../support/pageObjects/LMS/adminDashboardPage.js")
const teacherCalenderPage=require('../../support/pageObjects/LMS/teacherCalenderPage.js')
const teacherCommonPage=require("../../support/pageObjects/teacherCommonPage.js")
const teacherDashboardPage=require("../../support/pageObjects/LMS/teacherDashboardPage.js")
const calenderPage=require('../../support/pageObjects/LMS/adminCalenderPage.js')
describe("MyCalender",function(){
    beforeEach('Login to application', function () {
        cy.visit(Cypress.env("url"))
        cy.url().should('contain', `${Cypress.env("url")}`)
        cy.viewport(1920, 1080)
        cy.fixture("LMS/Credentials").then(function (credentials) {
            cy.teacherLogin(credentials.teacherUsername1, credentials.teacherPassword)
            this.credentials=credentials;

        })
    })

it("E2E_4_MyCalender_Verify that School Teacher  can add Homework and Notes successfully for the classes assigned",function(){

    teacherCommonPage.getTeacherDashBoardPage().should('be.visible').and('have.text','Your Dashboard')
    teacherCommonPage.getTeacherSideNavbar().invoke('show').wait(500)
    teacherCommonPage.getTeacherMyCalenderTab().click({force:true}).wait(1000)
    teacherCalenderPage.getYourCalenderPage().should('be.visible')
    teacherCalenderPage.getCalender().should('be.visible')
    teacherCalenderPage.getClassInCalender().should('be.visible')
    teacherCalenderPage.getRequestLeaveButton().should('be.visible')
    teacherCalenderPage.getCreateNewButton().should('be.visible')
    teacherCalenderPage.getWeeklyCalender().should('be.visible')
    teacherCalenderPage.getWeeklyDropdown().select('Monthly')
    teacherCalenderPage.getMonthlyCalender().should('be.visible')
    teacherCalenderPage.getWeeklyDropdown().select('Daily')
    teacherCalenderPage.getDailyCalender().should('be.visible')
    teacherCalenderPage.getWeeklyDropdown().select('Weekly')
    teacherCalenderPage.getClassInCalender().click().wait(1000)
    teacherCalenderPage.getAddLessonPlanButton().should('be.visible')
    teacherCalenderPage.getStartSessionButton().should('be.visible')
    teacherCalenderPage.getRescheduleClassButton().should('be.visible')
    teacherCalenderPage.getResourceText().should('be.visible')
    teacherCalenderPage.getNotesAttachedText().should('be.visible')
    teacherCalenderPage.getHomeworkText().should('be.visible')
    teacherCalenderPage.getStudentsText().should('be.visible')
    teacherCalenderPage.getAddHomeWorkButton().click()
    teacherCalenderPage.getAddHomeworkPopup().should('be.visible',{timeout:1000})
    let ran=Math.ceil(Math.random()*10000)
    let homeWorkTitle="Homework"+ran
    let description="Description"+ran
    teacherCalenderPage.getHomeworkTitleTextField().type(homeWorkTitle)
    teacherCalenderPage.getHomeworkDescriptionTextareaField().type(description)
    teacherCalenderPage.getDueTimeButton().click().wait(1000)
    for (let j = 0; j < 2; j++) {
        teacherCommonPage.getBody().type('{downArrow}').wait(500)

    }
    teacherCalenderPage.getAddHomeworkBody().click({ force: true })
    teacherCalenderPage.getApproxTimeRequiredDropdown().click()
    teacherCalenderPage.getApproxTimeRequiredDropdownList('15-30').click()
    teacherCalenderPage.getManageStudentsButton().should('be.visible')
    teacherCalenderPage.getAddAttachFiles().should('be.visible')
    teacherCalenderPage.getSaveButton().click()
    teacherCalenderPage.getHomeworkCreatedMsg().should('be.visible',{timeout:1000})
    teacherCalenderPage.getNotesAttachedViewButton().click()
    teacherCalenderPage.getYourNotesText().should('be.visible')
    teacherCalenderPage.getAddNoteButton().click()
    let notesTitle="Notes"+ran
    let notesDescription="NotesDescription"+ran
    teacherCalenderPage.getAddNotesTitleTextField().type(notesTitle)
    teacherCalenderPage.getAddNotesDescription().type(notesDescription)
    teacherCalenderPage.getBackToNoteList().click().wait(1000)
    teacherCalenderPage.getYourNotesCloseIcon().click()
    teacherCalenderPage.getHomeworkView().click()
    teacherCalenderPage.getDeleteHomeWorkButton().click({force:true})
    teacherCalenderPage.getDeleteButton().click({force:true}).wait(1000)
    teacherCalenderPage.getcloseIcon().click({force:true}).wait(1000)
    teacherCalenderPage.getCancelButton().click()
    teacherCalenderPage.getYourCalenderPage().should('be.visible',{timeout:1000})

})
it("E2E_5_My Calender_Verify that School Teacher  can apply and see the Filters in My Calender",function(){
    teacherCommonPage.getTeacherDashBoardPage().should('be.visible').and('have.text','Your Dashboard')
    teacherCommonPage.getTeacherSideNavbar().invoke('show').wait(500)
    teacherCommonPage.getTeacherMyCalenderTab().click({force:true})
    teacherCalenderPage.getYourCalenderPage().should('be.visible')
    teacherCalenderPage.getClassInCalender().should('be.visible')
    teacherCalenderPage.getWeeklyCalender().should('be.visible')
    teacherCalenderPage.getWeeklyDropdown().select('Monthly')
    teacherCalenderPage.getMonthlyCalender().should('be.visible')
    teacherCalenderPage.getWeeklyDropdown().select('Daily')
    teacherCalenderPage.getDailyCalender().should('be.visible')
    teacherCalenderPage.getWeeklyDropdown().select('Weekly')
    teacherDashboardPage.teacherLogout()
    cy.adminLogin(this.credentials.username,this.credentials.password).wait(1000)
    adminDashboardPage.getSideNavBar().invoke('show')
    adminDashboardPage.getCalenderTab().click()
    calenderPage.getYourCalenderText().should('be.visible', { delay: 10000 })
    /////////////////////create holiday////////////////////////////////////
    calenderPage.getCreateNewButton().click()
    calenderPage.getCreateANewCalenderText().should('be.visible',{timeout:10000})
    calenderPage.getHolidaybutton().click()
    calenderPage.getCreateHolidayText().should('be.visible')
    var hrand = Math.ceil(Math.random()*1000)
    var holiday= 'Holiday' + hrand;
    calenderPage.getEnterHolidayTextField().type(holiday)
    calenderPage.getStartdateButtonInCreateHolidayPage().click()
    var d = new Date();
    var date = d.getDate()+1
    calenderPage.getPickDateInCalender(date).click().wait(1000)
    calenderPage.getEnddateButtonInCreateHolidayPage().click()
    calenderPage.getPickDateInCalender(date).click().wait(1000)
    var description="description"+holiday
    calenderPage.getHolidayDescriptionTextareaField().type(description)
    calenderPage.getSaveHolidayButton().click()
    calenderPage.getHolidayAddedSuccessfullyMsg().should('be.visible',{timeout:10000})
///////////////////////create exam////////////////////////////////////
calenderPage.getCreateNewButton().click()  
calenderPage.getCreateANewCalenderText().should('be.visible',{timeout:10000})
calenderPage.getExamTab().click()
calenderPage.getCreateExamText().should('be.visible',{timeout:10000})
calenderPage.getGradeDropdownInEventPage().click()
calenderPage.getGradeDropdownListInExamPage('Grade 1').scrollIntoView().click({force:true},{timeout:10000})
calenderPage.getSubjectDropdownInExamSection().click().wait(500)
calenderPage.getSubjectDropdownList('Basic maths').click({force:true})
var rand=Math.ceil(Math.random()*1000)
var exam="Exam"+rand
calenderPage.getExamTitleTextField().type(exam)
calenderPage.getDateOfExamButton().click()
var d=new Date()
var date=d.getDate()+1
calenderPage.getPickDateInCalender(date).click().wait(1000)
calenderPage.getStartTimeButton().click()
for (let i = 0; i < 2; i++) {
    
    calenderPage.getBody().type('{downArrow}').wait(500)
    

}
calenderPage.getAMButton().click()
calenderPage.getCreateExamBody().click({ force: true })
calenderPage.getStartTimeButton().should('have.value', '10:00 am')
calenderPage.getEndTimeButton().click().wait(500)
calenderPage.getPMButton().click().wait(500)
calenderPage.getCreateExamBody().click({ force: true })
cy.wait(500)
calenderPage.getEndTimeButton().click()
cy.wait(500)
for (let j = 0; j < 2; j++) {
    calenderPage.getBody().type('{downArrow}').wait(500)

}
calenderPage.getCreateExamBody().click({ force: true })
calenderPage.getEndTimeButton().should('have.value', '10:00 pm').wait(500)
calenderPage.getExamTypeDropdown().click()
calenderPage.getExamTypeDropdownList('Test 1').click()
calenderPage.getAttachAFileButton().attachFile('LMS/Event_added.pdf',{force:true}).wait(500)
calenderPage.getSaveExamButton().click().wait(500)


    adminDashboardPage.logout()
    cy.wait(10000)
    cy.teacherLogin(this.credentials.teacherUsername1,this.credentials.teacherPassword)
    teacherCommonPage.getTeacherDashBoardPage().should('be.visible').and('have.text','Your Dashboard')
    teacherCommonPage.getTeacherSideNavbar().invoke('show').wait(500)
    teacherCommonPage.getTeacherMyCalenderTab().click({force:true})
    teacherCalenderPage.getClassesCheckbox().click().wait(1000)
    teacherCalenderPage.getHolidaysCheckbox().click().wait(500)
    teacherCalenderPage.getHolidayListInCalender(holiday).should('be.visible')
    teacherCalenderPage.getHolidaysCheckbox().click().wait(500)
    teacherCalenderPage.getExamCheckbox().click().wait(500)
    teacherCalenderPage.getExamListInCalender(exam).should('be.visible').wait(500)

    calenderPage.getCreateNewButton().click()
    calenderPage.getCreateANewCalenderText().should('be.visible', { timeout: 10000 })
    calenderPage.getRemainderTab().click()
    calenderPage.getCreateRemainderText().should('be.visible')
    var rand = Math.ceil(Math.random()*1000)
    var remain = 'Remainder' + rand;
    calenderPage.getEnterRemainderTitleTextField().type(remain)
    calenderPage.getDateTextField().click()
    var d = new Date();
    var date = d.getDate()+1
    calenderPage.getPickDateInCalender(date).click()
    calenderPage.getStartTimeButton().click()
    for (let i = 0; i < 2; i++) {
        
        calenderPage.getBody().type('{downArrow}')
        cy.wait(500)

    }
    calenderPage.getAMButton().click()
    calenderPage.getRemainderModelContent().click({ force: true })
    calenderPage.getStartTimeButton().should('have.value', '10:00 am')
    calenderPage.getEndTimeButton().click().wait(500)
    calenderPage.getPMButton().click()
    calenderPage.getRemainderModelContent().click({ force: true })
    cy.wait(500)
    calenderPage.getEndTimeButton().click()
    cy.wait(500)
    for (let j = 0; j < 2; j++) {
        cy.get('body').type('{downArrow}')
        cy.wait(500)

    }
    calenderPage.getRemainderModelContent().click({ force: true } )
    calenderPage.getEndTimeButton().should('have.value', '10:00 pm')
    calenderPage.getRepeatDropdown().click()
    calenderPage.getRepeatlist('Every weekday').click()
    calenderPage.getEndRemainderOnButton().click({ force: true })
    calenderPage.getPickDateInCalender(date).click()
    cy.wait(1000)
    calenderPage.getAddDescriptionTextarea().type('Remainder for Event' + remain).wait(1000)
    calenderPage.getAttachAFileButton().attachFile('LMS/Event_added.pdf',{force:true}).wait(500)
    calenderPage.getAddNotesButton().click().wait(500)
    calenderPage.getAddNoteButton().click()
    var title="Notes"+remain
    var description="description"+remain
    calenderPage.getViewNoteTimeText().then(function($el){
    var time=$el.text()
    calenderPage.getAddTitleTextField().type(title)
    calenderPage.getDescriptionTextField().type(description).wait(2000)
    calenderPage.getBackToNoteListButton().click().wait(1000)
    calenderPage.getAllNotesButton().click()
    calenderPage.getSearchTextField().type(title)
    calenderPage.getVerifyAddNotesTitleText(title).should('be.visible')
    calenderPage.getVerifyDescriptionText(description).should('be.visible')
    calenderPage.getVerifyTimeText(time).should('be.visible')
    calenderPage.getCloseIcon().click()
    calenderPage.getSaveRemainderButton().click()
    calenderPage.getRemainderSavedSuccesfullyMsg().should('be.visible',{timeout:1000})

})

calenderPage.getRemaindersCheckBox().click()
calenderPage.getWeeklyDropdown().select('Monthly')
calenderPage.getVerifyTextInMonthlyCalender(remain).should('be.visible').wait(500)
calenderPage.getWeeklyDropdown().select('Weekly')
calenderPage.getRemainderDetailsInCalender(remain).click({force:true})
calenderPage.getDeleteButton().click()
calenderPage.getDeleteForEverButton().click({force:true}).wait(1000)
teacherDashboardPage.teacherLogout()
cy.adminLogin(this.credentials.username,this.credentials.password).wait(1000)
adminDashboardPage.getSideNavBar().invoke('show')
adminDashboardPage.getCalenderTab().click()
calenderPage.getYourCalenderText().should('be.visible', { delay: 10000 })

calenderPage.getHolidayDetailsIncalender(holiday).click({force:true})
calenderPage.getDeleteButton().click({force:true})
calenderPage.getDeleteHolidayButton().click({force:true}).wait(1000)
calenderPage.getYourCalenderText().should('be.visible',{timeout:10000})


calenderPage.getExamCheckbox().click({force:true})
calenderPage.getWeeklyDropdown().select('Weekly')
calenderPage.getExamDetailsIncalender(exam).click({force:true})
calenderPage.getDeleteButton().click()
calenderPage.getDeleteExamButton().click({force:true}).wait(10000)
calenderPage.getYourCalenderText().should('be.visible',{timeout:10000})


})
it("E2E_06_My Calender_Verify that School Teacher  can apply For Leave successfully",function(){
    teacherCommonPage.getTeacherDashBoardPage().should('be.visible').and('have.text','Your Dashboard')
    teacherCommonPage.getTeacherSideNavbar().invoke('show').wait(500)
    teacherCommonPage.getTeacherMyCalenderTab().click({force:true})
    teacherCalenderPage.getYourCalenderPage().should('be.visible')
    teacherCalenderPage.getClassInCalender().should('be.visible')
    teacherCalenderPage.getWeeklyCalender().should('be.visible')

    calenderPage.getCreateNewButton().click()
    calenderPage.getCreateANewCalenderText().should('be.visible', { timeout: 10000 })

    calenderPage.getRemainderTab().click()
    calenderPage.getCreateRemainderText().should('be.visible')
    var rand = Math.ceil(Math.random()*1000)
    var remain = 'Remainder' + rand;
    calenderPage.getEnterRemainderTitleTextField().type(remain)
    calenderPage.getDateTextField().click()
    var d = new Date();
    var date = d.getDate()+1
    calenderPage.getPickDateInCalender(date).click()
    calenderPage.getStartTimeButton().click()
    for (let i = 0; i < 2; i++) {
        
        calenderPage.getBody().type('{downArrow}')
        cy.wait(500)

    }
    calenderPage.getAMButton().click()
    calenderPage.getRemainderModelContent().click({ force: true })
    calenderPage.getStartTimeButton().should('have.value', '10:00 am')
    calenderPage.getEndTimeButton().click().wait(500)
    calenderPage.getPMButton().click()
    calenderPage.getRemainderModelContent().click({ force: true })
    cy.wait(500)
    calenderPage.getEndTimeButton().click()
    cy.wait(500)
    for (let j = 0; j < 2; j++) {
        cy.get('body').type('{downArrow}')
        cy.wait(500)

    }
    calenderPage.getRemainderModelContent().click({ force: true } )
    calenderPage.getEndTimeButton().should('have.value', '10:00 pm')
    calenderPage.getRepeatDropdown().click()
    calenderPage.getRepeatlist('Every weekday').click()
    calenderPage.getEndRemainderOnButton().click({ force: true })
    calenderPage.getPickDateInCalender(date).click()
    cy.wait(1000)
    calenderPage.getAddDescriptionTextarea().type('Remainder for Event' + remain).wait(1000)
    calenderPage.getAttachAFileButton().attachFile('LMS/Event_added.pdf',{force:true}).wait(500)
    calenderPage.getAddNotesButton().click().wait(500)
    calenderPage.getAddNoteButton().click()
    var title="Notes"+remain
    var description1="description"+remain
    calenderPage.getViewNoteTimeText().then(function($el){
    var time=$el.text()
    calenderPage.getAddTitleTextField().type(title)
    calenderPage.getDescriptionTextField().type(description1).wait(2000)
    calenderPage.getBackToNoteListButton().click().wait(1000)
    calenderPage.getAllNotesButton().click()
    calenderPage.getSearchTextField().type(title)
    calenderPage.getVerifyAddNotesTitleText(title).should('be.visible')
    calenderPage.getVerifyDescriptionText(description1).should('be.visible')
    calenderPage.getVerifyTimeText(time).should('be.visible')
    calenderPage.getCloseIcon().click()
    calenderPage.getSaveRemainderButton().click()
    calenderPage.getRemainderSavedSuccesfullyMsg().should('be.visible',{timeout:1000})
    calenderPage.getRemaindersCheckBox().click()
    calenderPage.getWeeklyDropdown().select('Monthly')
    calenderPage.getVerifyTextInMonthlyCalender(remain).should('be.visible').wait(500)
    calenderPage.getWeeklyDropdown().select('Weekly')
    calenderPage.getRemainderDetailsInCalender(remain).click()
    calenderPage.getDeleteButton().click()
    calenderPage.getDeleteForEverButton().click({force:true}).wait(1000)
    calenderPage.getCreateNewButton().click()  
    calenderPage.getCreateANewCalenderText().should('be.visible',{timeout:10000})
    teacherCalenderPage.getAppointmentsTabInCreateANewCalenderEntry().click()
    calenderPage.getCreateAppointmentSection().should('be.visible')
    var rand = Math.ceil(Math.random()*1000)
    var appointment="Appointment"+rand
    calenderPage.getEnterAppointmentTitleTextField().type(appointment)
    calenderPage.getAttendeesButton().click()
    calenderPage.getGradeDropdownInEventPage().click()
    calenderPage.getGradeDropdownListInEventPage('Grade 8').click()
    calenderPage.getSectionDropdownInAppointmentPage().click()
    calenderPage.getSectionDropdownListInEventPage('B').click().wait(1000)
    calenderPage.getStudentCheckboxInAppointmentPage('StudentA ').click()
    calenderPage.getcloseButtonInAttendeesSection().click()
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
    var description="Description"+rand
    calenderPage.getAddDescriptionTextarea().type(description)
    calenderPage.getAppointmentTypeDropdown().click()
    calenderPage.getAppointmentTypeDropdownListInAppointmentPage("Online").click()
    calenderPage.getMeetingLinkTextField().type("dklfe03201-982#^^%!28wuw7essyd6363ws6wy12")
    calenderPage.getSaveAppointmentButton().click()
    calenderPage.getAppointmentCreatedMsg().should('be.visible',{timeout:10000})
    calenderPage.getCloseIcon().click()
    calenderPage.getAppointmentCheckbox().click()
    calenderPage.getWeeklyDropdown().select('Monthly')
    calenderPage.getVerifyTextInMonthlyCalender(appointment).should('be.visible').wait(500)
    calenderPage.getWeeklyDropdown().select('Weekly')
    calenderPage.getEventDetailsIncalender(appointment).click({force:true})
    calenderPage.getDeleteButton().click()
    calenderPage.getDeleteAppointmentButton().click({force:true}).wait(1000)
    calenderPage.getYourCalenderText().should('be.visible',{timeout:10000})

    calenderPage.getCreateNewButton().click()  
    calenderPage.getCreateANewCalenderText().should('be.visible',{timeout:10000})
    teacherCalenderPage.getLiveClassesTabInCreateANewCalenderEntry().click({force:true})
    teacherCalenderPage.getCreateALiveClassPopup().should('be.visible',{timeout:1000})
    teacherCalenderPage.getClassDropdownInCreateLiveClass().click({force:true})
    teacherCalenderPage.getClassDropdownlistInCreateLiveClass("Grade 1 - A").click({force:true})
    teacherCalenderPage.getSubjectDropdownInCreateLiveClass().click({force:true})
    teacherCalenderPage.getSubjectDropdownListInCreateLiveClass("Basic maths").click({force:true})
    teacherCalenderPage.getClassTypeDropdownInCreateLiveClass().click({force:true})
    teacherCalenderPage.getClassTypeDropdownListInCreateLiveClass("Online").click({force:true})
    
    var liveClassTitle="LiveClass"+rand
    teacherCalenderPage.getEnterLiveClassTitleTextField().type(liveClassTitle)
    teacherCalenderPage.getAttendeesInCreateLiveClass().click({force:true})
    teacherCalenderPage.getAddPeopleCheckbox("bhai").click({force:true})
    teacherCalenderPage.getAttendeesCloseButton().click()
    /////////////////////////////////
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
    var description="Description"+rand
    calenderPage.getAddDescriptionTextarea().type(description)
    calenderPage.getMeetingLinkTextField().type("dklfe03201-982#^^%!28wuw7essyd6363ws6wy12")
    teacherCalenderPage.getSaveLiveClassButton().click()
    teacherCalenderPage.getLiveClassCreatedSuccessfullymsg().should('be.visible',{timeout:1000})
    calenderPage.getRemaindersCheckBox().click()
    calenderPage.getAppointmentCheckbox().click()
    teacherCalenderPage.getClassesInCalender().click()
    teacherCalenderPage.getVerifyLiveClassTitle(liveClassTitle).should('be.visible')
    teacherCalenderPage.getDeleteButtonInParticularClass().click({force:true})
    teacherCalenderPage.getDeleteButtonInDoUWantDeleteClasspopup().click({force:true})
    teacherCalenderPage.getLiveClassDeletedSuccessfullymsg().should('be.visible',{timeout:1000})

 

})


})
})


//Pavani