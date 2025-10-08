const getFilteredObjects=(array,object) =>
    {
        return array.filter((element) =>
            {
                let result=false;
                
                Object.keys(object).forEach(key => 
                    {
                        if(!element[key]||element[key]!==object[key])
                            {
                                result=true;
                            }
                    }
                )
                return result;
            });
    }

const laptops= [
    {
        brand: "HP",
        processor: "i5",
        ram: 8
    },
    {
        brand: "Lenovo",
        processor: "i5",
        ram: 8
    },
    {
        brand:"Apple",
        processor: "M1",
        ram: 16,
    }
];
    const result=getFilteredObjects(laptops, 
        {
            processor: "i5",
            ram:8,
        });
    console.log("result: ",result);


const sortedArray=(array,key) => array.sort((a,b) => a[key]-b[key]); //crescator
const sortedArrayDesc=(array,key) => array.sort((a,b) => b[key]-a[key]); //descrescator
console.log(sortedArray(laptops,"ram"));
console.log(sortedArrayDesc(laptops,"ram"))
