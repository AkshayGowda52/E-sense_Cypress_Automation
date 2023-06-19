class TeacherMyClasses
{
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
    getTeacherMyClassesTab(){
        return cy.xpath("//div[contains(text(),'My Classes')]")
    }
    getParticularStudentTab(){
        return cy.xpath('(//div[contains(@class,"popper-sub-student")])[1]')
    }
    getLiveClassesTabInMyClasses(){
        return cy.xpath("//button[text()='Live Classes']")
    }
    getCreateNewLiveClassInMyClasses(){
        return cy.xpath("//button[text()='Create New Live Class']")
    }
    getCreateLiveClassPage(){
        return cy.xpath("//h1[contains(text(),'Create Live Class')]")

    }
    getWorkLoadparticularday(){
        return cy.xpath('(//div[@data-test-id="CircularProgressbarWithChildren"])[2]')
    }
    getCreatehomeWorkthroughWorkLoad(){
        return cy.xpath("//div[text()='Create homework']")
    }
    getCreateHomeWorkPopup(){
        return cy.xpath("//h1[text()='Create Homework']")
    }
    getHomeWorkTitleTextField(){
        return cy.xpath("//label[text()='Homework Title*']/following-sibling::div/input[@type='text']")
    }
    getDescriptionTextareaField(){
        return cy.xpath("//label[contains(text(),'Description')]/following-sibling::div/textarea[1]")
    }
    getDueDateButton(){
        return cy.xpath('//input[@placeholder="dd/mm/yyyy"]')
    }
    getDueTimeButton(){
        return cy.xpath('//input[@placeholder="h:mm (a|p)m"]')
    }
    getApproxTimeRequiredTextField(){
        return cy.xpath("//label[contains(text(),'Approx Time Required*')]/following-sibling::div/div")
    }
    getApproxTimeRequiredList(time){
        return cy.xpath("//li[text()='"+time+" mins']")
    }
    getSaveButtonInCreateHomeworkPopup(){
        return cy.xpath("//button[text()='Save']")
    }
    getHomeworkCreatedMsg(){
        return cy.xpath("//div[text()='Homework Created!']")
    }
    getVerifyHomeworkCreated(homeWork){
        return cy.xpath("//h6[text()='"+homeWork+"']")
    }
    getCreateHomeworkContent(){
        return cy.xpath('//div[@class="add_homework_class-content"]')
    }
    getHomeWorkDeleteIcon(){
        return cy.xpath('(//img[@aria-label="Delete"])[1]')
    }
    getDeleteButtonInDoUWantDeleteHomeWorkPopup(){
        return cy.xpath('//button[@data-testid="delete"]')
    }
    getHomeworkDeletedMsg(){
        return cy.xpath("//div[text()='Homework deleted!']")
    }

}
module.exports=new TeacherMyClasses()