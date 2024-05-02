const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Coworkings API Rest Swagger",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "LogRocket",
                url: "https://logrocket.com",
                email: "info@email.com",
            },
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options)

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}