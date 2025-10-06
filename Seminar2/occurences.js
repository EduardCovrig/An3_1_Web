function occurences(text,character)
{
    let count=0;
    for(var i=0;i<text.length;i++)
        {
            if(text.charAt(i)===character)
                {
                    count++;
                }
        }
    return count;
}
function occurences2(text,character)
{
    return text.split(character).length-1;
}

let occurnecesArrow = (text,character) => text.split(character).length-1;


console.log(occurences("sample text","e"));
console.log(occurences2("sample text","e"));
console.log(occurnecesArrow("sample text","e"));

let arrayOfNumbers = (a,b,c,d) =>
    {
       let arr=new Array();
       arr.push(a);
       arr.push(b);
       arr.push(c);
       arr.push(d);
       return arr;
    };
console.log(arrayOfNumbers(2,3,4,14));


