const express=require('express');
const sequelize=require('./sequelize');
require("./models/employee")

const app=express();

app.listen(7060, async () =>
    { console.log("Server started on http://localhost:8080")
        try{
            await sequelize.authenticate();
            console.log("Connection has been estabilished succesfully")
        }
        catch(err)
        {
            console.error("Unable to connect to the database: ",err)
        }
    }
);

app.use(express.json());


app.use("/api",require("./routes/employees"));