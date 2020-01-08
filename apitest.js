/* global describe, it */
let chai = require('chai')
let chaiHttp = require('chai-http')
let expect = require('chai').expect;
chai.use(chaiHttp)
let server = require('./app')

describe('/POST message', () => {
	it('it should POST a message', (done) => {
		chai.request(server)
			.post('/api/users/login')
			.type('form')
			.send({
				email: 'felix',
				password: '123456'
			})
			.end((err, res) => {
				expect(res).to.have.status(200)
				expect(res.body).to.be.a('object')
				done()
			})
	})
})

describe('/GET message', () => {
	it('it should GET a message', (done) => {
		chai.request(server)
			.get('/api/weathers')
			.set('Authorization', 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlbGl4IiwiaWQiOiI1ZTE0NTRmZGZhNGI4NDRiYzRkMGFiZTkiLCJleHAiOjE1ODM1NzQ5MDksImlhdCI6MTU3ODM5MDkwOX0.lUK9CWDFEPtkv4KSCMEQSOBhr9VvnIGo83COjFic3aw')
			.end((err, res) => {
				expect(res).to.have.status(200)
				done()
			})
	})
})
