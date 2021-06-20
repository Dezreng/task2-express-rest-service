import { ConnectionOptions } from "typeorm";
import config from "./config";

const configDB : ConnectionOptions = {
	type: "postgres",
	host: config.POSTGRES_HOST,
  port: Number(config.POSTGRES_PORT),
  username: config.POSTGRES_USER,
  password: config.POSTGRES_PASSWORD,
  database: config.POSTGRES_DB,
	synchronize: false,
	logging: false,
	migrationsRun: true,
  entities: [
    'src/entity/**/*{.ts,.js}',
  ],
  migrations: [
    'src/migration/**/*.ts',
  ],
  cli: {
  	entitiesDir: "src/entity",
		migrationsDir: "src/migration"
  }
};

export default configDB;