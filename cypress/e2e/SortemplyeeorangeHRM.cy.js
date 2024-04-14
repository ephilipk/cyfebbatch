import logindata from"../fixtures/logincreds.json"
describe(' Sort Functionality', () => {

  const menuitems = {
    menu1 : "Admin",
    menu2:"PIM",
    menu3:"Time",
    menu4:"Leave",
    menu5: "Recruitment",
    menu6:"My Info"

  }
  const arrayitems = [ "Admin",  "PIM", "Time","Leave",  "Recruitment",  "My Info"]
  it('sort employee using array', () => {
    cy.visit('/web/index.php/auth/login')

    cy.get("input[name='username']").type(logindata.username)
      
    cy.get("input[name='password']").type(logindata.password)

    cy.get("button[type='submit']",{timeout:40000}).click()
    //cy.contains('Time at Work').should ('be.visible')
    //cy.contains('Dashboard').should ('be.visible')
    //cy.url ().should("eq","/web/index.php/dashboard/index")
    //or
    cy.url ().should("include","/dashboard/index")
    for (let item of arrayitems){
      cy.contains(item).should('be.visible')
    }

    cy.contains('PIM').click()
    cy.contains('Employee List').click()
    arr1 = []
    function lastNameSort(a,b) {
      return a.split(" ").pop()[0] > b.split(" ").pop()[0]
  };
  names.sort(lastNameSort);


})
})