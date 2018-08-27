import Sequelize from 'sequelize';

const database = process.env.database;
const username = process.env.db_name;
const passowrd = process.env.db_pw;

const sequelize = new Sequelize(database, username, passowrd, {
    dialect: 'postgres',
});

const models = {
    Rceipt: sequelize.import('./receipt/receipt.model'),
    Purchase: sequelize.import('./purchase/purchase.model')
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;