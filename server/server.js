require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const axios = require('axios');
const typeDefs = require('./schema');
const ThingiverseAPI = require('./datasource');
const resolvers = require('./resolvers');

const app = express();
const PORT = process.env.PORT;

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        ThingiverseAPI: new ThingiverseAPI()
    }),
    context: ({ req }) => ({
		token: req.headers.authorization
	}),
});

//Middleware
server.applyMiddleware({ app, path: '/graphql' });
app.use(express.json());
app.use(cors());

app.post('/oauth', (req, res) => {
    axios.request({
        method: 'POST',
        url: 'https://www.thingiverse.com/login/oauth/access_token',
        params: {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            code: req.body.code
        }
    })
    .then(response => res.json(response.data))
    .catch(err => console.log('Error=' + err));
});

app.listen(PORT , () => console.log(`🚀 Server ready at http://localhost:${PORT}`));