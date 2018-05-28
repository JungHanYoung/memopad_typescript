import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { genSchema } from './genSchama';

const app = express();

app.use(
	'/graphql',
	graphqlHTTP({
		schema: genSchema(),
		graphiql: true
	})
);

app.listen(4000);
