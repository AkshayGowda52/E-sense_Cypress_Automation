class adminDashboardPage {

    getMyProfileIconInSideNavigationBar() {
        return cy.get('div.side-nav-dashboard>.profile-pic>img')
    }

    getLogoutBtnInMyProfileList()  {
        return cy.get('div.popover-student>.classTitle').contains("Logout")
    }
    
    getCalenderTab() {
        return cy.xpath("//div[text()='Calendar']")
    }
    getSideNavBar()
    {
        return cy.xpath('//div[@class="side-nav-bar "]')
    }

    getGradeWiseAttendanceBarLst(className) {
        return cy.xpath('//h4[text()="'+className+'"]/parent::*')
    }

    getSchoolTabInSideNavigationBar(){
        return cy.get('div.side-nav-icon>img[src*="report.d"]')
    }

    getStudentGradebookTabInReportsTab(){
        return cy.get('div.classTitle').contains("Student Gradebook")
    }

    getLogoPicInStudentGradebookTemplatePage(){
        return cy.xpath("//p[contains(text(),'raina s')]/../..//td/div[contains(@class,'logoDisplay')]/div[contains(@class,'avatar')]")
    }

    getDashboardTabInSideNavigationBar(){
        return cy.get('div.side-nav-icon>img[src*="bar"]')
    }

    getProfileImageInDashboard(){
        return cy.get('div.dash_profile>img')
    }

    getGradebookTabInStudentGradebookPage(){ 
        return cy.get('button#simple-tab-1')
    }

    getTotalScoreLstTxtForGradebookInStudentGradebookPage(studentName){
        return cy.xpath('//table//tr//td[contains(text(),"'+studentName+'")]/following-sibling::td/p/span')
    }

    getArrowIconLstForGradebookInStudentGradebookPage(studentName){
        return cy.xpath('//table//tr//td[contains(text(),"'+studentName+'")]/following-sibling::td/*[@data-testid]')
    }

    getEditButttonInStudentGradebookPage(){
        return cy.get('button.StudentGradeBook_stdGrdActionGoBkSavEdt__2Geb6').contains("Edit")
    }

    getScholosticActivitiesTheoryFirstBoxinStudentGradebookPage(){
        return cy.get('div.schTableInputFoc>input').eq(0)
    }

    getScholosticActivitiesTheoryThirdBoxinStudentGradebookPage(){
        return cy.get('div.schTableInputFoc>input').eq(2)
    }

    getScholosticActivitiesPageSaveBtn(){
        return cy.get('div>button[class*=StudentGradeBook_stdGrdActionGoBkSavEdt_]')
    }

    getClassWisePerformanceGradeDrpDwn(){
        return cy.get('div.ClsPerfmnsTopbarFilter>div>div>div[tabindex="0"]').eq(0)
    }

    getDropdownLstInDashboard(){
        return cy.get('li[role="option"]')
    }

    getTopPerformersGradeDrpdwn(){
        return cy.get('div[data-testid="gradeSelect"]')
    }

    getTopPerformerOverallPercentageTxt(studentName){
        return cy.xpath('//div[contains(@class,"TopPerformers_topPefListItemsInfo")]/h4[text()="'+studentName+'"]/../../../div[contains(@class,"top_per_mark")]/h6')
    }

    getOverallResultTabInSiteAnalytics(){
        return cy.get('button[role="tab"]').contains("Overall Result")
    }

    getGradeDropDwnInOverallResultTab(){
        return cy.get('div[data-testid="selectlabels"]>div')
    }

    getOverallResultBarInSiteAnalytics(){
        return cy.get('div[class*="OverallResult_dashOvrRsltvDataXaxisItemBar_"]')
    }

    getSupportTicketTabInSideNavBar(){
        return cy.get('div.menu-txt').contains("Support Tickets")
    }

    getLeaveRequestInSupportTickets(){
        return cy.get('a[role="tab"]').eq(1)
    }

    getApproveBtnInLeaveRequestPage(){
        return cy.get('div.supportAndFeedTableStatus>span>button').contains("Approve")
    }

    getApproveRequestBtnInLeaveRequestPage(){
        return cy.get('button[class*="ViewLeaveRequest_approveRequest"]')
    }

    getApprovedStatusLstInLeaveRequestsPage(teacherName){
        return cy.xpath('//tbody/tr/td/div/span[contains(text(),"'+teacherName+'")]/ancestor::tr/td/div/button')
    }

    getRightArrowIconInDashboardPage(){
        return cy.get('img[class*="Dashboard_hideArrow"]')
    }

    getTeacherPresentCount(){
        return cy.get('div[class*="Dashboard_tchDshTimelineCnt"]>div>h4>span').eq(6)
    }

    getStudentRegistrationBtn(){
        return cy.get('button[role="tab"]').contains("Student Registrations")
    }

    getStudentRegistrationCountPoint(){
        return cy.get('g>path').eq(0)
    }

    //Logout-admin
    logout() {
        this.getMyProfileIconInSideNavigationBar().click({ force: true }).wait(1000)
        this.getLogoutBtnInMyProfileList().click({ force: true }).wait(4000)
        cy.get('body').each(($el) => {
            if ($el.find('a.link_404').length > 0) {
                cy.get('a.link_404').click().wait(2000)
            }
        })
    }

}


module.exports = new adminDashboardPage()