const dbConfig = require('./db.config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host :dbConfig.HOST,
    dialect:dbConfig.dialect,
    logging: true,
    operatorsAliases: false

})
sequelize.authenticate()
.then(()=> {
    console.log("db connected")
}).catch(()=> {
    console.log('db not connected')
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync()
.then(()=> {
    console.log('yes is sync')
}).catch(()=> {
    console.log('not sync')
})