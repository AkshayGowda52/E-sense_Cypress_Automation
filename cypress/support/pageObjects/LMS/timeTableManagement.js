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

    getRoomLists(){
        return cy.get('ul.MuiMenu-list li')
    }

    getBrealTextFields(){
        return cy.get('div.mw-text-field-cls')
    }

    getAddBrerakBtn(){
        return cy.get('.add-poc-btn')
    }

    getGenerateTimeSlotsBtn(){
        return cy.get('button.continue-btn')
    }

    getTimeTableManagementTypes(){
        return cy.xpath('//table[@aria-label="simple table"]//tbody//tr//td[5]')
    }

    getTimeTableManagementStatus(){
        return cy.xpath("//table[@aria-label='simple table']//tbody//tr//td//p[text()='Published']")
    }

    getTimeTableManagementActionEditBtns(){
        return cy.get('div.adminTimTblActCell span svg circle')
    }

    getTimeTableManagementActionDeleteBtns(){
        return cy.get('div.adminTimTblActCell span img')
    }

    getTimeTableManagementClassCardSections(){
        return cy.get('div.classCardSect')
    }

    getSchoolStartingTimeBtns(){
        return cy.get('input.MuiInputBase-inputAdornedEnd')
    }

    getGeneratedTimetableGradeText(){
        return cy.get('div.text-center h1')
    }

    getGeneratedTimetableWeeks(){
        return cy.get('div.mbsc-schedule-resource-group')
    }
}

module.exports = new timeTableManagement()