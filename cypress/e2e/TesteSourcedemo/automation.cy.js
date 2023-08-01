// describe("Site Saucedemo.com", () => {
    
//     // Login test incorect password
//     it("incorect password", () => {
//         cy.visit('https://www.saucedemo.com/v1/index.html');
//         cy.get('[data-test="username"]').type('standard_user').type('{enter}');
//         cy.get('[data-test="password"]').type('s').type('{enter}');

//         cy.get('[data-test="error"]').should('exist');
//     })

// })

// describe("Site Saucedemo.com", () => {
    
//     // Login test with correct credentials
//     it("login", () => {
//         cy.visit('https://www.saucedemo.com/v1/index.html');
//         cy.get('[data-test="username"]').type('standard_user').type('{enter}');
//         cy.get('[data-test="password"]').type('secret_sauce').type('{enter}');

//         cy.get('[data-prefix="fas"]').should('exist');
//     })

// })

// describe("Site Saucedemo.com", () => {
    
//     // Logout 
//     it("logout", () => {
//         cy.visit('https://www.saucedemo.com/v1/index.html');
//         cy.get('[data-test="username"]').type('standard_user').type('{enter}');
//         cy.get('[data-test="password"]').type('secret_sauce').type('{enter}');
//         cy.get('.bm-burger-button > button').click();
//         cy.get('#logout_sidebar_link').click();
        

//         cy.get('#login-button').should('exist');
//     })

// })

// describe("Site Saucedemo.com", () => {
    
//     // Meniu can be open
//     it("Meniu", () => {
//         cy.visit('https://www.saucedemo.com/v1/index.html');
//         cy.get('[data-test="username"]').type('standard_user').type('{enter}');
//         cy.get('[data-test="password"]').type('secret_sauce').type('{enter}');
//         cy.get('.bm-burger-button > button').click();

//         cy.get('#logout_sidebar_link').should('exist');
        
//     })

// })

// describe("Site Saucedemo.com", () => {
    
//     // Meniu can be close
//     it("Meniu", () => {
//         cy.visit('https://www.saucedemo.com/v1/index.html');
//         cy.get('[data-test="username"]').type('standard_user').type('{enter}');
//         cy.get('[data-test="password"]').type('secret_sauce').type('{enter}');
//         cy.get('.bm-burger-button > button').click();
//         cy.get('.bm-cross-button > button').click();

//         cy.get('.bm-burger-button > button').should('exist');
        
//     })

// })

// describe("Site Saucedemo.com", () => {
    
//     // The product added in the cart
//     it("The product is in the cart", () => {
//         cy.visit('https://www.saucedemo.com/v1/index.html');
//         cy.get('[data-test="username"]').type('standard_user').type('{enter}');
//         cy.get('[data-test="password"]').type('secret_sauce').type('{enter}');
//         cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
      
//         cy.get('.fa-layers-counter').should('exist');
        
//     })

// })

// describe("Site Saucedemo.com", () => {
    
//     // The product is deleted
//     it("Delete the product from cart", () => {
//         cy.visit('https://www.saucedemo.com/v1/index.html');
//         cy.get('[data-test="username"]').type('standard_user').type('{enter}');
//         cy.get('[data-test="password"]').type('secret_sauce').type('{enter}');
//         cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
//         cy.get('.fa-layers-counter').click();
//         cy.get('.item_pricebar > .btn_secondary').click();
      
//         cy.get('.cart_item').should('not.exist');
        
//     })

// })

// describe("Site Saucedemo.com", () => {
    
//     // Shopping
//     it("Shopping", () => {
//         cy.visit('https://www.saucedemo.com/v1/index.html');
//         cy.get('[data-test="username"]').type('standard_user').type('{enter}');
//         cy.get('[data-test="password"]').type('secret_sauce').type('{enter}');
//         cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
//         cy.get('.fa-layers-counter').click();
//         cy.get('.btn_action').click();
//         cy.get('[data-test="firstName"]').type('Melania').type('{enter}');
//         cy.get('[data-test="lastName"]').type('Miron').type('{enter}');
//         cy.get('[data-test="postalCode"]').type('000000').type('{enter}');
//         cy.get('.btn_action').click();

//         cy.get('.complete-text').should('exist');


//     })

// })

// describe("Site Saucedemo.com", () => {
    
//     // Check the detailed list 
//     it("Product's detail list", () => {
//         cy.visit('https://www.saucedemo.com/v1/index.html');
//         cy.get('[data-test="username"]').type('standard_user').type('{enter}');
//         cy.get('[data-test="password"]').type('secret_sauce').type('{enter}');
//         cy.get('#item_4_img_link > .inventory_item_img').click();

//         cy.get('.inventory_details_container').should('exist');


//     })

// })


