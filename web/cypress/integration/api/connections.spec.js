/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Connections ednpoint', () => {
    it('GET- obter total de conexões realizadas', () => {
        cy.api({
            method: 'GET',
            url: `${Cypress.config().apiUrl}/connections`
        }).then((response) => {
            console.log(response)
            expect(response.status).to.eq(200)
            expect(response.duration).lessThan(10)
            expect(response.body)
                .to.have.property('total')
                .to.be.a('number')
                .greaterThan(5)
                .satisfy((totalValue) => { return totalValue >= 5 })
            expect(response.headers)
                .to.have.property('content-type')
                .an('string')
                .eq('application/json; charset=utf-8')
        })
    });
    it.only('POST - Cadastrar professor', () => {
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name": "Prof",
                "avatar": "https://t8j5n5j3.rocketcdn.me/wp-content/uploads/2020/01/super-herois-conheca-os-10-personagens-mais-populares.jpeg",
                "whatsapp": "14999999999",
                "bio": "teste",
                "subject": "Ciências",
                "cost": 150,
                "schedule": [
                    {
                        "week_day": 0,
                        "from": "09:00",
                        "to": "10:00"
                    }
                ]
            }
        }).then((response) => {
            cy.log('log', response.body)
            cy.log(response)
            expect(response.status)
                .eq(201)
            expect(response.statusText)
                .eq('Created')
                .an('string')
        })
    });
});