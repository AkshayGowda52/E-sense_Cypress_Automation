const adminReportPage = require('../../support/pageObjects/LMS/adminReportPage')
const ReportDashboardPage = require('../../support/pageObjects/LMS/adminReportPage')
const dashboard = require("../../support/pageObjects/LMS/adminDashboardPage")

///<reference types="cypress"/>
it('E2E_01_Remainder_To Validate that the user is able to create reminder in calender and display the popu',function(){

    cy.visit('https://malco.staging.topschool.co.in/')
    cy.viewport(1920, 1080)

    cy.fixture('LMS/Credentials').then((validTeacherLoginData) => {
        cy.teacherLogin(validTeacherLoginData.teacherUsername2, validTeacherLoginData.teacherPassword)
      })
  
      ReportDashboardPage.getAdminReportsSideMenubarReportTab().click({force:true})
      ReportDashboardPage.getAdminReportsStudentGradebookTab().should('be.visible', { timeout: 2000 }).click({ force: true })

      cy.get('tr[class="MuiTableRow-root MuiTableRow-hover css-1gqug66"] td:nth-child(4)').each(($element, index) => {
        if ($element.text() == 'kumar') {
         ReportDashboardPage. getArrowForwordIcon().eq(index).click({force:true})
        }
      })

      cy.xpath('//button[contains(.,"Preview & Print")]').click({force:true}).wait(2000)
      cy.xpath('//h6[contains(.,"Report with Grading Scale")]').click({force:true}).wait(5000)

      cy.shadowContains('Print').then(($shadowRoot) => {
        // Select the shadow element within the shadow root
        cy.shadowContains('Print', { withinSubject: $shadowRoot }).then(($shadowElement) => {
          // Wrap the shadow element in a new window for printing
          const win = $shadowElement[0].ownerDocument.defaultView
          win.should('be.visible')
  
        })
    })

})