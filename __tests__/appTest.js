const supertest = require("supertest")
const app = require("../app")

describe("app", () => {
    let request = null
    let server = null
    
    before(done => {
        server = app.listen(done)
        request = supertest.agent(server)
    })
    
    it("returns analytics information for a rhythm resource", () => {
        return request
            .get("/v1/rhythms/x--x--x---x-x---")
            .expect("Content-Type", /json/)
            .expect(200, {
                rhythmLength: 16,
            })
    })

    after(done => {
        server.close(done)
    })
})
