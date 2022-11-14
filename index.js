require('dotenv').config();
const express = require('express');
const app = express();
var cors = require('cors')
var jwks = require('jwks-rsa');
var { expressjwt: jwt } = require("express-jwt");


const port = process.env.PORT || 5000
const db = require('./models/dbConnect')
const routesGet = require('./routes/get.js');
const routesPost = require('./routes/post.js');
const routesUpdate = require('./routes/update.js');
const routesDelete = require('./routes/delete.js');

app.listen(port, () => {
    console.log("serveur à l'écoute")
})

db.connectDb()

app.use(express.json());

app.use(cors())

app.use((req, res, next) => {
    console.log(req.get('api-key'))
    if (req.get('api-key') === process.env.API_KEY) {
        next()
    }
    else {
        res.status(401).json('accès non authorisé')
    }
})

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.JWKS_URI
    }),
    audience: process.env.AUDIENCE,
    issuer: process.env.ISSUER,
    algorithms: ['RS256']
});

app.use('/', routesGet)

app.use(jwtCheck);

app.use('/', routesPost)
app.use('/', routesUpdate)
app.use('/', routesDelete)



