//implementați o funcție care obține lista
//avioanelor de deasupra României.
const fetch=require('node-fetch');
async function getObjectFromUrl()
{
    const result=await fetch("https://opensky-network.org/api/states/all?lamin=43.625&lamax=48.265&lomin=20.261&lomax=29.622");
    const data=await result.json();
    return data;
}

async function getPlanes(noOfPlanes=100)
{
    const object=await getObjectFromUrl();
    const planes= {}
    for(i=0;i<noOfPlanes;i++)
        {
            planes[`plane ${i + 1}`] = object.states[i];
        }
    return planes;
}
async function main(noOfPlanes)
{
    console.log(await getPlanes());
}
main();