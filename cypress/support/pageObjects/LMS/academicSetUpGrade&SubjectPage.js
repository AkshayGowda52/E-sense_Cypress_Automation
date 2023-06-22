class GradeAndSubjectPage{

    getGrades(){
        return cy.get('td.grade-name')
    }

    getSectionAddBtn(Grade){
        return cy.xpath("//tbody[@class='MuiTableBody-root css-1xnox0e']//tr//td//div[text()='"+Grade+"']/ancestor::tr//descendant::button")
    }

    getSectionBttn(){
        return cy.get('button.sectionsBtn')
    }

    getSectionBtn(){
        return cy.xpath("//div[text()='Grade 5']//ancestor::tr//button[contains(@class,'sectionsBtn')]")
    }

    getSectionBtn1(){
        return cy.xpath("//div[text()='Grade 6']//ancestor::tr//button[contains(@class,'sectionsBtn')]")
    }

    getAddNewSectionPopUPTitle(){
        return cy.get('span.title')
    }

    getAddNewSectionPopUPSectionNameTextField(){
        return cy.get('div.MuiInputBase-formControl input')
    }

    getOptionalSubjectsDropDownBtn(){
        return cy.get('div[id="opt-subjects"]')
    }

    getAddNewSectionPopUPOptionalSubjectsLists(){
        return cy.get('ul.MuiMenu-list li')
    }

    getAddNewSectionPopUPAddSectionBtn(){
        return cy.get('button.sectionSaveBtn')
    }

    getSectionDeleteBtn(){
        return cy.get('button.delete-section')
    }

    getSectionDeletePopUpDeleteBtn(){
        return cy.get('button.deptDeletebtn')
    }
}
module.exports = new GradeAndSubjectPage()