const app = require('..');
const request = require('supertest');

describe('Test API', () => {
    it('GET /api/courses', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        // expect(response.body).toEqual([]);
    });
});
