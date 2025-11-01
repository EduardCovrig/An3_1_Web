const Employee=require("../models/employee");
const {Op}=require("sequelize");

const router=require("express").Router();


const checkNameMiddleware= (req,res,next) =>
    {
        if(req.body.lastName.length>=3 && req.body.lastName.length <=10)
            next();
        else res.status(400).json({error: "Last Name not valid"});
    }


router.route("/employees")
.get(async (req,res) => {
    try{

        const {minSalary}=req.query;
        //echivalent cu const minSalary=req.query.minSalary;

        // const employees=await Employee.findAll(
        //     {
        //         where: minSalary ? { salary: { [Op.gt]: minSalary}} : undefined,
        //     }
        // );


        //where cu mai multe conditii:
        const {simplified }=req.query;

        const requiredName=req.query.name;
        const where = {};
        if(minSalary) where.salary= { [Op.gt] : minSalary};
        if(requiredName) where.firstName=requiredName;

        const employees=await Employee.findAll(
            {where,
             //default fara include sau exclude, e include:  
            // attributes: ["firstName","lastName"],
            attributes: simplified ? { exclude: "id" } : undefined,
            order: ["salary","ASC"],
            });


        return res.status(200).json(employees);
    }
    catch(err) {
        return res.status(500).json(err);
    }
})
.post(checkNameMiddleware,async (req,res) =>
{
    try 
    {
        const newEmployee=await Employee.create(req.body);
        return res.status(200).json(newEmployee);
    }
    catch(err)
    {
        return res.status(500).json({ message: "Server error", error: err.message });
    }
});






router.route("/employees/:id")
.get(async (req,res) => {
    try{
        const employee=await Employee.findByPk(req.params.id);
        if(employee)
        { return res.status(200).json(employee);
        }
        else {
            return res.status(404).json({error: `Employee with id ${req.params.id} not found`})
        }
    }
    catch(err) {
        return res.status(500).json(err);
    }
})
.put(checkNameMiddleware,async (req,res) =>
{
    try 
    {
        const employee=await Employee.findByPk(req.params.id);
        if(employee)
        {
            const updateEmployee=await employee.update(req.body);
            return res.status(200).json(updateEmployee);
        }
        else {
            return res.status(404).json({error: `Employee with id ${req.params.id} not found`})
        }
    }
    catch(err)
    {
        return res.status(500).json({ message: "Server error", error: err.message });
    }
})
.delete(async (req,res) =>
{
    try 
    {
        const employee=await Employee.findByPk(req.params.id);
        if(employee)
            {
                await employee.destroy();
                return res.status(200).json(employee);
            }
        else {return res.status(404).json({error: `Employee with id ${req.params.id} not found`})
        }
    }
    catch(err)
    { return res.status(500).json({ message: "Server error", error: err.message });}
})

module.exports=router;