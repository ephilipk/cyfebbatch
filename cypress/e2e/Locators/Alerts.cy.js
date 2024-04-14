describe('Automatiom -working with Alerts', () => {
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    })

    it('Cypress Test case-Simple Alert', () => {

        cy.contains('Click for JS Alert').click();

        cy.on('window:alert', (alert) => {
            return true
        })


    })

    it('Cypress Test case -test Confirm Alert-OK', () => {
        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm', () => {
            return false;
        })
    })

    it('Cypress test case- test priomptAlert-Cancel', () => {
        cy.window().then((Firdose) => {
            cy.stub(Firdose, 'prompt').callsFake(() => null)//instead of Firdose u can give $win
            //multiplevalues
            //cy.stub($win,'prompt').returns("jsdfjs","hgshgf");
            cy.contains('Click for JS Prompt').click();

        })
    })
})
