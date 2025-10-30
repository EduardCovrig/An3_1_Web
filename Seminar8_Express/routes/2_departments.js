const express=require("express");
const {departments} = require("../2_db");
const router=express.Router();

const checkId= (req,res,next) =>
    {
        if(req.params.id && isNaN(req.params.id))
            {
                res.status(400).json({"error":     "wrong input for id"})
            }
            else next();
    }
const consoleLogs_Middleware= (req,res,next) =>
    {
        console.log(`Received a ${req.method} from ${req.url}`);
        next();
    }

router.get("/departments", (req,res) =>
{
    throw new Error("custom error");
    res.status(200).json(departments);
})
router.get("/departments/:id",checkId,consoleLogs_Middleware,(req,res) =>
{
    const department=departments.find(
        department => department.id===Number(req.params.id)
    );
    if(department) res.status(200).json(department);
    else res.status(404).json({error:  'Entity not found'})
})

module.exports = router;