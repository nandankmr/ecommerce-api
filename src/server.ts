import './utils/loadEnvFile';
import app from './app';
import { sequelize } from '../config/sequelize';
import { PORT } from '../config/config';

const port =  PORT ?? 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to DB has been established successfully.');
    app.listen(port, (): void => {
      console.log(`Server running in port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
    throw new Error(err);
  });
