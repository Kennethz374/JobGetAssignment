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
      cy.get('input[name="job"]').type('developer')
      cy.get('input[name="city"]').type('vancouver')
      cy.get('button').contains('Search').click()
    })
    cy.wait(500)
    cy.get('p').contains('Java Application Developer, Master Summary: The successful candidate must be knowledgeable of and experienced with web and desktop application software design and development environments')

    cy.get('div[role="navigation"]').within(()=>{
      cy.get('a.item').contains('2').click()
    })
    cy.wait(500)
    cy.get('div').contains('Ruby on Rails Software Engineer Summary: An experienced Software Engineer with a proven track record of implementing and maintaining cloud-based systems in Ruby on Rails within an AWS environment, as')

  })

  it('make sure when filter is select the components re-render a different set of data', function() {
    cy.get('form').within(() => {
      cy.get('input[name="job"]').type('developer')
      cy.get('input[name="city"]').type('vancouver')
      cy.get('button').contains('Search').click()
    })
    cy.wait(500)
    cy.get('div').contains('Any').click()
    cy.get('li[data-value="1"]').click()
    cy.wait(1000)
    cy.get('div').contains('yesterday')

    cy.get('form').within(() => {
      cy.get('input[name="job"]').type('developer')
      cy.get('input[name="city"]').type('vancouver')
      cy.get('button').contains('Search').click()
    })
    cy.wait(500)
    cy.get('div').contains('Default').click()
    cy.get('li[data-value="5"]').click()
    cy.wait(1000)
    cy.get('p').contains('Backend Software Engineer Direct hire Portland, OR Experience & Skills We are a fast-paced team, working together to build solutions in a financial environment using best practices. You must be')
  })
})