process.env.NODE_ENV = 'test'

const app = require('../app');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request;

describe('app', function(){
  it('Should be an express app', function(){
    expect(app.EXPRESS_APP).to.be.true
  })
  it('Should render text', function(done){
    request(app)
    .get('/')
    .end((error, response) => {
      expect(error).to.be.null;
      expect(response).to.have.status(200);
      done();
    })
  })
  it('Should post a json object', function(done){
    request(app)
    .post('/submit-form')
    .end((error, response) => {
      expect(error).to.be.null;
      expect(response).to.be.json;
      done();
    })
  })
})
