import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
let app=express();
let router=express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use("/api",router);

const array = [
    {id: 1, name:"Ionut",age:25},
    {id:2,name: "Alex", age:18},
    {id:3, name: 'Mihai', age:13},
];

router.route("/getList").get((req,res) => 
    {
        res.json(array);
    });

router.route("/postList").post((req,res) => 
    {
        let el=req.body;
        el.id=array.length+1;
        array.push(el);
        res.json(el);
      });

router.route('/getById').get((req,res) =>
{
    const id=req.query.id
    for (let obj of array)
    {
        if (obj.id==id)
        {
            res.json(obj);
        }
    }
})


let port=8080;
app.listen(port);
console.log("API is running");





