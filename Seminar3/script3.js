const formatString=(s,...format) => 
    {
        let modified=s;
        for(let i=0;i<format.length;i++)
            {
                if(modified.indexOf('{' + i + "}")!==-1)
                    {
                        modified=modified.replace('{' + i + "}",format[i]);
                    }
            }
        return modified;

    }

console.log(formatString("this is a {0} string and we've {1} it", "nice", "formatted"));

const newFormatString=(s,...format) =>
    {
        let modified=s;
        const array=["substantiv","adjectiv"];
        
        for(let i in format)
        {
                if(modified.indexOf('{'+array[i]+'}')!==-1)
                    {
                        modified=modified.replace('{'+array[i]+'}',format[i]);
                    }
        }
        return modified;
    }
console.log(newFormatString("un {substantiv} este {adjectiv}", "calut","dragut"));