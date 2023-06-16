class teacherNoticeboardPage{

    getSearchTextfield(){
        return cy.get('input[type="search"]')
    }

    getCalenderIcon(){
        return cy.get('img[class="calendar-icon"]')
    }

    getAcademicYearDropdown(){
        return cy.get('div[aria-labelledby="academic-year-select"]')
    }

    getSortByDropdown(){
        return cy.get('div[class="noticeSchoolSort"]')
    }

}module.exports = new teacherNoticeboardPage();