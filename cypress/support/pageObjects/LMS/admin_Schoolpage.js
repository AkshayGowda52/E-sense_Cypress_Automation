class adminSchoolPage{

    getSchoolSideBarNavigationImg(){
        return cy.get('img[src="/static/media/company.e1656b4d.svg"]')
    }

    getSchoolAcademicSetUp(){
        return cy.xpath('//p[text()="Academic Setup"]')
    }

    getAcademicSetUpTittle(){
        return cy.get('div.header-font-cls')
    }

    getAdminSchoolQuickLinkTittle(){
        return cy.xpath('//p[text()="Quick Links"]')
    }

    getSchoolInfrastructures(){
        return cy.xpath('//p[text()="School Infrastructure"]')
    }

    getCurriculumBuilder(){
        return cy.xpath('//p[text()="Curriculum Builder"]')
    }

    getAdminAccounts(){
        return cy.xpath('//p[text()="Admin Accounts"]')
    }

    getAdminTimetableManagement(){
        return cy.xpath('//p[text()="Timetable Management"]')
    }
}
module.exports = new adminSchoolPage()