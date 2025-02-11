/// <reference types="cypress"/>

const user_data = require("../fixtures/data.json")

export default{
    // Abrir o site
    open_site(){
        cy.viewport(1366, 768)
        cy.visit("/")
    },

}

