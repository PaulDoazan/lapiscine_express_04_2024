const request = require('supertest')
const app = require('../app')

let cookie

beforeAll(async () => {
    let body = {
        username: 'pauldoazan',
        password: 'mdp',
    };
    const signInResponse = await request(app).post('/api/users/login').send(body);
    cookie = signInResponse.get('Set-Cookie')
});

describe('Create Coworking resource', () => {
    it('should create a new coworking', async () => {
        let body = {
            name: 'Amazing CoworKin'
        };

        const res = await request(app).post('/api/coworkings').send(body).set('Cookie', cookie);
        expect(res.statusCode).toEqual(201)
    })
})

describe('Create Coworking with short name', () => {
    it('should fail with wrong name', async () => {
        let body = {
            name: 'Co'
        };

        const res = await request(app).post('/api/coworkings').send(body).set('Cookie', cookie);
        expect(res.statusCode).toEqual(400)
    })
})

describe('Create Coworking with no na;e', () => {
    it('should fail', async () => {
        let body = {
            capacity: 90,
            superficy: 300,
        };
        const res = await request(app).post('/api/coworkings').send(body).set('Cookie', cookie);
        expect(res.statusCode).toEqual(400)
    })
})