const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); 
const mongoose = require('mongoose');

chai.use(chaiHttp);
const expect = chai.expect;

before((done) => {
  mongoose.connect('your-test-database-connection-string', { useNewUrlParser: true }, () => {
    done();
  });
});


after((done) => {
  mongoose.connection.close(() => {
    done();
  });
});

let authToken;

describe('To-Do Module', () => {
  before((done) => {
    chai.request(app)
      .post('/auth/login')
      .send({ email: 'testuser@example.com', password: 'password' })
      .end((err, res) => {
        authToken = res.body.token; 
        done();
      });
  });

  describe('To-Do Creation', () => {
    it('should create a new to-do item', (done) => {
      chai.request(app)
        .post('/todo')
        .set('Authorization', `Bearer ${authToken}`)
        .send({ title: 'Test To-Do Item' })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body.title).to.equal('Test To-Do Item'); 
          done();
        });
    });
  });

  describe('To-Do Listing with Pagination', () => {
    it('should list to-do items with pagination', (done) => {
      chai.request(app)
        .get('/todo')
        .set('Authorization', `Bearer ${authToken}`)
        .query({ page: 1, perPage: 10 }) 
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

  describe('To-Do Update', () => {
    it('should update an existing to-do item', (done) => {
      const todoItemId = 'your-test-todo-item-id';
      chai.request(app)
        .put(`/todo/${todoItemId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send({ title: 'Updated To-Do Item' }) 
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('To-Do Deletion', () => {
    it('should delete an existing to-do item', (done) => {
      const todoItemId = 'your-test-todo-item-id';
      chai.request(app)
        .delete(`/todo/${todoItemId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .end((err, res) => {
          expect(res).to.have.status(204);
          done();
        });
    });
  });
});
