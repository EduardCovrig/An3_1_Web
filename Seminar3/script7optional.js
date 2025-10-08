//(Opțional) Dat fiind un array de numere scrieți o funcție pentru a calcula media lor folosind reduce?

const array=[1,14,29,1,-4,3,-5,0,2,2];
const averageFunction= array => 
    {
        let sum=array.reduce((prev,current) => prev+current,0);
        sum/=array.length;
        return sum;
    };
console.log("Suma este " + averageFunction(array));
