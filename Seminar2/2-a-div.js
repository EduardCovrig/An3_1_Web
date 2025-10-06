function checkDivisible(n,divisor)
{
    if(n % divisor === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(checkDivisible(10,2));
console.log(checkDivisible(10,3));

function charCount(x,y)
{
    if(x.length!=y.length)
        {
            return -1;
        }
    else {
        let k=0;
        for(let i=0;i<x.length;i++)
            {
                if(x[i]!=y[i])
                    k++;
            }
            return k;
    }
}
console.log("Nr de caractere diferite este: "
    +charCount("cartof","marull"));