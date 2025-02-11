/// <reference types="cypress" />
import { default as commands, default as open_site } from "../support/commands1.js";

describe('Teste de visita ao Google', () => {

    beforeEach ("Abrir o site", ()=> {
        open_site.open_site()
    }),
    it('Preencher o formulário corretamente e enviar', () => {
        commands.logginOK()
    });

    it('Deixar campos obrigatórios vazio', () => {
        commands.emptyRequiredField()
    });

    it('Deixar uma senha fraca', () => {
        commands.incompletePassword()
    });

    it('Digitar e-mails diferentes nos campos de "E-mail" e "Confirmação de E-mail"', () => {
        commands.differentEmail()
    });
});