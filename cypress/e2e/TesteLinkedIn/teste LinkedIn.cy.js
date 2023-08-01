describe ('On Linkedin', ()=> {

    it('I can login', () => {
        cy.visit('https://linkedin.com');

        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('melania23m@yahoo.com');
        cy.get('#password').type('********');
        cy.get('.btn__primary--large').click();

        cy.get('#ember15').should('exist');
        
    })
})