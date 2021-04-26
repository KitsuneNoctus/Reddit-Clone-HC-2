const mocha = require("mocha")
const chai = require("chai")
const expect = chai.expect

const celsiusToFahrenheit = (celsius) =>{
    return celsius * 9 / 5 + 32
}

it("Should return a number", function(){
    const num = 50, f = celsiusToFahrenheit(num)

    expect(num).to.be.not.a("null")
    expect(f).to.be.a("number")
    expect(f).to.equal(num * 9 / 5 +32)
})


// Describe is like a container for our tests.
// describe('Hello World Route Test', () => {

//     // Test Case 1
//     it('Returns a 200 Response', (done) => {
//         chai.request(app)
//             .get('/')
//             .end((error, response) => {
//                 if (error) done(error);
//                 expect(response).to.have.status(200);
//                 done();
//             });
//     });

//     // Test Case 2
//     it('Returns a "Hello World" message', (done) => {
//         chai.request(app)
//             .get('/')
//             .end((error, response) => {
//                 if (error) done(error);
//                 expect(response.body).to.be.deep.equal({
//                     message: 'Hello, world!'
//                 });
//                 done();
//             });
//     });
// });