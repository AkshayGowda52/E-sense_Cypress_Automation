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
        return cy.get('.noticeSchoolSort > .MuiOutlinedInput-root > .MuiSelect-select')
    }

    getSortByDropdownGenaralOpt(){
        return cy.get('li[data-value="GENERAL"]')
    }

    getSortByDropdownAllOpt(){
        return cy.get('li[data-value="All"]')
    }

    getTeacherNoticesList(){
        return cy.get('div[class="StudentSchool_schNotBordListSect__2vnwT MuiBox-root css-0"]')
    }

    getNoticeTitle(){
        return cy.get('p.StudentSchool_schNotBordListTitle__2JyUo')
    }

    getNoticeDate(){
        return cy.get('div.StudentSchool_schNotBordInfo__242JJ')
    }

    getNoticeAttachment(){
        return cy.get('img[aria-label="View Attachment"]')
    }

    getNoticeAttached(){
        return cy.get('div.attachmentListWrapperBlkText')
    }

    
    getNoticeAttachedPreviewCloseBtn(){
        return cy.get('svg[data-testid="CloseIcon"]')
    }

}module.exports = new teacherNoticeboardPage();