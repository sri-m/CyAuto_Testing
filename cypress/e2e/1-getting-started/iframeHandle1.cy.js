/// <reference types="cypress" />


describe('testing', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })

  it.skip('first website url', {baseUrl: 'https://www.google.com'}, function()   {
    cy.visit('/');
    cy.title('Google');
    
  })
    
  it('maildrop url', {baseUrl: 'https://maildrop.cc/inbox/?mailbox=test18usrx8944'}, function()  {
    cy.visit('/');
    cy.get('.order-2').click();
    /*
    cy.wait(4000);
   
    cy.get('div[class="bg-white p-4 px-8 text-stone-900 dark:bg-stone-200 md:rounded-t-lg"] div[class="truncate font-bold"]').should('have.text', '"Organon EEMEA SIT" <organoncommercial@sfmcdev.organon.com>')
    cy.get('div[class="bg-white p-4 px-8 text-stone-900 dark:bg-stone-200 md:rounded-t-lg"] div[class="truncate font-bold"]').contains('"Organon EEMEA SIT" <organoncommercial@sfmcdev.organon.com>')
    cy.get('.p-4 > :nth-child(3)').should('have.text', 'Descubre todo lo que tenemos preparado en Organon para ti.')
    cy.get('.p-4 > :nth-child(3)').contains('Descubre todo lo que tenemos preparado en Organon para ti.')
    */
     
  }) 
})
   

 