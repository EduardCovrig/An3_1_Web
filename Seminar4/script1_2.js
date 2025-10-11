//implementați un tip obiectual care implementează un șir crescător
//având ca elemente toate numerele pare pornind de la o valoare dată. 
//Constructorul primește valoarea inițială a secvenței. 
//Singura metodă este 'next' care calculează următoarea valoare din șir.

class sirPar
{
    #value;
    constructor(value)
    {
        if(value%2==0)
            this.#value=value;
        else this.#value=value+1;
    }
    next()
    {
        const temp=this.#value;
        this.#value=this.#value+2;
        return temp;


    }
}

const sir=new sirPar(4);
for(let i=0;i<10;i++)
    console.log(sir.next());