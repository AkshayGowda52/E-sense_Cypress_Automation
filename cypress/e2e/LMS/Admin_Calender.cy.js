

const AdminIndexPage = require('../../support/pageObjects/LMS/adminIndexPage')
const adminDashBoardPage = require('../../support/pageObjects/LMS/adminDashboardPage')
const calenderPage=require('../../support/pageObjects/LMS/adminCalenderPage.js')

describe('Calender', function(){
    beforeEach('Login to application', function ()  {
        cy.visit(Cypress.env("url"))
        cy.url().should('contain', `${Cypress.env("url")}`)
        cy.viewport(1920, 1080)
        cy.fixture("LMS/Credentials").then(function (credentials) {
            cy.adminLogin(credentials.username, credentials.password)

        })
      
    })
    it('E2E_01_Remainder_To Validate that the user is able to create reminder in calender and display the popup about the reminder anywhere in screen for selected date and time.', () => {
        adminDashBoardPage.getSideNavBar().invoke('show')
        adminDashBoardPage.getCalenderTab().click()
        calenderPage.getYourCalenderText().should('be.visible', { timeout: 10000 })
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
    calenderPage.getYourCalenderText().should('be.visible',{timeout:10000})
    
    })
it("E2E_02_Holiday_To Validate that the user is able to create Holiday in calender and display in weekly calender board on selected date.",function(){
    adminDashBoardPage.getSideNavBar().invoke('show')
    adminDashBoardPage.getCalenderTab().click()
    calenderPage.getYourCalenderText().should('be.visible', { delay: 10000 })
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
    calenderPage.getWeeklyDropdown().select('Monthly')
    calenderPage.getVerifyTextInMonthlyCalender(holiday).should('be.visible').wait(500)
    calenderPage.getWeeklyDropdown().select('Weekly')
    calenderPage.getHolidayDetailsIncalender(holiday).click()
    calenderPage.getDeleteButton().click()
    calenderPage.getDeleteHolidayButton().click({force:true}).wait(1000)
    calenderPage.getYourCalenderText().should('be.visible',{timeout:10000})
    
    
})

it('E2E_03_Event_To Validate that the user is able to create Event in calender and notification will be sent to participents as per the selection.',function(){

    adminDashBoardPage.getSideNavBar().invoke('show')
    adminDashBoardPage.getCalenderTab().click()
    calenderPage.getYourCalenderText().should('be.visible', { delay: 10000 })
    calenderPage.getCreateNewButton().click()
    calenderPage.getCreateANewCalenderText().should('be.visible',{timeout:10000})
    calenderPage.getEventButton().click()
    calenderPage.getCreateEventText().should('be.visible',{timeout:10000})
    var rand = Math.ceil(Math.random()*1000)
    var event = 'Event' + rand;
    calenderPage.getEnterEventTitleTextField().type(event)
    calenderPage.getSingleDayRadioButton().then(($el)=>{
        if(!$el.is(':checked'))
        {
            calenderPage.getSingleDayRadioButton().click()
            
        }
        
            calenderPage.getDateOfEventButton().click()
            var d = new Date();
            var date = d.getDate()+1
            calenderPage.getPickDateInCalender(date).click().wait(1000)
            calenderPage.getStartTimeButton().click()
            for (let i = 0; i < 2; i++) {
                
                calenderPage.getBody().type('{downArrow}').wait(500)
                
    
            }
            calenderPage.getAMButton().click()
            calenderPage.getEventModelBody().click({ force: true })
            calenderPage.getStartTimeButton().should('have.value', '10:00 am')
            calenderPage.getEndTimeButton().click().wait(500)
            calenderPage.getPMButton().click().wait(500)
            calenderPage.getEventModelBody().click({ force: true })
            cy.wait(500)
            calenderPage.getEndTimeButton().click()
            cy.wait(500)
            for (let j = 0; j < 2; j++) {
                calenderPage.getBody().type('{downArrow}').wait(500)
    
            }
            calenderPage.getEventModelBody().click({ force: true })
            calenderPage.getEndTimeButton().should('have.value', '10:00 pm').wait(500)
            var description="Description"+rand;
            calenderPage.getAddDescriptionTextarea().type(description)
            calenderPage.getEventTypeDropdown().click().wait(500)
            calenderPage.getEventDropdownList('School Event').click().wait(500)
            calenderPage.getExtraCurricularActivityCheckbox().click()
            calenderPage.getPrepHoursRequiredDropdown().should('be.visible').click()
            calenderPage.getPrepHoursRequiredDropdownList("12").click()
            calenderPage.getAddParticipants().click()
            calenderPage.getGradeDropdownInEventPage().click()
            calenderPage.getGradeDropdownListInEventPage('Grade 8').click().wait(500)
            calenderPage.getSectionDropdownInEventPage().click()
            calenderPage.getSectionDropdownListInEventPage("B").click().wait(1000)
            calenderPage.getStudentCheckboxInEventPage('StudentA').click({timeout:10000})
            calenderPage.getStudentPopupCloseIconInEventPage().click()
            calenderPage.getSaveEventButton().click()
            calenderPage.getEventCreatedMsg().should('be.visible',{timeout:10000})
            calenderPage.getEventCheckbox().click()
            calenderPage.getWeeklyDropdown().select('Monthly')
            calenderPage.getVerifyTextInMonthlyCalender(event).should('be.visible').wait(500)
            calenderPage.getWeeklyDropdown().select('Weekly')
            calenderPage.getEventDetailsIncalender(event).click()
            calenderPage.getDeleteButton().click()
            calenderPage.getDeleteEventButton().click({force:true}).wait(1000)
            calenderPage.getYourCalenderText().should('be.visible',{timeout:10000})

    })

})
it('E2E_04_Appointment_To Validate that the user is able to create Appointment in calender and notification will be sent to participents as per the selection.',function(){
    adminDashBoardPage.getSideNavBar().invoke('show')
    adminDashBoardPage.getCalenderTab().click()
    calenderPage.getYourCalenderText().should('be.visible', { delay: 10000 })
    calenderPage.getCreateNewButton().click()  
    calenderPage.getCreateANewCalenderText().should('be.visible',{timeout:10000})
    calenderPage.getAppointmentButton().click()
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
    
     
})

it('E2E_05_Exam_To Validate that the user is able to create exam in calender and notification will be sent to participents as per the selection.',function(){
    adminDashBoardPage.getSideNavBar().invoke('show')
    adminDashBoardPage.getCalenderTab().click()
    calenderPage.getYourCalenderText().should('be.visible', { delay: 10000 })
    calenderPage.getCreateNewButton().click()  
    calenderPage.getCreateANewCalenderText().should('be.visible',{timeout:10000})
    calenderPage.getExamTab().click()
    calenderPage.getCreateExamText().should('be.visible',{timeout:10000})
    calenderPage.getGradeDropdownInEventPage().click({force:true}).wait(500)
    calenderPage.getGradeDropdownListInEventPage('Grade 8').scrollIntoView().click({force:true},{timeout:10000})
    calenderPage.getSubjectDropdownInExamSection().click({force:true}).wait(500)
    calenderPage.getSubjectDropdownList('Civics (Msb_EM)').click({force:true})
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
    calenderPage.getExamCheckbox().click({force:true})
    calenderPage.getWeeklyDropdown().select('Monthly')
    calenderPage.getVerifyTextInMonthlyCalender(exam).should('be.visible').wait(500)
    calenderPage.getWeeklyDropdown().select('Weekly')
    calenderPage.getExamDetailsIncalender(exam).click({force:true})
    calenderPage.getDeleteButton().click()
    calenderPage.getDeleteExamButton().click({force:true}).wait(10000)
    calenderPage.getYourCalenderText().should('be.visible',{timeout:10000})

})
it('E2E_07_Filter_To Validate that when admin apply filtter. Filttered selections are displayed in weekly calendar board.',function(){
    adminDashBoardPage.getSideNavBar().invoke('show')
    adminDashBoardPage.getCalenderTab().click()
    calenderPage.getYourCalenderText().should('be.visible', { delay: 10000 })
    calenderPage.getSelectAllCheckbox().click().should('be.checked',{delay:10000})
    calenderPage.getEventCheckbox().should('be.checked')
    calenderPage.getHolidaysCheckbox().should('be.checked')
    calenderPage.getClassesCheckbox().should('be.checked')
    calenderPage.getExamCheckbox().should('be.checked')
    calenderPage.getRemaindersCheckBox().should('be.checked')
    calenderPage.getAppointmentCheckbox().should('be.checked')
    calenderPage.getSelectAllCheckbox().click().should('not.be.checked')
    calenderPage.getEventCheckbox().click().should('be.checked',{timeout:10000})
    calenderPage.getEventDetails().should('not.be.exist').wait(1000)
    calenderPage.getCreateNewButton().click()
    calenderPage.getCreateANewCalenderText().should('be.visible',{timeout:10000})
    calenderPage.getEventButton().click()
    calenderPage.getCreateEventText().should('be.visible',{timeout:10000})
    var rand = Math.ceil(Math.random()*1000)
    var event = 'Event' + rand;
    calenderPage.getEnterEventTitleTextField().type(event)
    calenderPage.getSingleDayRadioButton().then(($el)=>{
        if(!$el.is(':checked'))
        {
            calenderPage.getSingleDayRadioButton().click()
            
        }
        
            calenderPage.getDateOfEventButton().click()
            var d = new Date();
            var date = d.getDate()+1
            calenderPage.getPickDateInCalender(date).click().wait(1000)
            calenderPage.getStartTimeButton().click()
            for (let i = 0; i < 2; i++) {
                
                calenderPage.getBody().type('{downArrow}').wait(500)
                
    
            }
            calenderPage.getAMButton().click()
            calenderPage.getEventModelBody().click({ force: true })
            calenderPage.getStartTimeButton().should('have.value', '10:00 am')
            calenderPage.getEndTimeButton().click().wait(500)
            calenderPage.getPMButton().click().wait(500)
            calenderPage.getEventModelBody().click({ force: true })
            cy.wait(500)
            calenderPage.getEndTimeButton().click()
            cy.wait(500)
            for (let j = 0; j < 2; j++) {
                calenderPage.getBody().type('{downArrow}').wait(500)
    
            }
            calenderPage.getEventModelBody().click({ force: true })
            calenderPage.getEndTimeButton().should('have.value', '10:00 pm').wait(500)
            var description="Description"+rand;
            calenderPage.getAddDescriptionTextarea().type(description)
            calenderPage.getEventTypeDropdown().click().wait(500)
            calenderPage.getEventDropdownList('School Event').click().wait(500)
            calenderPage.getExtraCurricularActivityCheckbox().click()
            calenderPage.getPrepHoursRequiredDropdown().should('be.visible').click()
            calenderPage.getPrepHoursRequiredDropdownList("12").click()
            calenderPage.getAddParticipants().click()
            calenderPage.getGradeDropdownInEventPage().click({force:true})
            calenderPage.getGradeDropdownListInEventPage('Grade 8').click({force:true}).wait(500)
            calenderPage.getSectionDropdownInEventPage().click({force:true})
            calenderPage.getSectionDropdownListInEventPage("B").click({force:true}).wait(1000)
            calenderPage.getStudentCheckboxInEventPage('StudentA').click({timeout:10000})
            calenderPage.getStudentPopupCloseIconInEventPage().click()
            calenderPage.getSaveEventButton().click()
            calenderPage.getEventCreatedMsg().should('be.visible',{timeout:10000})
           
            calenderPage.getWeeklyDropdown().select('Monthly')
            calenderPage.getVerifyTextInMonthlyCalender(event).should('be.visible').wait(500)
            calenderPage.getWeeklyDropdown().select('Weekly')
            calenderPage.getEventDetailsIncalender(event).click()
            calenderPage.getDeleteButton().click()
            calenderPage.getDeleteEventButton().click({force:true}).wait(1000)
            calenderPage.getYourCalenderText().should('be.visible',{timeout:10000})
        })



})
it('E2E_08_Upload CSV_Validate that the Admin can upload file and it will be displayed in the weekly calendar board.',function(){
    adminDashBoardPage.getSideNavBar().invoke('show')
    adminDashBoardPage.getCalenderTab().click()
    calenderPage.getYourCalenderText().should('be.visible', { delay: 10000 })
    calenderPage.getUploadCSVButton().click().wait(1000)
    calenderPage.getUploadSchoolHolidays().click().wait(1000)
    calenderPage.getUploadHolidaysInBulkpopupText().should('be.visible')
    calenderPage.getSelectFileFromComputer().attachFile("LMS/Holiday_Template.xlsx",{force:true}).wait(500)
    calenderPage.getImportHolidaysButton().click().wait(500)
    calenderPage.getHolidaysImportedSuccessfullyMsg().should('be.visible',{timeout:10000})
    calenderPage.getHolidaysCheckbox().then($el=>{
        if(!$el.is(":checked"))
        {
             cy.wrap($el).click().should('be.checked')
        }
    })
    
    calenderPage.getCalenderYearButtonInCalender().click().wait(500)
    calenderPage.getYearButtonInCalender(2025).click().wait(500)
    calenderPage.getCalenderTable().click({force:true}).wait(1000)
    calenderPage.getCalendertableParticularDate().click({force:true}).wait(1000)
    calenderPage.getWeeklyDropdown().select('Monthly')
    calenderPage.getVerifyHolidaysDetailsInMonthlyCalender('24','Holiday1').should('be.visible').wait(500)
    calenderPage.getWeeklyDropdown().select('Weekly')
    calenderPage.getHolidayDetailsIncalender('Holiday1').click()
    calenderPage.getDeleteButton().click()
    calenderPage.getDeleteHolidayButton().click({force:true}).wait(10000)
    calenderPage.getYourCalenderText().should('be.visible',{timeout:10000})
})


})
//Pavani