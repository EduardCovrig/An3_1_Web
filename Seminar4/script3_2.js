//implementați o variantă recursiva a unei funcții de exponențiere. 
//Atât rezultatele finale cât și cele intermediare vor fi memoizate.

function exponentiate()
{
    const cache=[];
    const fun=(num,pow) =>
        {
            if(cache[pow]!==undefined)
                {
                    return cache[pow];
                }
            if(pow===0)
                cache[pow]=1;
            else 
            {
                cache[pow]=num*fun(num,pow-1);
            }
            return cache[pow];
        };
    return fun;
}

const exp=exponentiate();
console.log(exp(2,1));
console.log(exp(2,10));
console.log(exp(2,3));