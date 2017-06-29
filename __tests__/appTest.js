const supertest = require('supertest');

describe('app', () => {
  it('returns analytics information for a rhythm resource', () => {
    const app = require('../app');

    return supertest(app)
      .get('/v1/rhythms/x--x--x---x-x---')
      .expect('Content-Type', /json/)
      .expect(200, {
        length: 16,
      });
  });
});

