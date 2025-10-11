String.prototype.capitalizeWords=function()
{
    return this.replace(/\b[a-z]/g, match => match.toUpperCase()); 
}
//b -> prima litera
//g -> toate aparitiile
//daca voiam orice litera -> /[a-z]/g, in orice loc.

console.log("these words will be capitalized".capitalizeWords());