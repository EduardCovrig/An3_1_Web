const sampleString="the quick brown fox jumps over the lazy dog";
const getCounts = (text) => 
    {
        const words=text.split(' ');
        const result={};
        for(let word of words)
            {
                if(word in result)
                    result[word]++;
                else result[word]=1;
            }
        for(let word in result)
            {
                result[word]/=words.length;
            }
        return result;
    };

console.log(getCounts(sampleString));


const getCountsLetters=(text) =>
    {
        const letters=text.split('').filter(x => x!==' ');
        const result={};
        for(let letter of letters) //asta ia elementul propriu-zis
            {
                if(letter in result) //asta ia indexul
                    result[letter]++;
                else result[letter]=1;
            }
        for(let letter in result){
            result[letter]/=letters.length;
            }
        return result;
    }
console.log(getCountsLetters(sampleString));