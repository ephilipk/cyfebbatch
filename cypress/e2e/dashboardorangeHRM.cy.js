import loginPage from "./PageObjects/loginPage.po"
import logindata from "../fixtures/logincreds.json"
describe('DashboardPage', () => {

    const menuitems = {
        menu1: "Admin",
        menu2: "PIM",
        menu3: "Time",
        menu4: "Leave",
        menu5: "Recruitment",
        menu6: "My Info",
        menu7: "Dashboard",
        menu8:"Performance",
        menu9: "Directory",
        menu10: "Maintenance",
        menu11:"Claim",
        menu12:"Buzz",



    }
    const Login = new loginPage()


    const arrayitems = ["Admin", "PIM", "Time", "Leave", "Recruitment", "My Info","Dashboard","Directory","Maintenance","Claim","Buzz","Performance"]
    it('verify add employee-positive', () => {
        cy.visit('/web/index.php/auth/login')

        cy.get(Login.userNameInput()).type(logindata.username)

        cy.get(Login.passwordInput()).type(logindata.password)

        cy.get(Login.loginButton()).click()
        //cy.contains('Time at Work').should ('be.visible')
        //cy.contains('Dashboard').should ('be.visible')
        //cy.url ().should("eq","/web/index.php/dashboard/index")
        //or
        cy.url().should("include", "/dashboard/index")
        for (let item of arrayitems) {
            cy.contains(item).should('be.visible')
        

        




        }
    

    })
})
