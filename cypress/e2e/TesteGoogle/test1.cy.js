// describe("Site Google.com", () => {
    
//     // Testul numarul 1
//     it("test 1", () => {
//         cy.visit('https://google.com');
//         cy.get('#L2AGLb').click();
//         cy.get('.gLFyf').type('vlog de it').type('{enter}');

//         cy.get('#result-stats').should('exist');
//     })

// })

describe("Site Saucedemo.com", () => {
    
    // Login test incorect password
    it("incorect password", () => {
        cy.visit('https://saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user').type('{enter}');
        cy.get('#password').type('s').type('{enter}');

        // cy.get('#result-stats').should('exist');
    })

})