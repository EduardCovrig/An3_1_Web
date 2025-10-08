const dictionary=["the","quick","brown","fox","jumps","over","lazy","dog"];

const sampleText =
`
    best
    read
    on
    windy
    nights
`

const checkAcrostih=(text,dictionary) =>
    {
        const candidate=text.split("\n").filter(e => e).map(e =>e.trim()).map(e => e[0]).join('');
        return dictionary.indexOf(candidate)!==-1;
    };

console.log(checkAcrostih(sampleText,dictionary));

const cenzurare=(text,dictionary) =>
    {
        const array=text.split(" ");
        array.forEach((element,i) => 
            {
                if(dictionary.indexOf(element)!==-1)
                    array[i]="***";
            }
        );
        return array.join(" ");

        
    }
const dictionaryCensorship=["este","idiot","prost"]
console.log(cenzurare("javascript este minunat",dictionaryCensorship));
console.log(cenzurare("c++ este prost",dictionaryCensorship));

