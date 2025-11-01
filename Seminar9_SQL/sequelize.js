const {Sequelize} =require("sequelize");

const sequelize=new Sequelize(
    {
        dialect:'sqlite',
        storage: "./sqlite/test.db"
    }
)
//alter: true, daca exista tabela datele raman
//force: true, drop automat si recreaza
sequelize.sync( {alter: true})
.then(() => console.log("All models were syncronized succesfully"));

module.exports= sequelize;