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
    
}
module.exports=new TeacherMyClasses()