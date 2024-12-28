import { DATABASE_URL } from './config';
import { Sequelize } from 'sequelize-typescript';
import * as db from '../src/models';

const sequelize = new Sequelize(DATABASE_URL!, {
  timezone: '+05:30',
  benchmark: true,
  logging: true,
  dialectOptions: {
    ssl: {
      // require: true,
      rejectUnauthorized: false,
    }
  },
});
sequelize.addModels(Object.values(db));

export { sequelize };
