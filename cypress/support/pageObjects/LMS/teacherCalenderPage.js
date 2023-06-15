class TeacherCalenderPage{
    getYourCalenderPage(){
        return cy.xpath("//div[text()='Your Calendar']")
    }
    getRequestLeaveButton(){
        return cy.xpath("//button[text()='Request Leave']")
    }
    getCreateNewButton(){
        return cy.xpath("//button[text()='Create New']")
    }
    getCalender(){
        return cy.xpath('//div[@class="mbsc-calendar-wrapper mbsc-windows"]')
    }
    getWeeklyCalender(){
        return cy.get('div[class*="calendarViewSect"]')
    }
    getWeeklyDropdown(){
        return cy.get('select')
       }
    getMonthlyCalender(){
        return cy.get('div[class*="calendarViewSect calendarMonthly"]')
    }
    getDailyCalender(){
        return cy.get('div[class*="calendarViewSheet tt-day calendarViewSect calendarDaily cal_layer"]')
    }
    getClassInCalender(){
        return cy.xpath("(//div[@class='md-custom-event-details'])[1]")
    }
    getAddLessonPlanButton(){
        return cy.xpath("//button[text()='Add Lesson Plan']")
    
    }
    getStartSessionButton(){
        return cy.xpath("//button[text()='Start Session']")
    }
    getResourceText(){
        return cy.xpath("//p[text()='Resources']")
    }
    getAddResourceButtonInClass(){
        return cy.xpath('//div[@class="vc_resources_dwn_btn"]')
    }
    getNotesAttachedText(){
        return cy.xpath("//p[text()='Notes Attached']")
    }
    getNotesAttachedViewButton(){
        return cy.get('span[class="noteAttViewBtn"]').contains('View')
    }
    getHomeworkText(){
        return cy.xpath("//p[text()='Homework']")
    }
    getAddHomeWorkButton(){
        return cy.get("span[class='noteAttViewBtn']").contains('+ Add')
    }
    getStudentsText(){
        return cy.xpath("//p[text()='Students']")
    }
    getRescheduleClassButton(){
        return cy.xpath("//button[text()='Reschedule Class']")
    }
    getAddHomeworkPopup(){
    return cy.xpath("//h1[text()='Add Homework']")
    }
    getHomeworkTitleTextField(){
        return cy.xpath("//span[text()='Title*']/parent::legend/parent::fieldset/preceding-sibling::input")
    }
    getHomeworkDescriptionTextareaField(){
        return cy.xpath("//span[text()='Description']/parent::legend/parent::fieldset/preceding-sibling::textarea[2]")
    }
    getDueTimeButton(){
        return cy.xpath("//input[@placeholder='h:mm (a|p)m']")
    }
    getApproxTimeRequiredDropdown(){
        return cy.xpath("//label[text()='Approx Time Required*']/parent::div")
    }
    getManageStudentsButton(){
        return cy.xpath("//h6[text()='Manage Students']")
    }
    getaddfileResources(){
        return cy.xpath('(//div[@class="card-subject blue mb-2 mt-1"])[1]')
    }

    getFilesInAddHomeworkPopup(){
        return cy.xpath("//h4[contains(text(),'Files')]")
    }
    getAddAttachFiles(){
        return cy.xpath("//h6[text()='+ Attach Files']")
    }
    getSaveButton(){
        return cy.xpath("//button[text()='Save']")
    }
    getAddHomeworkBody(){
        return cy.xpath("//div[@class='add_homework-content']")
    }
    getApproxTimeRequiredDropdownList(time){
        return cy.xpath("//li[contains(text(),'"+time+" mins')]")
    }
    getAddResourceButton(){
        return cy.xpath("//button[text()='Add Resources']")
    }
    getHomeworkView(){
        return cy.xpath("//p[text()='Homework']/following-sibling::span[text()='View']")
    }
    getHomeworkCreatedMsg(){
        return cy.xpath("//div[text()='Homework Created!']")
    }
    getYourNotesText(){
        return cy.xpath("//h1[text()='Your Notes']")
    }
    getAddNoteButton(){
        return cy.xpath("//button[text()='Add Note']")
    }
    getAddNotesTitleTextField(){
        return cy.xpath('//input[@placeholder="Add title"]')
        
    }
    getAddNotesDescription(){
        return cy.xpath('//div[@data-placeholder="Description"]')
    }
    getBackToNoteList(){
        return cy.get('button[class*="newNoteBackBtn"]')
    }
    getAddHomeworkButtonInHomeWorkPopup(){
        return cy.xpath("//button[text()='Add Homework']")
    }
    getHomeworkpopup(){
        return cy.xpath("//h1[text()='Homework']")
    }
    getClassTitleText(title){
        return cy.xpath("//p[contains(text(),'"+title+"')]")
    }
    getNcertTextBookInAddResource(){
        return cy.get('button').contains('NCERT TextBook')
    }
    getCancelButton(){
        return cy.xpath("//button[text()='Cancel']")
    }

    getcloseIcon(){
        return cy.xpath("//*[name()='svg' and @data-testid='close-icon']")
    }
    getClassCloseIcon(){
        return cy.xpath('//*[name()="svg" and @data-testid="CloseIcon"]')
    }
    getYourNotesCloseIcon(){
        return cy.xpath("(//*[name()='svg' and @data-testid='CloseIcon'])[2]")
    }
    getDeleteHomeWorkButton(){
        return cy.xpath('//button[@title="Delete Homework"]')
    }
    getDeleteButton(){
        return cy.xpath('//button[@data-testid="delete"]')
    }
    getHolidaysCheckbox(){
        return cy.xpath('//input[@name="Holidays"]')
    }
    getClassesCheckbox(){
        return cy.xpath('//input[@name="Classes"]')
    }
    getHolidayListInCalender(holidayTitle){
        return cy.xpath("//strong[contains(text(),'"+holidayTitle+"')]")
    }
    getExamCheckbox(){
        return cy.xpath('//input[@name="Exam"]')
    }
    getExamListInCalender(examTitle){
        return cy.xpath("//span[text()='"+examTitle+"']")
    }
    getAppointmentsTabInCreateANewCalenderEntry(){
        return cy.xpath("//div[text()='Appointments']")
    }
    getCreateAppointmentPopup(){
        return cy.xpath("//h1[text()='Create Appointment']")
    }
    getLiveClassesTabInCreateANewCalenderEntry(){
        return cy.xpath("//div[text()='Live Classes']")
    }
    getCreateALiveClassPopup(){
        return cy.xpath("//h1[text()='Create Live Class']")
    }
    getClassDropdownInCreateLiveClass(){
        return cy.xpath("//label[text()='Class']/following-sibling::div/div/div[@id='demo-simple-select']")
    }
    getClassDropdownlistInCreateLiveClass(className){
        return cy.xpath("//li[text()='"+className+"']")
    }
    getSubjectDropdownInCreateLiveClass(){
        return cy.xpath('//label[text()="Subject"]/following-sibling::div/div/div[@id="demo-simple-select"]')
    }
    getSubjectDropdownListInCreateLiveClass(subject){
        return cy.xpath("//li[text()='"+subject+"']")
    }
    getClassTypeDropdownInCreateLiveClass(){
        return cy.xpath('//label[text()="Class Type*"]/following-sibling::div/div/div[@id="demo-simple-select"]')
    }
    getClassTypeDropdownListInCreateLiveClass(classType){
        return cy.xpath("//li[text()='"+classType+"']")
    }
    getEnterLiveClassTitleTextField(){
        return cy.xpath('//input[@placeholder="Enter Class Title"]')
    }
    getAttendeesInCreateLiveClass(){
        return cy.xpath("//button[text()='+Add People']")
    }
    getAddPeopleCheckbox(people){
        return cy.xpath('//p[text()="'+people+'"]/parent::div[@class="crtLivePrfItemCnt"]/following-sibling::span/input[@type="checkbox"]')
    }
    getAttendeesCloseButton(){
        return cy.xpath("//button[text()='close']")
    }
    getSaveLiveClassButton(){
        return cy.xpath("//button[text()='Save Live Class']")
    }
    getLiveClassCreatedSuccessfullymsg(){
        return cy.xpath("//p[text()='Live Class Created successfully']")
    }
    getClassesCheckboxInYourCalender(){
        return cy.xpath('//input[@name="Classes"]')
    }
    getClassesInCalender(){
        return cy.xpath('//div[@class="liveClassTsrCrd"]')
    }
    getVerifyLiveClassTitle(title){
      return cy.xpath("//h1[text()='"+title+"']")
    }
    getDeleteButtonInParticularClass(){
        return cy.xpath("//button[text()='Delete']")
    }
    getDeleteButtonInDoUWantDeleteClasspopup(){
        return cy.xpath("(//button[text()='Delete'])[2]")
    }
    getLiveClassDeletedSuccessfullymsg(){
        return cy.xpath("//div[text()='Live Class Deleted successfully']")
    }
    

}
module.exports=new TeacherCalenderPage()


//Pavani