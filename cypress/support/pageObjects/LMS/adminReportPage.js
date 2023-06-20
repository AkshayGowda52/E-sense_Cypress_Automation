class AdminReportPage {

    //Tc_001 Verify that School Admin can Edit the TopSchool Gradebook Template

    getAdminReportsSideMenubarReportTab() {
        return cy.get('div.side-nav-bar ').invoke('show').contains('Reports')
    }

    getAdminReportsStudentGradebookTab() {
        return cy.get('div[class="content-report-sect"] [class="popover-arrow"]').eq(0)
    }

    getAdminReportsVerifyStudentGradebookText() {
        return cy.contains('Student Gradebook')
    }

    getAdminReportsGradeEditButton(Grades) {
        return cy.xpath('(//p[contains(text(),"' + Grades + '")]/ancestor::tr//button[contains(.,"Pending")]//following::img[@aria-label="Edit"])[1]')
    }

    getAdminReportsVerifyBasicTemplateDetailsText() {
        return cy.contains('Basic Template Details')

    }

    getCreateNewTemplateGradeDropdown() {
        return cy.get('div#demo-simple-select-helper').eq(0)
    }

    getCreateNewTemplateSectionDropdown() {
        return cy.get('[class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiOutlinedInput-input"]').eq(0)
    }

    getCreateNewTemplateNumberOftermsDropdown() {
        return cy.get('div#demo-simple-select-helper').eq(1)
    }

    getCreateNewTemplateSelectNumberOftermsValue() {
        return cy.get('li[data-value="1"]')
    }

    getCreateNewTemplatePublishGradebookInDropdown() {
        return cy.get('div#demo-simple-select-helper').eq(2)
    }

    getCreateNewTemplateSelectPublishGradebookInValue() {
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"]').contains('Mark')
    }

    getCreateNewTemplateAddTestTypeButton() {
        return cy.contains('+ Add Test Type')
    }

    getCreateNewTemplateTermDropdown() {
        return cy.get('div#mui-component-select-testType')
    }

    getCreateNewTemplateTermCheckbox() {
        return cy.get('li[data-value="1"]')
    }

    getCreateNewTemplateTestTypeDropdown() {
        return cy.get('div#demo-simple-select-helper').eq(3)

    }

    getCreateNewTemplateSelectTestTypeValue() {
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"]').contains('Test 1')
    }

    getCreateNewTemplateMaxMarksDropdown() {
        return cy.get('div#demo-simple-select-helper').eq(4)
    }

    getCreateNewTemplateSelectMaxMarksValue() {
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"]').contains('100')
    }

    getCreateNewTemplateAddSubjectButton() {
        return cy.contains(' + Add Subject ')
    }

    getCreateNewTemplateSubjectDropdown() {
        return cy.get('div#mui-component-select-subject')
    }

    getCreateNewTemplateSelectSubjectvalue() {
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"] li').eq(1)
    }

    getCreateNewTemplateAddTheoryAndPracticleButton() {
        return cy.contains('+ Add Theory and Practical')
    }

    getAddTheoryAndPracticleTestTypeDropdown() {
        return cy.get('.CreateNewTemplate_crtNewTempCodeSubInner__1YOJm > .adminTempContSelctFild > .MuiInputBase-root > #demo-simple-select-helper')
    }

    getAddTheoryAndPracticleTestTypeValue() {
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"]').contains('Test 1')
    }

    getCreateNewTemplateTheoryTextfield() {
        return cy.get('input[name="theoryMarks"]')
    }

    getCreateNewTemplatePracticleTextfield() {
        return cy.get('input[name="practicalMarks"]')
    }

    getDelButton() {
        return cy.get(':nth-child(4) > .MuiButton-root')
    }

    getCreateNewTemplateAddActivityTextfield() {
        return cy.get('input[name="activity"]')
    }

    getCreateNewTemplateAddPrincipleSignatureButton() {
        return cy.contains("Add Principal's Signature")
    }

    getCreateNewTemplateVerifyAddSignatureTxt() {
        return cy.contains('Add Signature')
    }

    getCreateNewTemplateUploadImage() {
        return cy.get('.fileimages > input')
    }

    getSaveButton() {
        return cy.get('[data-testid="savvBtn"]')
    }

    getCreateNewTemplateSaveAndPreviewBtn() {
        return cy.xpath("//button[contains(.,'Save And Preview')]")
    }

    getPreviewScreenSubDetailsText() {
        return cy.get('td[class="schlTbleRptCell2"]')
    }

    getPreviewScreenCoScholasticActivitiesTxt() {
        return cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(1)')
    }

    getPreviewScreenPublishButton() {
        return cy.xpath('//button[contains(.,"Publish")]')
    }

    getPreviewScreenProceedPublishButton() {
        return cy.get('[data-testid="primaryBtn"]')
    }

    getPreviewScreenYesPublishButton() {
        return cy.xpath('//button[contains(.,"Yes, Publish")]')
    }

    getStudentGradeBookTxt() {
        return cy.xpath('//p[contains(.,"Student Gradebook")]')
    }

    getVerifyGradeContainPublishedStatus(Grades) {
        return cy.xpath('//p[contains(text(),"' + Grades + '")]/ancestor::tr/descendant::td[contains(.,"Published")]')
    }

    getPublishedStatusToggleButton(Grades) {
        return cy.xpath('//p[contains(text(),"' + Grades + '")]/ancestor::tr/descendant::td[contains(.,"Published")]/../descendant::span[@class="MuiSwitch-root MuiSwitch-sizeMedium css-ecvcn9"]')
    }

    getYesUnfinishButton() {
        return cy.xpath('//span[contains(.,"Yes, Unpublish")]')
    }

    getVerifyGradebookUnfinishedSuccesfullyTxt() {
        return cy.get('div[class="font-cls"]')
    }

    getVerifyGradeContainDraftStatus(Grades) {
        return cy.xpath('//p[contains(text(),"' + Grades + '")]/ancestor::tr/descendant::td[contains(.,"Draft")]')
    }

    getDraftStatusToggleButton(Grades) {
        return cy.xpath('//p[contains(text(),"' + Grades + '")]/ancestor::tr/descendant::td[contains(.,"Draft")]/../descendant::span[@class="MuiSwitch-root MuiSwitch-sizeMedium css-ecvcn9"]')
    }

    getDeleteIcon(Grades) {
        return cy.xpath('//p[contains(text(),"' + Grades + '")]/ancestor::tr/descendant::td[contains(.,"Draft")]/../descendant::img[@aria-label="Delete"]')
    }

    getDeleteButton() {
        return cy.xpath('//span[contains(.,"Delete")]')
    }


    //Tc_002 Verify that School Admin can Create the Gradebook Template
    getAdminReportsGradeViewButton(Grades) {
        return cy.xpath('//p[contains(text(),"' + Grades + '")]/ancestor::tr/descendant::td[contains(.,"Pending")]/../descendant::button[@aria-label="View"]')
    }

    getCreateNewButton() {
        return cy.xpath('//span[contains(.,"Create New")]')
    }

    getCreateNewTemplateSelectGradeDropdownValue() {
        return cy.get('ul[class="MuiList-root MuiMenu-list MuiList-padding"] li')
    }

    getCreateNewTemplateSelectSectionDropdownValue() {
        return cy.get('[class="MuiList-root MuiMenu-list MuiList-padding"] li').contains('B')
    }

    getCountinueButton() {
        return cy.xpath('//button[contains(.,"Continue")]')
    }

    getAddActivityButton() {
        return cy.xpath('//button[contains(.,"+ Add Activity")]')
    }


    // Tc-003 Verify that School Admin can Delete the Gradebook Template
    getCreatetemplateButton() {
        return cy.xpath(' //a[contains(.,"Create Template")]')
    }

    getSaveAsDraftButton() {
        return cy.xpath('//button[contains(.,"Save As Draft")]')
    }

    getGradeCheckBoxStudentGradeBookPage(Grades) {
        return cy.xpath('//p[contains(.,"' + Grades + '")]/ancestor::tr/descendant::button[contains(.,"Draft")]/ancestor::tr/descendant::input[@class="PrivateSwitchBase-input css-1m9pwf3"]')

    }

    getDeleteIconStudentGradeBookPage() {
        return cy.xpath('//button[contains(.,"Delete")]')

    }

    //To Create Template
    CreateNewTemplate(Grade, Section, Practicle, AddActivityName, File) {

        this.getCreatetemplateButton().click({ force: true })
        this.getCreateNewTemplateGradeDropdown().click()
        this.getCreateNewTemplateSelectGradeDropdownValue().contains(Grade).click()
        this.getCreateNewTemplateSectionDropdown().click()
        this.getCreateNewTemplateSelectSectionDropdownValue().contains(Section).click()
        cy.get('body').click()
        this.getCreateNewTemplateNumberOftermsDropdown().click()
        this.getCreateNewTemplateSelectNumberOftermsValue().click()
        this.getCreateNewTemplatePublishGradebookInDropdown().click()
        this.getCreateNewTemplateSelectPublishGradebookInValue().click({ force: true })
        this.getCountinueButton().click()
        this.getCreateNewTemplateAddTestTypeButton().click()
        this.getCreateNewTemplateTermDropdown().click().wait(1000)
        this.getCreateNewTemplateTermCheckbox().click()
        cy.get('body').click()
        this.getCreateNewTemplateTestTypeDropdown().click()
        this.getCreateNewTemplateSelectTestTypeValue().click()
        this.getCreateNewTemplateMaxMarksDropdown().click()
        this.getCreateNewTemplateSelectMaxMarksValue().click()
        this.getCountinueButton().click()
        this.getCreateNewTemplateAddSubjectButton().click()
        this.getCreateNewTemplateSubjectDropdown().click()
        this.getCreateNewTemplateSelectSubjectvalue().click()
        this.getCreateNewTemplateAddTheoryAndPracticleButton().click()
        this.getAddTheoryAndPracticleTestTypeDropdown().click({ force: true })
        this.getAddTheoryAndPracticleTestTypeValue().click()
        this.getCreateNewTemplatePracticleTextfield().click().type(Practicle)
        this.getCountinueButton().click()
        this.getAddActivityButton().click()
        this.getCreateNewTemplateAddActivityTextfield().type(AddActivityName)
        this.getCountinueButton().click()
        this.getCreateNewTemplateAddPrincipleSignatureButton().click()
        this.getCreateNewTemplateUploadImage().selectFile(File)
        this.getSaveButton().click({ force: true }).wait(1000)
        this.getSaveAsDraftButton().click({ force: true })

    }


    //Tc_004 Verify that School Admin can view the Gradebook Template
    getGradeDraftStatusViewIcon(DraftStatusGrade) {
        return cy.xpath('//p[contains(text(),"' + DraftStatusGrade + '")]/ancestor::tr/descendant::button[contains(.,"Draft")]/ancestor::tr/descendant::button[@aria-label="View"]')
    }

    getPreviewButton() {
        return cy.xpath('//span[contains(.,"Preview")]')
    }

    getPublishedStatusViewIcon(Grades) {
        return cy.xpath('//p[contains(text(),"' + Grades + '")]/ancestor::tr/descendant::td[contains(.,"Published")]/../descendant::button[@aria-label="View"]')
    }


    //Tc_005 Verify that School Admin can search and select filters in template  Template
    getSearchTextfield() {
        return cy.get('input[placeholder="Search a template"]')
    }

    getAllDropdown() {
        return cy.get('div[id="demo-simple-select"]')
    }

    getGradesList() {
        return cy.get('p[class="MuiTypography-root MuiTypography-body1 name css-9l3uo3"] ')
    }

    getTopSchoolBtn() {
        return cy.get('ul[class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"] li').contains('TopSchool')
    }

    getMySchoolBtn() {
        return cy.get('ul[class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"] li').contains('My School')
    }



    // Tc_006 Verify that School Admin can Add results for respective students

    // pre condition -Create student
    getUserTab() {
        return cy.get('div.side-nav-bar ').invoke('show').contains('Users')
    }

    getStudentsTab() {
        return cy.xpath('//button[contains(.,"Students")]')
    }

    getAddStudentsIcon() {
        return cy.get('div[aria-label="Add student(s)"]')
    }

    getAddStudentPageFullNameTxtfield() {
        return cy.get('#fullName')
    }

    getAddStudentPageGenderDropdown() {
        return cy.get('[id="demo-simple-select"]').eq(1)
    }

    getAddStudentPageGenderList() {
        return cy.get('[aria-labelledby="demo-simple-select-label"] li').contains('Male')
    }

    getAddStudentPagePrimaryDetailsContactNumb() {
        return cy.get('[id="Contact Number*"]').eq(0)
    }

    getAddStudentPageSelectRelationDropdown() {
        return cy.get('[id="demo-simple-select"]').eq(3)
    }

    getAddStudentPageSelectRelation() {
        return cy.get('[aria-labelledby="demo-simple-select-label"] li').contains('Mother')
    }

    getAddStudentPageGuardianNameTxtfield() {
        return cy.get('input[id="Guardian Name*"]')
    }

    getAddStudentPageGuardianContactNumb() {
        return cy.get('[id="Contact Number*"]').eq(1)
    }

    getAddStudentPageAddressLine1TxtField() {
        return cy.get('input[id="Address Line 1"]')
    }

    getAddStudentPagePincodeTxtfield() {
        return cy.get('input[id="Pin Code"]')
    }

    getAddStudentButton() {
        return cy.xpath('//button[contains(.,"Add Student")]')
    }

    getAddStudentPageAdmissionYeartxtfield() {
        return cy.get('input[placeholder="yyyy"]')
    }

    getAddStudentPageAdmissionNumbTxtfield() {
        return cy.get('input[id="AdmissionNo"]')
    }

    getAddStudentPageGradeDropdown() {
        return cy.get('[id="demo-simple-select"]').eq(2)
    }

    getAddStudentPageGradesList() {
        return cy.get('[role="listbox"] li').contains('Grade 2')
    }

    getAddStudentPageSectionDropdown() {
        return cy.get('[id="demo-simple-select"]').eq(3)
    }

    getAddStudentPageSectionList() {
        return cy.get('[role="listbox"] li').contains('A')
    }

    getAddStudentPageRollNumbTxtfield() {
        return cy.get('input[id="RollNo"]')
    }

    // Post condition -Delete created Student 
    getAdminModuleUserPageStudentsList() {
        return cy.get('div.UserDashBoard_studentMeta__12OmY p:nth-child(1)')
    }

    getAdminModuleUserPageStudentsListDeleteIcon() {
        return cy.get('[aria-label="Delete Student"]')
    }

    getAdminModuleUserPageStudentsListDeletePopup() {
        return cy.get('p[class="MuiTypography-root MuiTypography-body1 css-si96ef"] h6').contains('Delete Account')
    }

    getAdminModuleUserPageStudentsListDeleteButton() {
        return cy.xpath('//button[contains(.,"Delete account")]')
    }

    getGradeBookTab() {
        return cy.xpath('//button[contains(.,"GradeBook")]')
    }

    getGradeBookPagePendingStatus() {
        return cy.xpath('//td[contains(.,"kumar")]/parent::tr//td[contains(.,"Pending")]')
    }

    getGradeBookStudentsLists() {
        return cy.get('tbody>tr[class="MuiTableRow-root MuiTableRow-hover css-1gqug66"] td:nth-child(4)')
    }

    getArrowForwordIcon() {
        return cy.get('[data-testid="ArrowForwardIosIcon"]')
    }

    getEditButton() {
        return cy.xpath('//button[contains(.,"Edit")]')
    }

    getTheoryTextField() {
        return cy.get('div[class="schTableInputFoc"]>input[type="number"]').eq(0)
    }

    getPracticleTextfield() {
        return cy.get('div[class="schTableInputFoc"]>input[type="number"]').eq(1)
    }

    getCoScholasticActivities1_TxtField() {
        return cy.contains('Activity 1')
    }

    getCoScholasticActivities2_TxtField() {
        return cy.contains('Activity 2')
    }

    getCoScholasticActivities3_TxtField() {
        return cy.contains('Activity 3')
    }

    getCoScholasticActivities4_TxtField() {
        return cy.contains('Activity 4')
    }

    getSaveBtn() {
        return cy.xpath('//button[contains(.,"Save")]')
    }

    getRemarksTextfield() {
        return cy.get('textarea[id="outlined-multiline-static"]')
    }

    getTotalPercentage() {
        return cy.get('div[class="StudentGradeBook_stdGrdBkCrdStatSectInfoCnt__1IGxO"]').eq(0)
    }

    getResult() {
        return cy.get('div[class="StudentGradeBook_stdGrdBkCrdStatSectInfoCnt__1IGxO"]').eq(3)
    }

    getUpdatedStatus() {
        return cy.xpath('//td[contains(.,"kumar")]/parent::tr//td[contains(.,"Updated")]')
    }

    getCancelButton() {
        return cy.xpath('//button[contains(.,"Cancel")]')
    }

    getShowGradingSystemDropdown() {
        return cy.xpath(' //button[contains(.,"Grading System")]')
    }

    getPreviewAndPrintButton() {
        return cy.xpath('//button[contains(.,"Preview & Print")]')
    }

    getPrintOptions() {
        return cy.get('[class="MuiTypography-root MuiTypography-body1 css-9hthsz"] div[class="MuiBox-root css-k4h52c"]')
    }

    getPublishedStatus() {
        return cy.xpath('//td[contains(.,"kumar")]/parent::tr//td[contains(.,"Published")]')
    }

    getStudentResult() {
        return cy.xpath('//td[contains(.,"kumar")]/parent::tr/child::td[5]')
    }

    getTeacherModuleMyClassTab() {
        return cy.get('div.side-nav-bar ').invoke('show').contains('My Classes')
    }

    getTeacherModuleSubjectTab() {
        return cy.get('[class="content-popover_border"] [class="popover-arrow"]', { timeout: 2000 })
    }

    getTeacherModuleAssessmentsTab() {
        return cy.xpath('//button[contains(.,"Assessments")]')
    }

    getTeacherModuleELAsTab() {
        return cy.xpath('//button[contains(.,"ELAs")]')
    }


    // Tc_007 Verify that School Admin can search and select filters in Gradebook
    getSearchStudentTxtfield() {
        return cy.get('input[placeholder="Search a student..."]')
    }

    getAllGradesDropdown() {
        return cy.xpath('//div[@class="gradeBookTopCntSect"]/div[contains(.,"All Grades")]')
    }

    getAllSectionDropdown() {
        return cy.xpath('//div[@class="gradeBookTopCntSect"]/div[contains(.,"All Sections")]')
    }

    getAllTermsDropdown() {
        return cy.xpath('//div[@class="gradeBookTopCntSect"]/div[contains(.,"All terms")]')
    }

    getTermsList() {
        return cy.get('[aria-labelledby="demo-simple-select-label"] li').contains('Term 1')
    }



    // Tc_008 Verify that School Admin can search and select filters in 360 reports
    getStudent360ReportTab() {
        return cy.get('div[class="content-report-sect"] [class="popover-arrow"]').eq(1)
    }

    get360ReportPageTitle() {
        return cy.xpath('//p[contains(.,"360˚ Reports")]')
    }

    get360ReportPageStudentList() {
        return cy.get('table[aria-labelledby="tableTitle"] tbody>tr td:nth-child(3)')
    }

    get360ReportPageGradeDropdown() {
        return cy.get('[id="demo-simple-select-1"]')
    }

    get360ReportPageSectionDropdown() {
        return cy.get('[id="demo-simple-select-2"]')
    }

    get360ReportPageAddReportButton() {
        return cy.get('div[role="tabpanel"] button')
    }

    get360ReportAddNewReportPageSchoolTypeDropdown() {
        return cy.get('div[id="demo-simple-select"]').eq(0)
    }

    get360ReportAddNewReportPageSchoolTypeList() {
        return cy.get('[aria-labelledby="demo-simple-select-label"] li[data-value="Primary School"]')
    }

    get360ReportAddNewReportPageGradeDropdown() {
        return cy.get('div[id="demo-simple-select"]').eq(1)
    }

    get360ReportAddNewReportPageGradeList() {
        return cy.get('[aria-labelledby="demo-simple-select-label"] li[data-value="Grade 2"]')
    }

    get360ReportAddNewReportPageWeightTxtfield() {
        return cy.get('input[type="number"]').eq(0)
    }

    get360ReportAddNewReportPageHeightTxtfield() {
        return cy.get('input[type="number"]').eq(1)
    }

    get360ReportAddNewReportPageAddButton() {
        return cy.get('div button').contains('Add')
    }


    // Tc_011 Verify that School Admin is able to view the ELA's evalutaed by Teacher in 360 reports
    get360ReportMyGradestab() {
        return cy.xpath('//button[contains(.,"My Grades")]')
    }

    get360ReportSubjectGrades() {
        return cy.get('div[class="StudentDetails_prevStdMyGradeItem__3q6Lz MuiBox-root css-0"]')
    }

    get360ReportMyCompetencyTab() {
        return cy.xpath('//button[contains(.,"My Competency")]')

    }

    getMyCompetenctPageDropdown() {
        return cy.get('div[id="demo-simple-select"]')
    }

    getSelectSubject() {
        return cy.get('ul[role="listbox"] li').contains('Basic maths')
    }

    get360ReportSubjectPerformanceTab() {
        return cy.xpath('//button[contains(.,"Subject Performance")]')
    }

    getSubjectPerformancePageDropdown() {
        return cy.get('div[id="demo-simple-select"]')
    }

    getListOfGrade() {
        return cy.get('[role="listbox"] li').contains('Grade 2')
    }

    getSectionList() {
        return cy.get('[role="listbox"] li').contains('A')
    }


    CreateStudentAccount(studentname,RandomString,PrimaryContactNumb,GuardianName,GuardianContactNumb,AddressLine1,Pincode,AdmissionYear,AdmissionNumb,RollNumb){
       this.getUserTab().click()
       this.getStudentsTab().click()
       this.getAddStudentsIcon().click({ force: true })
       this.getAddStudentPageFullNameTxtfield().click().type(studentname + "" +RandomString)
       this.getAddStudentPageGenderDropdown().click()
       this.getAddStudentPageGenderList().click()
       this.getAddStudentPagePrimaryDetailsContactNumb().click().type(PrimaryContactNumb)
       this.getAddStudentPageSelectRelationDropdown().click()
       this.getAddStudentPageSelectRelation().click()
       this.getAddStudentPageGuardianNameTxtfield().click().type(GuardianName)
       this.getAddStudentPageGuardianContactNumb().click().type(GuardianContactNumb)
       this.getAddStudentPageAddressLine1TxtField().click().type(AddressLine1)
       this.getAddStudentPagePincodeTxtfield().click().type(Pincode).wait(1000)
       this.getAddStudentButton().click()
       this.getAddStudentPageAdmissionYeartxtfield().click({ force: true }).type(AdmissionYear)
       this.getAddStudentPageAdmissionNumbTxtfield().click().type(AdmissionNumb)
       this.getAddStudentPageGradeDropdown().click()
       this.getListOfGrade().click()
       this.getAddStudentPageSectionDropdown().click()
       this.getSectionList().click()
       this.getAddStudentPageRollNumbTxtfield().click().wait(1000).type(RollNumb)
       this.getAddStudentButton().click()
    }

    DeleteCreatedStudentAccount(studentname,RandomString){
         // Post conditon- Delete Created Student account
         this.getUserTab().click({ force: true })
         this.getStudentsTab().click().wait(1000)
         this.getAdminModuleUserPageStudentsList().each(($text, index) => {
             var studentName = $text.text().trim()
             if (studentName == studentname + "" + RandomString) {
                this.getAdminModuleUserPageStudentsListDeleteIcon().eq(index).click()
                this.getAdminModuleUserPageStudentsListDeletePopup().click()
                this.getAdminModuleUserPageStudentsListDeleteButton().click().wait(2000)
             }
         })
    }




}

module.exports = new AdminReportPage()

