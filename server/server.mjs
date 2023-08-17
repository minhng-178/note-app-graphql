import express from 'express';
import http from 'http';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import mongoose from 'mongoose';
import cors from 'cors';
import { typeDefs } from './schemas/index.js';
import { resolvers } from './resolvers/index.js';

import 'dotenv/config.js';

const app = express();
const httpServer = http.createServer(app);

// Connect to DB
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mydb.zq1eyix.mongodb.net/`;
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

mongoose.set('strictQuery', false);
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('Connected to DB');
    await new Promise(resolve => httpServer.listen({ port: PORT }, resolve));
    console.log('🚀 Server ready at http://localhost:4000');
  });
