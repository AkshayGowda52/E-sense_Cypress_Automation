class TeacherReport {

    // Tc_001 Verify that Teacher can add / edit the results in Students Gradebook  of the respective grades
    getSideNavBar() {
        return cy.get('div[class="side-nav-content "]')
    }

    getReportTab() {
        return cy.get('div[class="side-nav-content "] li').contains('Reports')
    }

    getStudentGradeBookTab() {
        return cy.get('div[class="content-report-sect"] [class="popover-arrow"]')
    }

    getEditBtn() {
        return cy.xpath('//button[contains(.,"Edit")]')
    }

    getTheoryTxtField() {
        return cy.get('div[class="schTableInputFoc"]>input[type="number"]').eq(0)
    }

    getPracticleTxtField() {
        return cy.get('div[class="schTableInputFoc"]>input[type="number"]').eq(1)
    }

    getCoScholasticActivitiesMarksTxtField() {
        return cy.get('td[class*="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium coSChWidCell"]').eq(0).next()
    }

    getRemarksTxtField() {
        return cy.get('textarea[id="outlined-multiline-static"]')
    }

    getStudentFullName() {
        return cy.get('tr[role="checkbox"] td:nth-child(4)')
    }

    getArrowForwardIcon() {
        return cy.get('[data-testid="ArrowForwardIosIcon"]')
    }
    getTotalPercentage() {
        return cy.get('div[class*="StudentGradeBook_stdGrdBkCrdStatSectInfo"]>h1').eq(0)
    }

    getStudentResult() {
        return cy.get('div[class*="StudentGradeBook_stdGrdBkCrdStatSectInfo"]>h1').eq(3)
    }

    getSaveBtn() {
        return cy.xpath('//button[contains(.,"Save")]')
    }

    getUpdatedStatus() {
        return cy.xpath('//td[contains(.,"Updated")]')
    }

    getCancelBtn() {
        return cy.xpath('//button[contains(.,"Cancel")]')
    }

    getShowGradingSystemDropdown() {
        return cy.xpath('//button[text()="Show" and text()= " Grading System"]')
    }

    getGradeSystemLists() {
        return cy.get('table[class="table table-hover"]').last().find('tr td')
    }

    getPreviewANDprintBtn() {
        return cy.xpath('//button[contains(.,"Preview & Print")]')
    }

    getPreviewANDprintList() {
        return cy.get('p[class*="MuiTypography-root MuiTypography"] div h6')
    }

    getGradesList() {
        return cy.get('p[class*="MuiTypography-root MuiTypography-body1 n"]')
    }

    getPublishedStatus() {
        return cy.xpath('//td[contains(.,"Published")]')
    }

    getListOfGrade() {
        return cy.get('[role="listbox"] li').contains('Grade 2')
    }

    getSectionList() {
        return cy.get('[role="listbox"] li').contains('A')
    }

    getSaveANDcountinueBtn() {
        return cy.xpath('//button[contains(.,"Save and Continue ")]')
    }


    //Tc__003 Verify that Teacher can search and select filters in Gradebook
    getSearchTxtField() {
        return cy.get('input[placeholder="Search a student..."]')
    }

    getAlltermsDropdown() {
        return cy.xpath('//div[@class="gradeBookTopCntSect"]/div[contains(.,"All terms")]')
    }

    getAlltermsLists() {
        return cy.get('ul[role="listbox"] li').contains('Term 1')
    }


    //Tc__004 Verify that Teacher can search and select filters in 360 reports

    get360ReportPageGradeDropdown() {
        return cy.get('div[aria-haspopup="listbox"] ').eq(0)
    }

    get360ReportPageSectionDropdown() {
        return cy.get('div[aria-haspopup="listbox"] ').eq(1)
    }


    // Tc__005 Verify that School Admin can add the Health report in 360 reports

    getStudent360ReportsTab() {
        return cy.get('div[class="content-report-sect"] [class="popover-arrow"]')
    }

    get360ReportTxt() {
        return cy.xpath('//p[contains(.,"360˚ Reports")]')
    }

    getStudentsName() {
        return cy.get('tbody td:nth-child(3)')
    }

    getViewReportBtn() {
        return cy.get('[class="viewBtn"]')
    }

    getAddReportsBtn() {
        return cy.xpath('//button[contains(.,"Add Reports")]')
    }

    getAddNewReportTxt() {
        return cy.contains('Add New Report')
    }

    getSchoolTypeDropdown() {
        return cy.get('form[id="deptForm"] div[id="demo-simple-select"]').first()
    }

    getSchoolLists() {
        return cy.get('ul[role="listbox"]>li').contains('Middle School')
    }

    getGradesDropdown() {
        return cy.get('form[id="deptForm"] div[id="demo-simple-select"]').last()
    }

    getAddNewReportPage_GradesLists() {
        return cy.get('ul[role="listbox"]>li').contains('Grade 2')
    }

    getWeightTxtField() {
        return cy.get('form[id="deptForm"] input[class*="MuiOutlinedInput-input MuiInputBase-input"]').first()
    }

    getHeightTxtField() {
        return cy.get('form[id="deptForm"] input[class*="MuiOutlinedInput-input MuiInputBase-input"]').last()
    }

    getAddBtn() {
        return cy.get('button[type="submit"]')
    }

    //Tc 006 Verify that Teacher is able to view the ELA's  in 360 reports
    getMyGradesTab(){
        return cy.xpath('//button[contains(.,"My Grades")]')
    }

    getMyGradesTxt(){
        return cy.get('div[class*="StudentDetails_prevStdMyGradeItem"]')
    }

    getCompetencyTab(){
        return cy.xpath('//button[contains(.,"My Competency")]')
    }

    getChapterTxt(){
        return cy.get('table[class*="StudentDetails_prevStdMyCompTable"]>tr td:nth-child(1)')
    }

    getTopicTxt(){
        return cy.get('table[class*="StudentDetails_prevStdMyCompTable"]>tr td:nth-child(2)')
    }

    getCompetencyTxt(){
        return cy.get('table[class*="StudentDetails_prevStdMyCompTable"]>tr td:nth-child(3)')
    }

    getSubjectPerformanceTab(){
        return cy.xpath('//button[contains(.,"Subject Performance")]')
    }

    getLearningOutcomesTxt(){
        return cy.get('table[class*="StudentDetails_prevStdMyCompTable"]>tr td:nth-child(3)')
    }

    getAllParametersTxt(){
        return cy.get('table[class*="StudentDetails_prevStdMyCompTable"]>tr td:nth-child(4)')
    }



    //Tc 007
    getMyYearlyPerformanceTab(){
        return cy.get('//button[contains(.,"My Yearly Performance")]')
    }

    getSectionsList(){
        return cy.get('[role="listbox"] li').contains('A')
    }




}
module.exports = new TeacherReport();