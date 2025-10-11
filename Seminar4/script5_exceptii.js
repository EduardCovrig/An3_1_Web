const orderCoffee= (type) =>
    {
        const types= {
            SPECIAL: "SPECIAL",
            REGULAR : "REGULAR"
        };
        if(Object.values(types).indexOf(type)===-1)
            //merge si cu ! ... includes(type)
            {
                throw new Error("Coffee error");
            }
        else 
        {
            console.log(`preparing ${type} coffee`);
        }
    }


try
{
orderCoffee("REGULAR");
orderCoffee("SWEET_COFFEE_NO_SUGAR_NO_COFFEE")
}
catch(err)
{
console.warn(err);
}