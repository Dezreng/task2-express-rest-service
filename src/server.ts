import "reflect-metadata";
import { createConnection } from "typeorm";
import config  from './common/config';
import app from './app';


createConnection().then(async connection => {

	console.log(connection);
	
	app.listen(config.PORT, () =>
  console.log(`App is running on http://localhost:${config.PORT}`)
	);

}).catch((error: Error) => console.log("Error: ", error));
