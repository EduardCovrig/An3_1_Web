//implementați funcția increaseSalary care primește ca parametrii un array de salarii și un număr 
//reprezentând procentul cu care se vor mări (ex 10). 
//Funcția aruncă excepții dacă primul parametru nu este un array sau al doilea parametru nu este un număr.

const increaseSalary=(salaries, number) =>
{
    if(Array.isArray(salaries)==false || (typeof number !='number'))
        throw new Error("invalid data");
    salaries.forEach((salary,index,array) => array[index]=salary*(1+number/100));
};

try
{
    let salaries=[2500,3000,4100];
    increaseSalary(salaries,25);
    console.log(salaries)
}
catch(err)
{
    console.warn(err);
};