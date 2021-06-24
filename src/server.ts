import "reflect-metadata";
import { createConnection } from "typeorm";
import bcrypt from 'bcrypt';
import config  from './common/config';
import app from './app';
import logger from './logger/moduleLogger';
import configDB from './common/ormconfig';
import User from './entity/user.model';


createConnection(configDB).then( async connection => {
	if ( connection.isConnected ) {
		console.log("DataBase is connected");

		const user = User.create({ name: 'Admin', login: 'admin', password: await bcrypt.hash('admin', 10) });
		await User.save(user);

		app.listen(config.PORT, () =>
  	console.log(`App is running on http://localhost:${config.PORT}`)
		);
	} else {
	  await connection.connect();
	}
}).catch((error: Error) => logger.error(`Error: ${error.message}`, error));
