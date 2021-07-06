import { Board } from '../resources/boards/entities/board.entity';
import { Columns } from '../resources/boards/entities/column.entity';
import { Task } from '../resources/tasks/entities/task.entity';
import { User } from '../resources/users/entities/user.entity';
import { ConnectionOptions } from 'typeorm';
import {
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PORT,
  POSTGRES_HOST,
} from './config';

const ormconfig: ConnectionOptions = {
  type: 'postgres',
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: false,
  logging: false,
  migrationsRun: true,
  entities: [User, Board, Columns, Task],
  migrations: ['dist/migration/**/*.js'],
  cli: {
    migrationsDir: 'src/migration',
  },
};

export = ormconfig;
