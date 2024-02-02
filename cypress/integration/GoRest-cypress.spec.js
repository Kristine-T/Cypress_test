const { faker } = require('@faker-js/faker');

let randomName = faker.internet.userName();
let randomEmail = faker.internet.email();

describe('template spec', () => {

    before(() => {
        cy.prepareData(randomName, randomEmail)
    })

    it('API tests', () => {


//CREATE USER



        cy.createUser('this.data').then(response => {
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eq(randomName);
            expect(response.body.email).to.eq(randomEmail);

            const id = response.body.id;

            cy.getUser(id).then(response => {
                expect(response.body.id).to.eq(id);
                expect(response.body.name).to.eq(randomName);
                expect(response.body.email).to.eq(randomEmail);


                cy.deleteUser(id).then(response => {
                    expect(response.status).to.eq(204)
                })


            })
        })

    })
})
