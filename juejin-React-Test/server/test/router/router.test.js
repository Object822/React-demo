let supertest = require('supertest')
let app = require('../../app');
//开启服务器
let request = supertest(app);
let chai = require('chai');
let expect = chai.expect;

describe('router',function(){
  it('index should render',function(done){
    request.get('/').end(function(err,res){
      expect(res.text).to.be.an('string')
      done()
    })
  })

  it('users should string',function(done){
    request.get('/users').end(function(err,res){
      expect(res.text).to.be.equal('respond with a resource')
      done()
    })
  })
})