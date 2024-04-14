import logindata from "../fixtures/logincreds.json"
describe('Delete Job Title', () => {
  it('Delete Job Title', () => {
    cy.visit('/web/index.php/auth/login')

    cy.get("input[name='username']").type(logindata.username)

    cy.get("input[name='password']").type(logindata.password)

    cy.get("button[type='submit']", { timeout: 40000 }).click()
    //cy.contains('Time at Work').should ('be.visible')
    //cy.contains('Dashboard').should ('be.visible')
    //cy.url ().should("eq","/web/index.php/dashboard/index")
    //or
    //cy.url ().should("include","/dashboard/index")
    cy.contains('Admin').click()
    cy.contains('Job').click()
    cy.contains('Job Titles').click()
    for(let i=1; i<=10; i++){
    cy.get ('i[class="oxd-icon bi-trash"]').first().click()
    cy.get('button[class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]').click()
    }
})
})