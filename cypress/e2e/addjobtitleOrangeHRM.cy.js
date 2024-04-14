import logindata from "../fixtures/logincreds.json"
describe('Add Job Title', () => {
  it('Add Job Title', () => {
    cy.visit('/web/index.php/auth/login')

    cy.get("input[name='username']").type(Cypress.env("username"))

    cy.get("input[name='password']").type(Cypress.env("password"))

    cy.get("button[type='submit']", { timeout: 40000 }).click()
    //cy.contains('Time at Work').should ('be.visible')
    //cy.contains('Dashboard').should ('be.visible')
    //cy.url ().should("eq","/web/index.php/dashboard/index")
    //or
    //cy.url ().should("include","/dashboard/index")
    cy.contains('Admin').click()
    cy.contains('Job').click()
    cy.contains('Job Titles').click()
    cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
    let r = (Math.random() + 1).toString(36).substring(7);
    cy.log("random", r);
    cy.get('input[class="oxd-input oxd-input--active"]').last().type("SDET1" + r)
    cy.get('button[type="submit"]').click()
  })
})
