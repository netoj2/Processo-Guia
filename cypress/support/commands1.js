/// <reference types="cypress"/>

const user_data = require("../fixtures/data.json")
import { elements } from "./elements"

export default{
    // Abrir o site
    open_site(){
        cy.viewport(1366, 768)
        cy.visit("/")
    },

    logginOK(){
        cy.get(elements.fields.user_email).should("be.visible").click().type(user_data.email1)
        cy.get(elements.fields.user_password).should("be.visible").click().type(user_data.password_OK)
        cy.get(elements.buttons.sign_in).click()
        cy.get(elements.fields.alert_success).contains(elements.messagens.success_login)
    },

    emptyRequiredField(){
        cy.get(elements.fields.user_email).should("be.visible").click().clear()
        cy.get(elements.buttons.sign_in).click()
        cy.get(elements.fields.alert_failed).contains(elements.messagens.error_email)

        cy.get(elements.fields.user_email).should("be.visible").click().type(user_data.email1)
        cy.get(elements.fields.user_password).should("be.visible").click().clear()
        cy.get(elements.buttons.sign_in).click()
        cy.get(elements.fields.alert_failed).contains(elements.messagens.error_password_empty)
    },

    incompletePassword(){
        cy.get(elements.fields.user_email).should("be.visible").should("have.attr", "placeholder", "E-mail").click().type(user_data.email1)
        cy.get(elements.fields.confirm_email).should("be.visible").should("have.attr", "placeholder", "Confirmação de E-mail").click().type(user_data.email2)
        cy.get(elements.buttons.sign_in).click()
        cy.get(elements.fields.alert_failed).contains(elements.messagens.error_different_email)

    },

    differentEmail(){
        cy.get(elements.fields.confirm_email).should("be.visible").click().type(user_data.email1)
        cy.get(elements.fields.user_password).should("be.visible").click().type(user_data.password_OK)
        cy.get(elements.buttons.sign_in).click()
        cy.get(elements.fields.alert_success).contains(elements.messagens.success_login)
    }
}

