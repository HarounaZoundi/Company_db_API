const Sequelize = require('sequelize'); 
const sequelize = require('../config/config');
const Model = Sequelize.Model; 

class Employee extends Model{}

Employee.init({
     id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull:false
     },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    phone:{
        type:Sequelize.STRING,
    
    },
     job_title:{
        type: Sequelize.STRING,
    }
    
},
{
    sequelize,
    modelName: 'employee' 
})


module.exports = Employee;