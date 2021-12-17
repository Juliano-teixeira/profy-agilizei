/// <reference types="cypress" />

const larguras = [1200, 1090]

larguras.forEach(largura => {
    describe(`Landing page - ${largura}px`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(largura, 900)
            cy.log('Largura: ', largura)
        })

        it('Navegar para o cadastro de aulas', () => {
            cy.get("a[href='/give-classes']").click()
            cy.url().should('contain', 'give-classes')
            
        });
        it('Navegar para pesquisa de professores', () => {
            cy.get("a[href='/study']").click()
            cy.url().should('contain', 'study')
        });
    });
})