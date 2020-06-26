const Sequelize = require('sequelize');
require('dotenv').config();

// running locally
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER,process.env.DB_PASS, {
//   host: process.env.DB_HOST,
//   dialect:  process.env.DB_TYPE
// });

const sequelize = new Sequelize("heroku_2ef692aeb03cd61", "b943aacbcbcf98","3e440962", {
    host:"us-cdbr-east-02.cleardb.com",
    dialect:  "mysql"
  });
  
  module.exports = sequelize; 