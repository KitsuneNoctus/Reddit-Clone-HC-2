const mocha = require('mocha')
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

const server = require('./server.js');

//establihes test server
chai.use(chaiHttp);

describe('the test routes', () => {
    //Test Case 1
    it('returns a 200 response', () => {
        chai.request(server)
            .get('/test')
            .end((err, res)=>{
                if(err) console.log(err)
                else{
                    console.log(res.statusCode)
                    expect(res.statusCode).to.be.a('number')
                    expect(res.statusCode).to.equal(200)
                    document()
                }
            })
    })

    //Test Case 2
    it('returns the value \"test complete/"', (done) => {
        chai.request(server)
            .get('/test')
            .end((err,res) => {
                if(err) console.log(err)
                else{
                    expect(res.text).to.be.a("string")
                    expect(res.text).to.equal("test complete")
                    done()
                }
            })
    })
})

describe("the post (as in the post model) controller tests", () => {
    it("finds a post within the mongo db", (done) => {
        chai.request(server)
            .get(/posts/find/yeet)
            .end((err, res) => {
                if(err) console.log(err)
                console.log(res.body.title)
                expect(res.body).to.be.a("array")
                expect(res.body[0].title).to.be.a("string")
                expect(res.body[0].title).to.equal("yeet")
                done(0)
            })
    })
})
