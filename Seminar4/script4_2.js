 //implementați metoda 'times' pe tipul Number, 
 //astfel încât 3.times(() => {}) să execute funcția de 3 ori.
 Number.prototype.times = function()
 {
    for(let i=0;i<this;i++)
        console.log("executed " + (i+1) + " times");
 }

let num=new Number(3);
num.times(() => {});
