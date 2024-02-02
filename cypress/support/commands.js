// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add('createUser',(data) =>{
    cy.request({
        url: `/users`,
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': Cypress.env("token")
        },
    })
})

Cypress.Commands.add('getUser', (id) => {
    cy.request({
        url: `/users/${id}`,
        method: "GET",
        headers: {
            "Accept": "application/json",
            'Authorization': Cypress.env("token")
        }

    })
})
Cypress.Commands.add('deleteUser', (id) =>
cy.request({
    url: `/users/${id}`,
    method: "DELETE",
    headers: {
        "Accept": "application / json",
        "Authorization": Cypress.env("token")}

    })
)
Cypress.Commands.add('prepareData', (randomName,randomEmail) => {
    cy.fixture("example.json").then(data => {
        data.name = randomName;
        data.email = randomEmail;
    }).as ("data")
})



//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })*/
