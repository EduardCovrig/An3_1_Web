const fetch=require("node-fetch");
async function getObjectFromUrl(url)
{
    const response=await fetch(url);
    const text=await response.text();
    return JSON.parse(text);
    //sau direct return response.json();
}
async function getCountryBounds(country)
{
    const object=await getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`)
    return {
        minLatitude: object[0].boundingbox[0],
        maxLatitude: object[0].boundingbox[1],
        minLongitude: object[0].boundingbox[2],
        maxLongitude: object[0].boundingbox[3],
    };
}

async function main()
{
    const bounds=await getCountryBounds("Romania");
    console.log(bounds)
    console.log(JSON.parse(JSON.stringify(bounds)));
    //JSON.stringify(bounds) transforma in JSON
    //JSON.parse(bounds) transform din JSON in obiect
    //console.log(JSON.Parse(JSON.stringify(bounds)));
}

main();