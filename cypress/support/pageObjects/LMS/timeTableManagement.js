class timeTableManagement{
    
    getTypeText(){
        return cy.xpath("//td[text()='Auto']")
    }

    getTimetableManagmentText(){
        return cy.xpath("//h2[text()='Timetable Management']")
    }

    getStatus(){
        return cy.xpath("//p[text()='Published']")
    }
    
    getGenerateTimeTable(){
        return cy.xpath("//button[text()='Generate Timetable']")
    }

    getCheckBtns(){
        return cy.get('input[name="row-radio-buttons-group"]')
    }

    getDropDowns(){
        return cy.get('div[id="demo-simple-select"]')
    }

    getDayWeeksDropDownLists(){
        return cy.get('ul[aria-labelledby="demo-simple-select-label"] li')
    }

    getBrealTextFields(){
        return cy.get('div.mw-text-field-cls')
    }

    getAddBrerakBtn(){
        return cy.get('.add-poc-btn')
    }
}

module.exports = new timeTableManagement()