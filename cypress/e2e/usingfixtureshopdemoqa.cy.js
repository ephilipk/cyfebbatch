
const availablefixtures = [
    {
        "name": "registermodule/register1",
        "context": "Elizabeth"
    },
    {
        "name": "registermodule/register2",
        "context": "Raju"
    },
    {
        "name": "registermodule/register3",
        "context": "Jack"
    },
]
describe('using fixtures',function ()  {
    availablefixtures.forEach((register) => {
        describe(register.context, () => {




            //before( () => {
                before('register',function () {
                //u give the relative path of the data with a forward slash-cypress\fixtures\registermodule\register.json take out the cypress,fixtures and json
                cy.fixture(register.name).then((data) => {
                    this.data = data;
                })

            })


            it('register details for shop demoqa', function ()  {
                cy.visit('https://shop.demoqa.com/my-account/')
                cy.get('#reg_username').type(this.data.username)
                cy.get('#reg_email').type(this.data.emailaddress)
                cy.get('#reg_password').type(this.data.weakpassword)
                cy.get('.woocommerce-Button').should("be.disabled")
                cy.get('#reg_password').clear().type(this.data.strongpassword)
                cy.wait(10000)
                cy.get('.woocommerce-Button').click()
                cy.get('#username').should("have.value", this.data.username)
            })

        })
    })
})