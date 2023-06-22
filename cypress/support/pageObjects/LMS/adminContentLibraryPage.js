class adminContentLibrary{

    getPublicationsDropdown(){
        return cy.get('div.MuiInputBase-formControl').eq(0)
    }

    getContentDropdown(){
        return cy.get('div.MuiInputBase-formControl').eq(1)
    }

    getContentDropdownOpt(opt){
        return cy.get('li[role="option"]').contains(opt)
    }

    getGradesDropdown(){
        return cy.get('div.MuiInputBase-formControl').eq(2)
    }

    getSubjectsDropdown(){
        return cy.get('div.MuiInputBase-formControl').eq(3)
    }

    getChapterDropdown(){
        return cy.get('div.MuiInputBase-formControl').eq(4)
    }

    getChapterDropdownOpt(opt){
        return cy.get('li[role="option"]').contains(opt)
    }

    getTopicDropdown(){
        return cy.get('div.MuiInputBase-formControl').eq(5)
    }

    getTopicDropdownOpt(opt){
        return cy.get('li[role="option"]').contains(opt)
    }

    getPublicationsDropdownRaiseSeriesOpt(){
        return cy.get('li[role="option"]').contains('Rise Series')
    }

    getPublicationsDropdownOpt(opt){
        return cy.get('li[role="option"]').contains(opt)
    }

    getSearchBtn(){
        return cy.get('button.search-icon ')
    }

    getPresentationsTab(){
        return cy.get('button[role="tab"]').contains('Presentations')
    }

    getCardViewBtn(){
        return cy.get('button.cntLibCardBtn')
    }

    getGradesDropdownGrade1Opt(){
        return cy.get('li[role="option"]').contains('Grade 1')
    }

    getGradesDropdownpt(opt){
        return cy.get('li[role="option"]').contains(opt)
    }

    getCardGrade(){
        return cy.get('span.MuiChip-labelSmall')
    }

    getSubjectsDropdownOpt(opt){
        return cy.get('li[role="option"]').contains(opt)
    }

    getCardSubjects(){
        return cy.get('div.card-subject')
    }

    getViewAllBtn(){
        return cy.get('button.MuiButton-textSizeMedium').contains('View All')
    }
}module.exports = new adminContentLibrary();