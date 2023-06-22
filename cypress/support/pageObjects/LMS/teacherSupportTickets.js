class TeacherSupportTickets{
    getBody(){
        return cy.get('body')
    }
    getTeacherDashBoardPage(){
        return cy.xpath("//p[text()='Your Dashboard']")
    }
    getTeacherSideNavbar(){
        return cy.get('div[class="side-nav-bar "]')
    }
    getTeacherMyProfileTab(){
        return cy.get('div').contains('My Profile')
        
    }
    getAccountandSupportTab(){
        return cy.xpath("//div[text()='Account & Support']")
    }
    getAccountandSupportPage(){
         return cy.xpath("//p[text()=' Account & Support']")
    }
    getSupportandFeedbackTab(){
        return cy.xpath("//a[text()='Support & Feedback']")
    }
    getRaiseNewTicketButton(){
       return cy.xpath("//button[text()='+ Raise New Ticket']")
    }
    getRaiseSupportTicketPopup(){
        return cy.xpath("//h1[text()='Raise Support Ticket']")
    }
    getHelpDropdown(){
        return cy.xpath("//div[@id='rc_screen']")
    }
    getHelpDropdownList(reason){
        return cy.xpath('//li[text()="'+reason+'"]')
    }
    getAboutIssue(){
        return cy.xpath("//textarea[@id='rc_content']")
    }
    getAddAttachment(){
        return cy.xpath("//input[@name='messageAttachment']")
    }
    getSendRequestButton(){
       return cy.xpath("//button[text()='Send Request']")
    }
    getRequestSentSuccessfullyMsg(){
        return cy.xpath("//p[text()='Request Sent Successfully']")
    }
    getcloseIcon(){
        return cy.xpath('//*[name()="svg" and @data-testid="CloseIcon"]')
    }
    getTicketNumberInRequestSentSuccessfullyMsg(){
        return cy.xpath("//b")
    }
    getRaiseSupportticketStatus(ticketNum){
        return cy.xpath("//td[text()='"+ticketNum+"']/following-sibling::td/div[@class='supportAndFeedTableStatus']/p")
    }
    getMyProfileTab(){
        return cy.xpath("//div[text()='My Profile']")
    }
    getLogoutTab(){
        return cy.xpath("//div[text()='Logout']")
    }
    getGoToHomelink(){
        return cy.xpath('//a[@class="link_404"]')
    }
    getAdminSupportTicketsTab(){
        return cy.xpath("//div[text()='Support Tickets']")
    }
    getAdminSupportTicketsPage(){
        return cy.xpath("//p[text()='Support Tickets']")
    }
    getAdminSupportTicketsStatusbutton(ticketNum,statusName){
        return cy.xpath('//p[text()="'+ticketNum+'"]/ancestor::tr[contains(@class,"MuiTableRow")]/td[5]/div/span[@class="btn_status"]/button[text()="'+statusName+'"]')
    }
    getRemarksTextareaField(){
        return cy.xpath('//textarea[@data-testid="reson box"]')
    }
    getResolveButton(){
        return cy.xpath('//button[@type="submit"]')
    }
    getAdminMyProfileTab(){
        return cy.xpath("//div[text()='My Profile']")
    }
    getNotificationTab(){
        return cy.xpath("//div[text()='Notification']")
    }
    getYourNotificationSection(){
        return cy.xpath("//p[text()='Your notifications']")
    }
    getNotifications(ticketNumber){
        return cy.xpath("//p[text()='Raised Ticket/Requested Change - "+ticketNumber+" Approved']")
    }
    getVerifyNotification(ticketNumber){
        return cy.xpath("//h4[text()='"+ticketNumber+"']")
    }

    teacherLogout(){
        this.getTeacherSideNavbar().invoke('show').wait(1000)
        this.getTeacherMyProfileTab().scrollIntoView().click({force:true},{timeout:10000})
        this.getLogoutTab().click({timeout:10000}).wait(1000)
        this.getGoToHomelink().then(function($el){
            if($el.text()=='Go to Home')
            {
                cy.wrap($el).dblclick({force:true}).wait(10000)
            }
            else{
                cy.visit(Cypress.env("url"))
            }
        })
       


    }
    
 
}

module.exports=new TeacherSupportTickets()
//Pavani