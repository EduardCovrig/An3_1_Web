const fs=require("fs");

function RFECompression()
{
    const data=fs.readFileSync("tema_input.txt","utf-8");
    console.log("Initial data: " + data);
    let result="";
    for(let i=0;i<data.length;i++)
        {
            let k=1;
            while(data[i]===data[i+1])
                {
                    k++;
                    i++;
                }
            result+=k+data[i];
        }
    return result;
}

console.log("Fisierul dupa compresie: " + RFECompression());