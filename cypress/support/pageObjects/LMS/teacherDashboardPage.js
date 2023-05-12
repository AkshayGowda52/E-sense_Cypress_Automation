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

    //Logout-teacher
    teacherLogout() {
        this.getMyProfileIconInSideNavigationBar().click({ force: true }).wait(1000)
        this.getLogoutBtnInMyProfileList().click({ force: true }).wait(2000)
        cy.get('body').then(($el) => {
            if ($el.find('a.link_404').length > 0) {
                cy.get('a.link_404').click().wait(1000)
            }
        })
    }

}

module.exports = new teacherDashboardPage()