import request from 'supertest';
import { app } from '../../src/loader';

describe('Test Application Servervice is working', () => {
  it('GET / should be response with json', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)      
      .expect(200, done());
  });
});