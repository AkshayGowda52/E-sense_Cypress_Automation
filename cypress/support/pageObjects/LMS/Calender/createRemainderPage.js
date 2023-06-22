class CreateRemainder
{
    getCreateRemainderText()
    {
        return cy.xpath("//h1[text()='Create Reminder']")
    }
    getEnterRemainderTitleTextField()
    {
        return cy.xpath('//input[@placeholder="Enter Reminder Title"]')
    }
    getDateTextField()
    {
        return cy.xpath('//input[@placeholder="ddd d mmm, yyyy"]')
    }
    getTodayDateButton()
    {
        return cy.xpath("//button[contains(@class,'MuiPickersDay-today')]")
    }
    getStartTimeButton()
    {
        return cy.xpath('(//input[@placeholder="h:mm (a|p)m"])[1]')
    }
    getEndTimeButton()
    {
        return cy.xpath('(//input[@placeholder="h:mm (a|p)m"])[2]')
    }
    getRepeatDropdown()
    {
        return cy.xpath("//div[text()='Does not repeat']")
    }
    getRepeatlist(repeatListName)
    {
        return cy.xpath('//li[text()="'+repeatListName+'"]')
    }
    getAddDescriptionTextarea()
    {
        return cy.xpath("(//label[text()='Add description']/parent::div/descendant::textarea)[1]")
    }
    getAttachAFileButton()
    {
       return cy.get('input[name="reminderFile"]')
    }
    getAddNotesButton()
    {
        return cy.xpath("//p[text()='Add Notes']")
       
    }
    getSaveRemainderButton()
    {
      return  cy.xpath("//button[text()='Save Reminder']")
    }
    getRemainderModelContent()
    {
      return cy.xpath('//div[@class="reminder-model-content"]')
    }
    getAMButton()
    {
        return cy.xpath("//span[text()='AM']/parent::button")
    }
    getPMButton()
    {
        return cy.xpath("//span[text()='PM']/parent::button")
    }


}
module.exports=new CreateRemainder()