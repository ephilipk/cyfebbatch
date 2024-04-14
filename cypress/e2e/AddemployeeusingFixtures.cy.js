import login from "./PageObjects/loginPageOrangeHRM.po";
import logindata from "../fixtures/logincreds.json";

const addemployeedetails = [

    {
        "name": "Orangehrmuser/Orangehrmuser1",
        "context": "Jill"
    },

    {
        "name": "Orangehrmuser/Orangehrmuser2",
        "context": "jack"
    },

    {
        "name": "Orangehrmuser/Orangehrmuser3",
        "context": "Robert"
    },
    {
        "name": "Orangehrmuser/Orangehrmuser4",
        "context": "Singh"
    },
    {
        "name": "Orangehrmuser/Orangehrmuser5",
        "context": "Peter"
    }
]
describe('Add employee Functionality', function() {
    //const Login = new loginPage()
    addemployeedetails.forEach((userdata) => {
        describe(userdata.context, () => {

            before(function () {

                cy.fixture(userdata.name).then(function (data) {
                    this.data = data;

                })
            })



            it('addemployeeusingfixtures', function () {

                cy.visit('/web/index.php/auth/login')
                cy.xpath(login.userNameInput()).type(logindata.username)
                cy.get(login.passwordInput()).type(logindata.password)
                cy.get(login.loginButton()).click()
                cy.contains('PIM').click()
                cy.contains('Add Employee').click()
                cy.get('input[name="firstName"]').type(this.data.firstName)
                cy.get('input[name="middleName"]').type(this.data.lastName)
                cy.get('input[name="lastName"]').type(this.data.lastName)
                cy.get('.oxd-input').eq(4).clear().type(this.data.EmployeeID)

            })
        })

    })
})
