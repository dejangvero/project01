///<reference types="Cypress" />
import CreateContractPage from '../pages/create-contract-page'

describe('Create contract suite', ()=>
{
    const createContractPage = new CreateContractPage()

    beforeEach(function(){
        cy.fixture('example').then(function (data) {
            this.data = data
        })
        cy.login("dejo991@gmail.com", "888Izolirka1000h*")
        createContractPage.getCreateContactButton().click()                     
    })       

    it('Create-Fixed-Rate-Contract', function(){
        createContractPage.getFixedRateContractCreateButton().click()    
        createContractPage.createFixedRateContract('Fixed-Rate-Contrac', 'Scope-test', 1000, 'GBP - British Pound', 'Week', 'Special-clause', 'United States', 'Colorado')      
    })

    it('Create-Pay-As-You-Go-Contract', function(){        
        createContractPage.getPayAsYouGoContractCreateButton().click()
        createContractPage.createPayAsYouGoContract('Pay-As-You-Go-Contract', 'Scope-test', 1000, 'GBP - British Pound', 'Week', 'Special-clause', 'United States', 'Colorado')

    })

    it('Create-Milestone-Contract', function(){        
        createContractPage.getMilestoneContractCreateButton().click()
        createContractPage.createMilestoneContract('Milestone-Contract', 'Scope-test', 1000, 'GBP - British Pound', 'Milestone-description', 'Special-clause', 'United States', 'Colorado')

    })
})