describe('Working with iframes',() =>{
    

it("select radio button",()=>{
    cy.visit("https://jqueryui.com/checkboxradio/")
    cy.get('iframe[class="demo-frame"]').then(($iframe) => {
        let checkbox1 = $iframe.contents().find('label[for="checkbox-1"]')
        cy.wrap(checkbox1).click()

    })

})
})