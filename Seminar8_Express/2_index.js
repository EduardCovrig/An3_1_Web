const express=require("express");
const router=require("./routes/2_departments");
const statusRouter=require("./routes/2_status");

const app=express();

app.use("/api",router);
app.use("/status",statusRouter);


app.use((err,req,res,next) =>
{
    console.warn(err.stack);
    res.status(500).json({"Error": "Something broke"});
})
app.set("port",7050);

app.listen(app.get("port"), () =>
{
    console.log(`Server started on port ${app.get("port")}`)
});
