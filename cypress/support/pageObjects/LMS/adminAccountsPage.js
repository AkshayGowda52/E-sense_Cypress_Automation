class adminAccountsPage{

    getAdminAccountText(){
        return cy.xpath('//div[text()="Admin Accounts"]')
    }

    getAddnewBtn(){
        return cy.get('button.adminRoles_addAdminBtn__2PCIE')
    }

    getAddNewRolePopUpText(){
        return cy.get('h5.RolesPopup_roleHeader__1d7KU')
    }

    getDesignationNameTextField(){
        return cy.get('input[name="userCustomRole"]')
    }

    getViewEditApprovalCheckBox(){
        return cy.get('span.RolesPopup_viewInputChecked__3Hg3M')
    }

    getAddRolePopUpBtn(){
        return cy.xpath("//button[text()='Add Role']")
    }

    getAdminTabBtn(){
        return cy.get('#scrollable-auto-tab-1')
    }

    getAdminAddNewbtn(){
        return cy.get('button.adminRoles_addAdminBtn__2PCIE')
    }

    getAdminFirstName(){
        return cy.get('input[name="fullName"]')
    }

    getAdminEmail(){
        return cy.get('input[name="email"]')
    }

    getAdminCalenderIcon(){
        return cy.get('svg[data-testid="CalendarIcon"]')
    }

    getAdminCalenderYearsbtn(){
        return cy.get('div.css-l0iinn')
    }

    getAdminCalenderYears(){
        return cy.get('div.MuiYearPicker-root ')
    }

    getAdminCalenderDate(){
        return cy.get('div.PrivatePickersSlideTransition-root')
    }

    getAdminGanderDropDown(){
        return cy.get('#mui-component-select-gender')
    }

    getAdminGanderDropDownLists(){
        return cy.get('ul.MuiMenu-list')
    }

    getAdminContactTextField(){
        return cy.get('input[name="contact"]')
    }

    getAdminBloodGroupbtn(){
        return cy.get('div[data-testid="bloodGrp"]')
    }

    getAdminBloodGroupLists(){
        return cy.get('ul[aria-labelledby="demo-simple-select-label"]')
    }

    getAdminEmployeeIDbtn(){
        return cy.get('input[name="empid"]')
    }

    getAdminSelectRoleBtn(){
        return cy.get('div[aria-labelledby="coll_subject"]')
    }

    getAdminSelectRoleLists(){
        return cy.get('ul.MuiMenu-list li')
    }

    getAdminAddressLine1btn(){
        return cy.get('input[name="address_one"]')
    }

    getAdminPincode(){
        return cy.get('input[name="pincode"]')
    }

    getAdminContinueBtn(){
        return cy.get('button.continue-btn-cls')
    }

    getAdminAccountTableRoleText(){
        return cy.xpath("//td[text()='HOD']")
    }

    getAdminStatebtn(){
        return cy.get('input[name="state"]')
    }

    getAdminCityBtn(){
        return cy.get('input[name="city"]')
    }

    getRoleDeleteBtn(){
        return cy.get('button[aria-label="Delete Role"]')
    }

    getRoleTab(){
        return cy.xpath('//button[text()="Roles"]')
    }

    getRoleDeletePopUpBtn(){
        return cy.get('div.delete-button')
    }

    
}

module.exports = new adminAccountsPage()