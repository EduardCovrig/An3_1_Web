//implementați următoarea structură de tipuri. 
//Software este un tip care are metoda 'run'. 
//Browser moștenește Software și poate adăuga și instala Plugin. 
//Un Browser poate avea multiple Plugin.

class Software
{
    run()
    {
        console.log("Running now!");
    }
}
class Browser extends Software
{
    constructor(plugins = [])
    {
        super();
        this.plugins=[];
        for(let plugin of plugins)
            {
                this.plugins.push(plugin);
            }
    }
}

let s=new Software();
s.run();
let b=new Browser();
b.run();
const array=["plugin1","plugin2"];
let browser2=new Browser(array);
console.log(browser2.plugins);
