
import logindata from"../fixtures/logincreds.json"
describe('Verify Login functionality', () => {//tets suite

    it('Verify login with valid creds', () => {//test case

      cy.visit('/web/index.php/auth/login')
      
        cy.get("input[name='username']").type(logindata.username)
      
        cy.get("input[name='password']").type(logindata.password)

        cy.get("button[type='submit']").click()
        cy.contains('Time at Work').should ('be.visible')
        cy.contains('Dashboard').should ('be.visible')
        //cy.url ().should("eq","/web/index.php/dashboard/index")
        //or
        cy.url ().should("include","/dashboard/index")
         
    })
    it('Verify login with valid username and invalid password', () => {//test case
        cy.visit('/web/index.php/auth/login')
      
        cy.get("input[name='username']").type(logindata.username)
      
        cy.get("input[name='password']").type('admin1234')

        cy.get("button[type='submit']").click()
        cy.contains('Invalid credentials').should('be.visible')
    })
    it('Verify login with invalid username and valid password', () => {//test case
        cy.visit('/web/index.php/auth/login')
      
        cy.get("input[name='username']").type('Admin11')
      
        cy.get("input[name='password']").type(logindata.password)

        cy.get("button[type='submit']").click()
        cy.contains('Invalid credentials').should('be.visible')
    })
    it('Verify login with invalid username and invalid password', () => {//test case
        cy.visit('/web/index.php/auth/login')
      
        cy.get("input[name='username']").type('Admin11')
      
        cy.get("input[name='password']").type('admin1234')

        cy.get("button[type='submit']").click()
        cy.contains('Invalid credentials').should('be.visible')
    })
  })