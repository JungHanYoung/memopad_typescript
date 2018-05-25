import * as WebpackDevServer from 'webpack-dev-server';
import * as webpack from 'webpack';

import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as logger from 'morgan';

import * as mongoose from 'mongoose';
import * as session from 'express-session';

import apiRoutes from './routes';

// mongoDB connection
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
	console.log('Connected to mongoDB server');
});
mongoose.connect('mongodb://jhokta:1234@ds249839.mlab.com:49839/memopad_typescript');

const devPort = 4000;

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, './../public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(
	session({
		secret: '12#24kw',
		resave: false,
		saveUninitialized: true
	})
);

// routes
app.use('/api', apiRoutes);

app.get('/hello', (_, res) => {
	return res.send('Hello Jeong');
});

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	console.log(err.stack);
	res.status(500).send('Something broke!');
});

app.listen(port, () => {
	console.log('Express is listening on port', port);
});

if (process.env.NODE_ENV === 'development') {
	console.log('Server is running on development mode');
	const config: webpack.Configuration = require('../webpack.dev.config');
	const compiler: webpack.Compiler = webpack(config);
	const devServer: WebpackDevServer = new WebpackDevServer(compiler, config.devServer);
	devServer.listen(devPort, () => {
		console.log('webpack-dev-server is listening on port', devPort);
	});
}
