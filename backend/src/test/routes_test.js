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

describe('Test Message API', () => {
  it('POST /sendMessage should be exist', (done) => {
    request(app)
    .post('/sendMessage')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });

  it('POST /message should be exist', (done) => {
    request(app)
    .post('/message')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  
  it('POST /webhook/message should be exist', (done) => {
    
    const message = {
        "message": {
          "originator": "5585988127241",
          "recipients": [
            "5585988127241"
          ],
          "body": "This is a test message Joel 5585988127241."
        }
    };

    request(app)
    .post('/webhook/message')
    .set('Accept', 'application/json')
    .send(message)
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});