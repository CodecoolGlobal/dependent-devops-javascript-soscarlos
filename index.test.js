const request = require('supertest');

const {app, server} = require('./index');

describe("test main express message", () => {
    test('responds to /', async () => {
        const response = await request(app).get('/');         
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World!\n');
    });
});

afterAll(() => {
    server.close();
  });