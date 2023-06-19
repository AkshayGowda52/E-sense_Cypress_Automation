class adminUsersPage {

    getAdminUsersSideMenuTab() {
        return cy.get('div[class="menu-txt"]').contains('Users')
    }

    getAdminUsersTeachersTab() {
        return cy.get('button.MuiTab-root').contains('Teachers')
    }

    getAdminUsersStudentTab() {
        return cy.get('button.MuiTab-root').contains('Students')
    }

    getAdminUsersAddTeacherBtn() {
        return cy.get('div.TeacherDashboard_AddUserIcon__2LG5j')
    }

    getAdminAddNewTeacherAccountFullNameTxt() {
        return cy.get('input[name="fullName"]')
    }

    getAdminAddNewTeacherAccountEmailTxt() {
        return cy.get('input[name="email"]')
    }

    getAdminAddNewTeacherAccountDateOfBirthIcon() {
        return cy.get('svg[data-testid="CalendarIcon"]')
    }

    getAdminAddNewTeacherAccountDateOfBirthDateBtn(Day) {
        return cy.get('div[role="cell"]').contains(Day)
    }

    getAdminAddNewTeacherAccountGenderDropdown() {
        return cy.get('div[id="mui-component-select-gender"]')
    }

    getAdminAddNewTeacherAccountGenderDropdownMaleOpt() {
        return cy.get('li[data-value="M"]')
    }

    getAdminAddNewTeacherAccountContactNumberTxt() {
        return cy.get('input[name="contact"]')
    }

    getAdminAddNewTeacherAccountAddressLineTxt() {
        return cy.get('input[name="address_one"]')
    }

    getAdminAddNewTeacherAccountPineCodeTxt() {
        return cy.get('input[name="pincode"]')
    }

    getAdminAddNewTeacherAccountBasicDetailsContinueBtn() {
        return cy.get('button.continue-btn-cls')
    }

    getAdminAddNewTeacherAccountAcademicDetailsDepartmentDropdown() {
        return cy.get('div.schAdminSelctCtr.css-13sljp9')
    }

    getAdminAddNewTeacherAccountAcademicDetailsDepartmentDropdownOpt() {
        return cy.get('li.MuiMenuItem-gutters')
    }

    getAdminAddNewTeacherAccountAcademicDetailsBranchDropdown() {
        return cy.get('div.schAdminSelctCtr.css-tzsjye')
    }

    getAdminAddNewTeacherAccountAcademicDetailsBranchDropdownOpt() {
        return cy.get('span.MuiListItemText-primary')
    }

    getAdminAddNewTeacherAccountAcademicDetailsContineBtn() {
        return cy.get('div.continue-btn')
    }

    getAdminAddNewTeacherAccountAcademicDetailsSaveChangesBtn() {
        return cy.get('button.AcademicDetails_saveChangesBtn__5Hcqk')
    }

    getAdminAddNewTeacherAccountGradeSectionSelectGradeDropdown() {
        return cy.get('div[id="opt-subjects"]')
    }

    getAdminAddNewTeacherAccountGradeSectionSelectGradeDropdownOpt(opt) {
        return cy.get('span.MuiListItemText-primary').contains(opt)
    }

    getAdminAddNewTeacherAccountGradeSectionSelectGradeCheckBox() {
        return cy.get('div.left-cls span input')
    }

    getAdminAddNewTeacherAccountGradeSectionClassTeacherRedioBtn() {
        return cy.get('div[class="radio-button-cls-custom"]')
    }

    getAdminAddNewTeacherAccountGradeSectionSelectSubjectsDropdown() {
        return cy.get('div[id="opt-subjects"]').eq(1)
    }

    getAdminAddNewTeacherAccountGradeSectionSelectSubjectsDropdownOpt() {
        return cy.get('span.MuiListItemText-primary')
    }

    getAdminAddNewTeacherAccountSubjectsAndSectionsContineBtn() {
        return cy.get('button.continue-btn ')
    }


    getTeacherDeleteBtn(teachername) {
        return cy.xpath('//p[text()="' + teachername + '"]/ancestor::tr//button[@aria-label="Delete Teacher"]')
    }

    getStudentDeleteBtn(teachername) {
        return cy.xpath('//p[text()="' + teachername + '"]/ancestor::tr//button[@aria-label="Delete Student"]')
    }

    getTeacherEditBtn(teachername) {
        return cy.xpath('//p[text()="' + teachername + '"]/ancestor::tr//button[@aria-label="Edit Teacher"]')
    }

    getStudentEditBtn(studentname) {
        return cy.xpath('//p[text()="' + studentname + '"]/ancestor::tr//button[@aria-label="Edit Student"]')
    }

    getTeacherResetBtn(teachername) {
        return cy.xpath('//p[text()="' + teachername + '"]/ancestor::tr//button[@aria-label="Reset"]')
    }

    getTeacherViewBtn(teachername) {
        return cy.xpath('//p[text()="' + teachername + '"]/ancestor::tr//img[@src="/static/media/rightViewImg.a97b7807.svg"]')
    }

    getStudentViewBtn(Studentname) {
        return cy.xpath('//p[text()="' + Studentname + '"]/ancestor::tr//img[@src="/static/media/rightViewImg.a97b7807.svg"]')
    }

    getTeacherEditSaveChangesBtn() {
        return cy.get('button.continue-btn-cls')
    }

    getStudentEditSaveChangesBtn() {
        return cy.get('button.AcademicDetails_saveChangesBtn__5Hcqk')
    }

    getTeacherDeleteAccountBtn() {
        return cy.get('h6[class="MuiTypography-root MuiTypography-h6 css-1anx036"]').contains('Delete Account')
    }

    getTeacherDeactivateAccountBtn() {
        return cy.get('h6[class="MuiTypography-root MuiTypography-h6 css-1anx036"]').contains('Deactivate Account')
    }

    getTeacherConfermationPopupDeleteBtn() {
        return cy.get('button.userdelete')
    }


    getTeacherConfermationPopupDeactivateaccountBtn() {
        return cy.get('button.userdelete')
    }

    getTeacherBulkUploadBtn() {
        return cy.get('button[aria-label="Bulk Upload"]')
    }

    getStudentBulkUploadBtn() {
        return cy.get('button[aria-label="Bulk Upload"]')
    }

    getTeacherUploadTeacherAccountsinbulkDownloadSampleFileLink() {
        return cy.get('button.BulkUpload_downloadSampleTxt__1UJTp')
    }

    getTeacherUploadTeacherAccountsinbulkSelectFileFromComputerBtn() {
        return cy.get('input[id="file-input"]')
    }

    getTeacherUploadTeacherAccountsinbulkImportTeacherAccounts() {
        return cy.get('button.BulkUpload_bulkImport__spFpc')
    }

    getAdminAddNewTeacherAccountBasicDetailsCancelBtn() {
        return cy.get('div.cancel-btn')
    }

    getTeacherInCompleteIcon() {
        return cy.get('.TeacherDashboard_alertImgcls__3ceOA')
    }


    getTeacherViewDeactivateAccountBtn() {
        return cy.get('button.TeacherProfile_tchPrfDactBtn__2E33J')
    }

    getTeacherViewTeacherDetailsTab() {
        return cy.get('div.tchPrfWrkListDetailsImg').contains('Teacher Details')
    }

    getTeacherViewAcademicDetailsTab() {
        return cy.get('div.tchPrfWrkListDetailsImg').contains('Academic Details')
    }

    getTeacherViewViewTeacherCalendarTab() {
        return cy.get('div.tchPrfWrkListDetailsImg').contains('View Teacher Calendar')
    }

    getTeacherViewPopupCloseBtn() {
        return cy.get('div[class="closediv"] svg[data-testid="CloseIcon"]')
    }

    getTeacherSearchTxtfld() {
        return cy.get('input[type="search"]')
    }

    getStudentSearchTxtfld() {
        return cy.get('input[type="search"]')
    }

    getActionsBtnLst() {
        return cy.get('div[class*="TeacherDashboard_textdeactive"]')
    }

    getTeacherDeactivatedDrpDwnLst() {
        return cy.get('div.activate-button-grp-cls div.font-cls')
    }

    getDeactivateAccountBtn() {
        return cy.get('h6.MuiTypography-root').eq(0)
    }

    getDeleteAccountBtn() {
        return cy.get('h6.MuiTypography-root').eq(1)
    }

    getDeleteSubmitBtn() {
        return cy.get('button.userdelete')
    }

    getTeacherLst() {
        return cy.get('div[class*="TeacherDashboard_student"] p:nth-child(1)')
    }

    getTeacherDltBtn(teacherName) {
        return cy.xpath('//div[contains(@class,"TeacherDashboard_studentMeta")]/p[contains(text(),"' + teacherName + '")]/../../../../td/div/button[@aria-label="Delete Teacher"]')
    }

    getStudentDltBtn(studentName) {
        return cy.xpath('//div[contains(@class,"UserDashBoard_studentMeta")]/p[contains(text(),"'+studentName+'")]/../../../../td/div/button[@aria-label="Delete Student"]')
    }

    getDeleteAccountBtn() {
        return cy.get('h6.MuiTypography-root').eq(1)
    }

    getAddTeacherBtnInTeacherPage() {
        return cy.get('div[class*=TeacherDashboard_AddUserIcon_]')
    }

    getFullNameTxtFld() {
        return cy.get('input[name="fullName"]')
    }

    getEmailTxtFld() {
        return cy.get('input[name="email"]')
    }

    getDOBIcon() {
        return cy.get('button svg[data-testid="CalendarIcon"]')
    }

    getDownArrowDOBIcon() {
        return cy.get('button svg[data-testid="ArrowDropDownIcon"]')
    }

    getYearPickerDOB() {
        return cy.get('button[class*="PrivatePickersYear-yearButton"]')
    }

    getGenderDrpDwn() {
        return cy.get('#mui-component-select-gender')
    }

    getGenderDrpdwnLst() {
        return cy.get('div ul li[role="option"]')
    }

    getContactNoFld() {
        return cy.get('input[name="contact"]')
    }

    getAddressline1Fld() {
        return cy.get('input[name="address_one"]')
    }

    getPincodeFld() {
        return cy.get('input[name="pincode"]')
    }

    getContinueBtn() {
        return cy.get('button.continue-btn-cls')
    }

    getDepartmentDrpDwn() {
        return cy.get('.css-13sljp9 > .MuiOutlinedInput-root > #demo-simple-select')
    }

    getDeptLst() {
        return cy.get('div ul li[role="option"]')
    }

    getBranchesFld() {
        return cy.get('#opt-subjects')
    }

    getContinueBtn2() {
        return cy.get('div.continue-btn')
    }

    getGradeDrpDwn() {
        return cy.get('#opt-subjects')
    }

    getThirdContinueBtn() {
        return cy.get('button[type="submit"]').last()
    }

    getSectionCheckBx() {
        return cy.get('input[type="checkbox"]').last()
    }

    getClassTeacherRadioBtn() {
        return cy.get('div.radio-button-cls-custom').last()
    }

    getSelectSubjectsDrpDwn() {
        return cy.get('.right-cls > .MuiFormControl-root > .MuiOutlinedInput-root > #opt-subjects')
    }

    getSelSubjectCheckBx() {
        return cy.get('span.PrivateSwitchBase-root').last()
    }

    getTeacherLst() {
        return cy.get('div[class*="TeacherDashboard_student"] p:nth-child(1)')
    }

    getStudentLst() {
        return cy.get('div[class*="UserDashBoard_studentMeta"] p:nth-child(1)')
    }

    getStudentDltBtn() {
        return cy.get('button[aria-label="Delete Student"]')
    }

    getSiTeacherLst() {
        return cy.get('p[class*="TeacherDashboard_adminssionNumber"]')
    }

    getTeacherAdmissionNumber(teacherName) {
        return cy.xpath('//p[text()="' + teacherName + '"]/ancestor::div[@class="TeacherDashboard_studentMeta__3kQfU"]//p[@class="MuiTypography-root MuiTypography-body1 TeacherDashboard_adminssionNumber__1gVX3 css-9l3uo3"]')
    }

    getTeacherDeactivateBtn(teacherName) {
        return cy.xpath('//p[text()="' + teacherName + '"]/ancestor::tr//div[@class="TeacherDashboard_textdeactive__3UvpD"]')
    }

    getTeacherDeactivateActivateBtn() {
        return cy.get('div[class="font-cls"]').contains('Activate')
    }

    getTeacherDeactivatePopupActivateBtn() {
        return cy.get('button.activate')
    }

    getAddtudentBtn() {
        return cy.get('div[aria-label="Add student(s)"]')
    }

    getStudentFullNameTxtFld() {
        return cy.get('input[id="fullName"]')
    }

    getStudentGenderDropDown() {
        return cy.get('div[id="demo-simple-select"]').eq(1)
    }

    getStudentRelationDropDown() {
        return cy.get('div[id="demo-simple-select"]').eq(3)
    }

    getStudentGenderDropDownOpt() {
        return cy.get('li[role="option"]')
    }

    getStudentRelationDropDownOpt() {
        return cy.get('li[role="option"]')
    }

    getStudentContactNumberTxtFld() {
        return cy.get('input[name="contactNumber"]')
    }

    getStudentGurdianNameTxtFld() {
        return cy.get('input[id="Guardian Name*"]')
    }

    getStudentGurdianContactNumberTxtFld() {
        return cy.get('input[id="Contact Number*"]').eq(1)
    }

    getStudentAddressTxtFld() {
        return cy.get('input[name="addressLineOne"]')
    }

    getStudentPinecodeTxtFld() {
        return cy.get('input[name="pinCode"]')
    }

    getAddStudentBtn() {
        return cy.get('button.AcademicDetails_saveChangesBtn__5Hcqk')
    }

    getStudentAcademicDetailsAmissionYearTxtFld() {
        return cy.get('input[placeholder="yyyy"]')
    }

    getStudentAcademicDetailsAdmissionNumberTxtFld() {
        return cy.get('input[id="AdmissionNo"]')
    }

    getStudentAcademicDetailsGradeDropdown() {
        return cy.get('.css-10bl4s4 > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-simple-select')
    }

    getStudentAcademicDetailsSectionsDropdown() {
        return cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-simple-select')
    }

    getStudentAcademicDetailsGradeDropdownOpt(grade) {
        return cy.get('li[role="option"]').contains(grade)
    }

    getStudentAcademicDetailsSectionDropdownOpt() {
        return cy.get('li[role="option"]')
    }

    getStudentAcademicDetailsRollNoTxtFld() {
        return cy.get('input[id="RollNo"]')
    }

    getStudentDeleteBtn(studentName) {
        return cy.xpath('//div[@class="UserDashBoard_studentMeta__12OmY"]/p[text()="' + studentName + '"]/ancestor::tr//button[@aria-label="Delete Student"]')
    }

    getStudentDeleteAccountBtn() {
        return cy.get('h6[class="MuiTypography-root MuiTypography-h6 css-1anx036"]').contains('Delete Account')
    }

    getStudentConfermationPopupDeleteBtn() {
        return cy.get('button.userdelete')
    }


    getAddStudentGradeDropdown(){
        return cy.get('div.schAdminInputCtrSelect').eq(0)
    }

    getAddStudentGradeDropdownOpt(opt){
        return cy.get('li[role="option"]').contains(opt)
    }

    getAddStudentSectionDropdown(){
        return cy.get('div.schAdminInputCtrSelect').eq(1)
    }

    getAddStudentSectionDropdownOpt(opt){
        return cy.get('li[role="option"]').contains(opt)
    }

    getAddStudentDoneBtn(){
        return cy.get('button.fileUploadPopup_gradeBtn__7zxBc')
    }

    getStudentBulkUploadDownloadSampleFile(){
        return cy.get('button.BulkUpload_downloadSampleTxt__1UJTp')
    }

    getStudentUploadStudentAccountsinbulkSelectFileFromComputerBtn() {
        return cy.get('input[id="file-input"]')
    }


    getStudentUploadStudentAccountsinbulkImportStudentAccounts() {
        return cy.get('button.BulkUpload_bulkImport__spFpc')
    }

    getStatetxtFldInNewTeacherCreation(){
        return cy.get('input[name="state"]')
    }

    //Business-Logic
    newTeacherCreation() {
        cy.get('body').click(0, 0)
        this.getAdminUsersSideMenuTab().click({ force: true })
        this.getAdminUsersTeachersTab().click().wait(2000)
        this.getTeacherDltBtn("alex").click()
        this.getDeleteAccountBtn().click()
        cy.contains("Do you want to delete the teacher alex ?").should('be.visible')
        this.getDeleteSubmitBtn().click()
        cy.wait(2000)
        this.getTeacherLst().should('not.contain.text', "alex")
        cy.wait(3000)
        this.getAddTeacherBtnInTeacherPage().click()
        this.getFullNameTxtFld().type("alex")
        this.getEmailTxtFld().type("alex@gmail.com")
        this.getDOBIcon().click()
        this.getDownArrowDOBIcon().click()
        this.getYearPickerDOB().contains("2010").click()
        this.getGenderDrpDwn().click()
        this.getGenderDrpdwnLst().contains("Male").click()
        this.getContactNoFld().type("9797979797")
        this.getAddressline1Fld().type("Topschool")
        this.getPincodeFld().type("636401")
        this.getStatetxtFldInNewTeacherCreation().click({force:true})
        cy.wait(2000)
        this.getContinueBtn().click()
        cy.wait(3000)
        this.getDepartmentDrpDwn().click()
        this.getDeptLst().first().click()
        this.getContinueBtn2().click()
        cy.wait(3000)
        this.getGradeDrpDwn().click()
        this.getDeptLst().eq(11).click()
        cy.get('body').click(0, 0)
        cy.wait(1000)
        this.getSectionCheckBx().click()
        this.getClassTeacherRadioBtn().click()
        this.getSelectSubjectsDrpDwn().click()
        this.getSelSubjectCheckBx().click()
        cy.get('body').click(0, 0)
        this.getThirdContinueBtn().click()
        cy.wait(2000)
    }

}

module.exports = new adminUsersPage()