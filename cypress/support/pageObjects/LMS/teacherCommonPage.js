class teacherCommonPage{

getBody(){
    return cy.get('body')
}
getTeacherDashBoardPage(){
    return cy.xpath("//p[text()='Your Dashboard']")
}
getTeacherSideNavbar(){
    return cy.get('div[class="side-nav-bar "]')
}
getTeacherMyProfileTab(){
    return cy.get('div').contains('My Profile')
    
}
getTeacherMyCalenderTab(){
    return cy.xpath("//div[text()='My Calendar']")
}
getTeacherMyClassesTab(){
    return cy.xpath("//div[contains(text(),'My Classes')]")
}

}
module.exports=new teacherCommonPage()






//Pavani