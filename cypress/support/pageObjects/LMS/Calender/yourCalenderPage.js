class YourCalender
{
    getYourCalenderText()
    {
        return cy.xpath("//div[text()='Your Calendar']")
    }
    getCreateNewButton()
    {
        return cy.xpath("//button[text()='Create New']")
    }
    getCreateANewCalenderText()
    {
        return cy.xpath("//p[text()='Create a new calendar entry']")
    }
    getRemainderTab()
    {
        return cy.xpath("//div[text()='Reminder']")
    }
    

}
module.exports=new YourCalender()