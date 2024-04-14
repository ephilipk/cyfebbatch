describe('Automation -Working with Tabs in webpage', () => {
    it("Cypress test Page-Understanding Tabs in webpage", () => {

        Cypress.on("uncaught:eexception", (err, runnable) => {

            return false;

       
    })
    
        cy.visit('https://www.cypress.io/')
        cy.wait(5000)
        cy.contains('Installing Cypress').invoke("removeAttr", "target").click({ force: true })//remove the target attribute when there are same windows
        cy.wait(5000)
        cy.reload()
        cy.url().should('include', "https://docs.cypress.io/guides/getting-started/installing-cypress")
    })

})


