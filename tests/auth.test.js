const request = require('supertest')
const app = require('../app')

describe('Login with wrong username', () => {
    it('should fail with wrong username', async () => {
        let body = {
            username: 'pauldoaza',
            password: 'mdp',
        };

        const res = await request(app).post('/api/users/login').send(body);
        expect(res.statusCode).toEqual(404)
    })
})

describe('Login with wrong username', () => {
    it('should fail with wrong password', async () => {
        let body = {
            username: 'pauldoazan',
            password: 'md',
        };

        const res = await request(app).post('/api/users/login').send(body);
        expect(res.statusCode).toEqual(400)
    })
})

describe('User API', () => {
    it('should show all users', async () => {
        let body = {
            username: 'mathildedoazan',
            password: 'mdp',
        };
        const signInResponse = await request(app).post('/api/users/login').send(body);
        expect(signInResponse.statusCode).toEqual(200)
        // let cookie = signInResponse.get('Set-Cookie')
        // const res = await request(app).get('/api/users').set('Cookie', [cookie])
        // expect(res.statusCode).toEqual(200)
    })
})