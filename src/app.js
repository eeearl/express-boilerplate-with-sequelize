import express from 'express';
import config from './config/environment';
import expressConfig from './config/express';
import routes from './routes';
import models from './api';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Setup server
const app = express();

expressConfig(app);
routes(app);

// Start server
models.sequelize.sync().then(() => {
  app.listen(config.port, () => {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
  
  app.timeout = 1200000;
});