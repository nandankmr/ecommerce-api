import './utils/loadEnvFile';
import app from './app';
import { sequelize } from '../config/sequelize';
import { PORT } from '../config/config';

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to DB has been established successfully.');
    app.listen(PORT, (): void => {
      console.log(`Server running in port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
    throw new Error(err);
  });
