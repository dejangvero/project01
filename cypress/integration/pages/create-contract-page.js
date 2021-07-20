const dayjs = require('dayjs')

export default class ContractPage{

    getCreateContactButton(){
        return cy.get("div:nth-child(2)>a>li")
    }

    getFixedRateContractCreateButton(){
        return cy.get("a[href='/create/fixed']")
    }

    getPayAsYouGoContractCreateButton(){
        return cy.get("a[href='/create/pay-as-you-go']")
    }

    getMilestoneContractCreateButton(){
        return cy.get("a[href='/create/milestone']")
    }

    getContractNameInputField(){
        return cy.get("input[name='name']")
    }

    getScopeOfWorkTextField(){
        return cy.get("div.textarea-container")
    }

    getCalendarButton(){
        return cy.get("div[name='effectiveDate']")
    }

    getNextButton(){
        return cy.get("button.mb-7>div")
    }

    getRateInputField(){
        return cy.get("input[name='rate']")
    }

    getMilestoneAmountInputField(){
        return cy.get("input[data-qa='milestone-amount']")
    }

    getMilestoneDescriptionInputField(){
        return cy.get("input[data-qa='milestone-description']")
    }

    getMilestonepaymentDetailsSubmitButton(){
        return cy.get("button.w-100")
    }

    getCurrencySelectField(){
        return cy.get("div[data-qa='currency-select']>div:nth-child(2)")
    }

    getCycleSelectField(){
        return cy.get("div[data-qa='cycle-select']>div:nth-child(2)")
    }
    
    getCycleSelectmenu(){
        return cy.get('.select__menu')
    }
    
    getDefineRatesNextButton(){
        return cy.get("button.mt-9>div")
    }

    getSpecialClauseButton(){
        return cy.get("div[data-qa='special-clause-card']>div>div:nth-child(2)>button")
    }

    getSpecialClauseTextArea(){
        return cy.get("div[data-qa='special-clause-card']>div>div:nth-child(2)>div>div>div>textarea")
    }    

    getExtrasNextButton(){
        return cy.get("button.mt-7>div")
    }

    getConractorTaxResidenceSelectTrigger(){
        return cy.get('.select__indicator')
    }

    getContractorTaxResidanceSelectMenu(){
        return cy.get('.select__menu')
    }

    getSubmitContractButton(){
        return cy.get("button.mt-7>div")
    }

    submitGeneralInfoContract(contractName, scope){        
        this.getContractNameInputField().type(contractName)
        this.getScopeOfWorkTextField().type(scope)        
        const dayToPick = dayjs().subtract(1, 'day').format('DD')
        this.getCalendarButton().click()
        cy.contains(dayToPick).click()          
        this.getNextButton().click({multiple: true})
    }

    submitPaymentDetailsContract(rate, currency, cycle){
        this.getRateInputField().type(rate)        
        this.getCurrencySelectField().type(currency).type('{enter}')        
        this.getCycleSelectField().click()
        this.getCycleSelectmenu().contains(cycle).click()       
        this.getDefineRatesNextButton().click({multiple: true})       
    }
    submitPaymentDetailsMilestoneContract(amount, currency, description){
        this.getMilestoneAmountInputField().type(amount)
        this.getCurrencySelectField().type(currency).type('{enter}')
        this.getMilestoneDescriptionInputField().type(description)
        this.getMilestonepaymentDetailsSubmitButton().click({multiple: true})
    }

    submitDefineDatesContract(){
        this.getDefineRatesNextButton().click({multiple: true})
    }

    submitExtrasContract(specialClause){
        this.getSpecialClauseButton().click()
        this.getSpecialClauseTextArea().type(specialClause)
        this.getExtrasNextButton().click()
    }

    submitComplianceContract(country, province){
        this.getConractorTaxResidenceSelectTrigger().click()
        this.getContractorTaxResidanceSelectMenu().contains(country).click()
        this.getConractorTaxResidenceSelectTrigger().eq(1).click()
        this.getContractorTaxResidanceSelectMenu().contains(province).click()        
        this.getSubmitContractButton().click()  
    }

    createFixedRateContract(contractName, scope, rate, currency, cycle, specialClause, country, province){ 
        this.submitGeneralInfoContract(contractName, scope)
        this.submitPaymentDetailsContract(rate, currency, cycle)
        this.submitDefineDatesContract()
        this.submitExtrasContract(specialClause)
        this.submitComplianceContract(country, province)
    }

    createPayAsYouGoContract(contractName, scope, rate, currency, cycle, specialClause, country, province){ 
        this.submitGeneralInfoContract(contractName, scope)
        this.submitPaymentDetailsContract(rate, currency, cycle)
        this.submitDefineDatesContract()
        this.submitExtrasContract(specialClause)
        this.submitComplianceContract(country, province)
    }

    createMilestoneContract(contractName, scope, amount, currency, description, specialClause, country, province){ 
        this.submitGeneralInfoContract(contractName, scope)
        this.submitPaymentDetailsMilestoneContract(amount, currency, description)        
        this.submitExtrasContract(specialClause)
        this.submitComplianceContract(country, province)
    }
}