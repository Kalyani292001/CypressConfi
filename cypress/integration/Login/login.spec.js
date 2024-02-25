///<reference types="cypress"/>

describe('verify the contact us page',()=>{
    it('verify the title of page',()=>{

        cy.visit('Contact-Us/contactus.html')
        cy.get('[name="contactme"]').should('be.visible')

    })

    it('verify contact us form using confi',()=>{
        let url=Cypress.config().baseUrl
        cy.log()
        cy.visit(url)
    })
})