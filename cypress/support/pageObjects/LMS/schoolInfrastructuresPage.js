class SchoolInftastructures{

    getAddInfrastructureBttn(){
        return cy.get('div.add-infra-btn')
    }

    getInfrastructureSingleDeleteBtn(InfrastructureName){
        return cy.xpath('//div[text()="'+InfrastructureName+'"]/ancestor::div[@class="infra-table-row-out"]//div[@class="rooms-delete-out"]')
    }

    getInfrastructureTitle(){
        return cy.xpath("//div[text()='School Infrastructure']")
    }

    getPopUpAddInfrastructureTitle(){
        return cy.get('div.header-row')
    }

    getInfrastructureNameTextField(){
        return cy.xpath("//input[@name='buildingName']")
    }

    getNumberofFloorsTextField(){
        return cy.xpath("//input[@name='floors']")
    }

    getDiscriptionTextField(){
        return cy.xpath("//input[@name='description']")
    }

    getaddbttn(){
        return cy.get(".add-btn")
    }

    getAddInfrastructureInsertedSuccessfully(){
        return cy.xpath("//div[text()='Inserted Successfully']")
    }

    getInfrastructureNameTexts(){
        return cy.get("div.infra-table-row-out div.infra-name-font")
    }

    getInfrastructureDeleteIconBtn(){
        return cy.get(".rooms-delete-out")
    }

    getInfrastructureDeleteBttnPopUp(){
        return cy.get("div.delete-button")
    }

    getAddRoomBttn(){
        return cy.get(".rooms-btn-out")
    }

    
    getRoomNameTextField(){
        return cy.get('.schAdminInputCtr')
    }

    getGradeDropDownBttn(){
        return cy.get("#demo-simple-select")
    }

    getGradeDropDownLists(){
        return cy.get("div.MuiPopover-paper")
    }

    getAddRoomPopUpTitle(){
        return cy.xpath("//div[text()='Add Room']")
    }

    getPopupAddRoomBttn(){
        return cy.get(".add-btn")
    }

}
module.exports = new SchoolInftastructures()