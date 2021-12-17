/// <reference types="cypress" />

import React from 'react'

import Textarea from '../../src/components/Textarea'
import { mount } from 'cypress-react-unit-test'
import { BrowserRouter as Router } from 'react-router-dom'

context('Textarea component', () => {
    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '/__root/src/components/Textarea/styles.css'
    it('Textarea deve ser renderizado com sucesso', () => {
        const Id = 'dataid-01'
        const title = 'Agilizei bootcamp'
        const values = 'Estes são os proffys disponíveis'
        mount(
            <Router>
                <Textarea
                    name={Id}
                    label={title}
                    value={values}
                    onChange={(e) => { setBio(e.target.value) }}
                />
            </Router>
        ),
        {
            stylesheets: [baseCss, indexCss]
        }
        cy.get('label').should('have.text', title)
        cy.get('#dataid-01').should('have.text', values)
    });
});