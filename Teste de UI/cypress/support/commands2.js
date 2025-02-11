/// <reference types="cypress"/>

export default{
    open_site(){
        cy.viewport(1366, 768)
        cy.visit("/")
    },

}

