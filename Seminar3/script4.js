const sampleArray=[1,2,3,4,5]

const map=(array,transformation) =>
    {
        const result=[];
        for(const element of array)
            {
                result.push(transformation(element));
            }
        return result;
    }
console.log(map(sampleArray, x =>x*2));

const reduce=(array,operation,initialValue) =>
    {
        let result=initialValue;
        for( const element of array)
            {
                result=operation(result,element);
            }
        return result;
    }
console.log(sampleArray, "inainte de reduce");
console.log("Dupa reduce, cu operatie de scadere", reduce(sampleArray, (prev,current) => prev-current,0));