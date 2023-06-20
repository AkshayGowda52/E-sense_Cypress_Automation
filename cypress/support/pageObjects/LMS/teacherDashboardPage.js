class teacherDashboardPage {

    getMarkClassAttendanceBtn() {
        return cy.get('button.pendActBtn')
    }

    getMarkAttendanceBtnInMarkAttendancePage() {
        return cy.get('.markAttCntAction>button').eq(0)
    }

    getMarkAttendanceSubmitBtn() {
        return cy.get('button.attendSubBtn')
    }

    getYesSubmitMarkAttendanceSubmitBtn() {
        return cy.get('div.mainRcdAction>button.prime_btn')
    }

    getMyProfileIconInSideNavigationBar() {
        return cy.xpath('//div[contains(text(),"My Profile")]/parent::*')
    }

    getLogoutBtnInMyProfileList() {
        return cy.get('div.popover-student>.classTitle').contains("Logout")
    }

    getCalendarTabInSideNavigationBar() {
        return cy.get('div.side-nav-icon>img[src*="myCalendar"]')
    }

    getRequestLeaveBtnInCalendarPage() {
        return cy.get('button[data-testid="requestBtn"]')
    }

    getReasonForLeaveLst() {
        return cy.get('div.leaveRqtLeveTypeOpt')
    }

    getStartDateInRequestAbsencePopup() {
        return cy.get('div.schAdminInputCtrDate>div>input').eq(0)
    }

    getEndDateInRequestAbsencePopup() {
        return cy.get('div.schAdminInputCtrDate>div>input').eq(1)
    }

    getTodaysDateInCalendarPickerInRequestAbsencePopup() {
        return cy.get('div>button.MuiPickersDay-today')
    }

    getCloseDateInRequestAbsencePopup() {
        return cy.get('.mt-4 > :nth-child(2)')
    }

    getFullDayCheckBoxInRequestAbsencePopup() {
        return cy.get('div.leaveRqtLeveTypeOpt>span[data-testid="fullDayRadio"]')
    }

    getSendRequestBtnInRequestAbsencePopup() {
        return cy.get('button.leaveRqtAction')
    }

    getNewTeacherPopupCancelIcon() {
        return cy.get('svg[data-testid="CancelIcon"]:visible')
    }

    getNewTeacherFirstPageContinueBtn() {
        return cy.get('.MuiButton-contained')
    }
    getDashboardTitle() {
        return cy.get('.Dashboard_tchDshTitle__3rghy')
    }

    getNoticeboardSideBar(){
        return cy.get('a[href="/teacher/noticeBoard"]')
    }

   

    //Logout-teacher
    teacherLogout() {
        this.getMyProfileIconInSideNavigationBar().click({ force: true }).wait(1000)
        this.getLogoutBtnInMyProfileList().click({ force: true }).wait(4000)
        cy.get('body').each(($el) => {
            if ($el.find('a.link_404').length > 0) {
                cy.get('a.link_404').click().wait(2000)
            }
        })
    }

}

module.exports = new teacherDashboardPage()