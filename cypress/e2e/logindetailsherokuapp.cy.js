describe('Verify Login functionality', () => {

    it('Verify login with valid creds', () => {

      cy.visit('https://the-internet.herokuapp.com/login')
      
        cy.get("input[name='username']").type('tomsmith')
      
        cy.get("input[name='password']").type('SuperSecretPassword!')

        cy.get('i[class="fa fa-2x fa-sign-in"]').click()
        cy.contains('You logged into a secure area!').should ('be.visible')
                cy.url ().should("eq","https://the-internet.herokuapp.com/secure")
        //or
        cy.url ().should("include","/secure")
         
    })
    it('Verify login with valid username and invalid password', () => {

        cy.visit('https://the-internet.herokuapp.com/login')
        
          cy.get("input[name='username']").type('tomsmith')
        
          cy.get("input[name='password']").type('SuperSecretPassword!123')
  
         cy.get('div[id="flash-messages"]').should('be.visible')
         //cy.contains('Your password is invalid!').should('be.visible')
           
      })

      it('Verify login with invalid username and valid password', () => {

        cy.visit('https://the-internet.herokuapp.com/login')
        
          cy.get("input[name='username']").type('tomsmith123')
        
          cy.get("input[name='password']").type('SuperSecretPassword!')
  
         cy.get('div[id="flash-messages"]').should('be.visible')
         //cy.contains('Your username is invalid!').should('be.visible')
           
      })
      it('Verify login with invalid username and invalid password', () => {

        cy.visit('https://the-internet.herokuapp.com/login')
        
          cy.get("input[name='username']").type('tomsmith123')
        
          cy.get("input[name='password']").type('SuperSecretPassword!123')
  
         cy.get('div[id="flash-messages"]').should('be.visible')
})

})