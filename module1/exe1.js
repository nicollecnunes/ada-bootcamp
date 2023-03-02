var str1 = 'world';
var str2 = 'rekqodlw';

var str3 = 'codewars';
var str4 = 'cedewaraaossoqqyt';

var str5 = 'steak';
var str6 = 'katas';

var str7 = '';
var str8 = '';

//Criar a funcao getCharFrequencies. Essa funcao deve receber uma string e devolver
//a frequencia de cada caracter da string.
function getCharFrequencies(s)
{
    let result = {}
    for (charKey of s)
        result[charKey] = result[charKey] === undefined ? 1 : result[charKey] + 1 ;
    
    return result;
}

console.log(getCharFrequencies(str2));
//Criar a funcao contem onde serao passadas duas strings (s1 e s2).
//contem? devera verificar se os caracteres (com quantidade) de s1 estao contidos
//em s2. Retorna true ou false.

function contem(s1, s2)
{
    if (s1.length === 0 || s2.length === 0)
        return false;
        
    if (s2.length >= s1.length)
    {
        let freqs1 = getCharFrequencies(s1);
        let freqs2 = getCharFrequencies(s2);

        for (charKey of s1)
        {
            if(!freqs2[charKey] || freqs1[charKey] > freqs2[charKey])
            {
                return false;
            }
        }
        return true;
    }
    return false;
}


console.log(contem(str1, str2)); // true
console.log(contem(str3, str4)); // true
console.log(contem(str5, str6)); // false
console.log(contem(str7, str8)); // false
console.log(contem(str8, str7)); // false