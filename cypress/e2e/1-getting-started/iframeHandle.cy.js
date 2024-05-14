/// <reference types="cypress" />


describe('testing', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
})

  it('iframe validations', () => {
    cy.visit('https://maildrop.cc/inbox/?mailbox=test18usrx8944');
    cy.wait(4000);
    var my_name = 'srinivas'
    //cy.get('div[class="bg-white p-4 px-8 text-stone-900 dark:bg-stone-200 md:rounded-t-lg"] div[class="truncate font-bold"]').should('have.text', '"Organon EEMEA SIT" <organoncommercial@sfmcdev.organon.com>')
    //cy.get('div[class="bg-white p-4 px-8 text-stone-900 dark:bg-stone-200 md:rounded-t-lg"] div[class="truncate font-bold"]').contains('"Organon EEMEA SIT" <organoncommercial@sfmcdev.organon.com>')
    //cy.get('.p-4 > :nth-child(3)').should('have.text', 'Descubre todo lo que tenemos preparado en Organon para ti.')
    //cy.get('.p-4 > :nth-child(3)').contains('Descubre todo lo que tenemos preparado en Organon para ti.')
    //cy.compareSnapshot('home-page', 0.01)
    //cy.get('div[class="mb-16 w-full bg-white p-8 dark:bg-stone-200 md:rounded-b-lg"]').contains('BIENVENIDOS')
    //cy.compareSnapshot('/');
    cy.log(my_name);
    //console.log(my_name);
    console.log(`my full name is ${my_name}`);
  })

})
