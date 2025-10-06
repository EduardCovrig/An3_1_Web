const checkPrime=(n) => {
    for(let i=2;i<=Math.sqrt(n);i++)
        {
            if(n%i===0)
                return false;
        }
    return true;
}

if(process.argv.length<3) {
    console.log('not enough params');
    }
else{
    console.log(checkPrime(parseInt(process.argv[2])));
    }

function Fibonacci(n) 
{
    if (n==0) return 0;
    else if (n==1) return 1;
    else return Fibonacci(n-1)+Fibonacci(n-2);
 }

 console.log(`Numarul Fibonacci de pe pozitia 15 este: ${Fibonacci(15)}`);