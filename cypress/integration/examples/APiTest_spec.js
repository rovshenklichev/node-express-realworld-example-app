describe('HTTP Example',function () {
    it('GET method', function () {
        cy.request('http://localhost:4100/favicon.ico')
            .then((res)=>{
                expect(res).to.have.property('status',200);
                cy.request('http://localhost:3000/api/profiles/rovshenklichev2')
                    .then((res)=> {
                        expect(res).to.have.property('status', 200);
                    });
            });
    });
});