import loginPage from "./PageObjects/loginPageOrangeHRM.po"
import logindata from "../fixtures/logincreds.json"
describe('Add employee Functionality', () => {


  const Login = new loginPage()



  it('verify add employee-positive', () => {
    cy.visit('/web/index.php/auth/login')

    cy.xpath(Login.userNameInput()).type(logindata.username)

    cy.get(Login.passwordInput()).type(logindata.password)

    cy.get(Login.loginButton()).click()
    //cy.contains('Time at Work').should ('be.visible')
    //cy.contains('Dashboard').should ('be.visible')
    //cy.url ().should("eq","/web/index.php/dashboard/index")
    //or

 

  cy.contains('PIM').click()
  cy.contains('Add Employee').click()
  cy.get('input[name="firstName"]').type('Elizabeth')
  cy.get('input[name="lastName"]').type('Philip')
  cy.get('span[class="oxd-switch-input oxd-switch-input--active --label-right"]').click()
  cy.get('input[class="oxd-input oxd-input--active"]').first().type('ephilip')
  cy.get('input[type="password"]').first().type('abc')
  cy.get('input[type="password"]').last().type('abc')
  cy.get('button[type="submit"]').click()

})

  it('verify mandatory fields in add employee page', () => {
  cy.visit('web/index.php/auth/login')



  cy.xpath(Login.userNameInput()).type(Cypress.env('username'))
  cy.get(Login.passwordInput()).type(Cypress.env('password'))

  cy.get(Login.loginButton()).click()
  //cy.contains('Time at Work').should ('be.visible')
  //cy.contains('Dashboard').should ('be.visible')
  //cy.url ().should("eq","/web/index.php/dashboard/index")
  //or
  cy.url().should("include", "/dashboard/index", { timeout: 40000 })

  cy.contains('PIM').click()
  cy.contains('Add Employee').click()

  cy.get('button[type="submit"]').click()
  cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').first().should('be.visible')
  cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').last().should('be.visible')
})

it('delete employee', () => {
  cy.visit('/web/index.php/auth/login')

  cy.get("input[name='username']").type(logindata.username)

  cy.get("input[name='password']").type(logindata.password)

  cy.get("button[type='submit']", { timeout: 40000 }).click()
  cy.contains('PIM').click()
  cy.contains('Employee List').click()
  cy.get('i[class="oxd-icon bi-sort-alpha-down oxd-icon-button__icon oxd-table-header-sort-icon"]').click()
  cy.get('span[class="oxd-text oxd-text--span"]').first().click()
  for (let i = 1; i <= 5; i++) {
    cy.get('i[class="oxd-icon bi-trash"]').last().click()
    cy.get('button[class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]').click()
    cy.contains('successfully Deleted')
  }
})
})

