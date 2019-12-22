import { exportAllDeclaration } from "@babel/types";

describe('End to End Funtionality test', function() {
  it('Able to load components', function() {
    cy.visit('http://localhost:3002/')
    cy.contains('Apply Job')
    cy.get('form').contains('Jobs')
    cy.get('form').contains('City')
    cy.get('div').contains('Default')
    cy.get('div').contains('Any')
  })

  it('Able to enter text to input field and return related data when Search button is clicked', function() {
    cy.get('form').within(() => {
      cy.get('input[name="job"]').type('Developer')
      cy.get('input[name="city"]').type('vancouver')
      cy.get('button').contains('Search').click()
    })
    cy.get('div').contains('Developer')

    cy.get('form').within(() => {
      cy.get('input[name="job"]').type('assembler')
      cy.get('input[name="city"]').type('boston')
      cy.get('button').contains('Search').click()
    })
    cy.get('div').contains('Assembler')
  })

  it('it should return a no result message when no jobs match the critiria', function() {
    cy.get('form').within(() => {
      cy.get('input[name="job"]').type('123123123')
      cy.get('input[name="city"]').type('123123123')
      cy.get('button').contains('Search').click()
    })
    cy.contains('Sorry! No Result Matches')
  })

  it('pagination works when user click another page', function () {
    cy.get('form').within(() => {
      cy.get('input[name="job"]').type('assembler')
      cy.get('input[name="city"]').type('boston')
      cy.get('button').contains('Search').click()
    })
    cy.wait(500)
    cy.get('p').contains('Connexion strives to be the unrivaled staffing solution for both job seekers and hiring organizations by expertly connecting talent with opportunity. We build world class teams for our customers, and')

    cy.get('div[role="navigation"]').within(()=>{
      cy.get('a.item').contains('2').click()
    })
    cy.wait(500)
    cy.get('div').contains('Description: PRIMARY RESPONSIBILITY: • Performs electronic, mechanical or electro-mechanical assembly operations for semi-finished and finished assemblies. • Follows manufacturing methods and')

  })

  it('make sure when filter is select the components re-render a different set of data', function() {
    cy.get('form').within(() => {
      cy.get('input[name="job"]').type('assembler')
      cy.get('input[name="city"]').type('boston')
      cy.get('button').contains('Search').click()
    })
    cy.wait(500)
    cy.get('div').contains('Any').click()
    cy.get('li[data-value="1"]').click()
    cy.wait(1000)
    cy.get('p').contains('to assemble a plan and execute on the details Experience with protocol, ICF, CRF, CSR development and review Proficient with MS Office Suite (Excel, Word and PowerPoint) and MS Project Ability to')

    cy.get('form').within(() => {
      cy.get('input[name="job"]').type('assembler')
      cy.get('input[name="city"]').type('boston')
      cy.get('button').contains('Search').click()
    })
    cy.wait(500)
    cy.get('div').contains('Default').click()
    cy.get('li[data-value="5"]').click()
    cy.get('p').contains('Piaggio Fast Forward (PFF) is hiring Assemblers to join our new team responsible for the assembly of our first product, gita. As an early member of the team, you will assist in design, test, and')
  })
})