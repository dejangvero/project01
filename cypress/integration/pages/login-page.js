export default class Loginpage{

    getEmailInputField(){
        return cy.get("input[name='email']")
    }

    getPasswordInputField(){
        return cy.get("input[name='password']")
    }

    getLoginButton(){
        return cy.get("button.mt-10")
    }
}