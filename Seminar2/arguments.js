function addToArray()
{
    let args=arguments;
    let array=args[0];
    for(var i=1;i<args.length;i++)
        {
            array.push(args[i]);
        }
    return array;
}

let array=["a"];
console.log(addToArray(array,"b",'c').join(', '))

function addToArray2(array, ...args)
{
    for(var i=0;i<args.length;i++)
        {
            array.push(args[i]);
        }
    return array;
}
array=['aNew'];
console.log(addToArray2(array,"b",'c').join(', '))

function mixedArray(x,y)
{
    if(x.length!=y.length)
       {console.log("Not good!");
        return -1;
       }
    else {
        let newArr=[];
        for(let i=0;i<x.length;i++)
            {
                if(x[i]===y[i])
                    newArr.push(x[i]);
            }
        return newArr;
        }
}
console.log(mixedArray([1,2,3,4],[1,2,5,4]));

