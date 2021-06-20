import "reflect-metadata";
import { createConnection } from "typeorm";
import config  from './common/config';
import app from './app';
import logger from './logger/moduleLogger';
import configDB from './common/ormconfig';


createConnection(configDB).then( async connection => {
	if ( connection.isConnected ) {
		console.log("DataBase is connected");

		app.listen(config.PORT, () =>
  	console.log(`App is running on http://localhost:${config.PORT}`)
		);
	} else {
		connection.connect();
	}
}).catch((error: Error) => logger.error(`Error: ${error.message}`, error));
