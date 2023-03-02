function maiorElemento(vetor)
{
    if (vetor.length === 0)
        return null;

    let maior = vetor[0];

    for (item of vetor)
    {
        if (item > maior)
            maior = item;
    }

    return maior;
}

function mediaIdade(vetor)
{
    let soma = 0;

    for (user of vetor)
        soma += user.age;

    return soma / vetor.length;
}

function mediaIdadeReduce(vetor)
{
    let somaIdade = vetor.reduce((sum, user) => { sum+user.age });

    return somaIdade / vetor.length;
}

// trazer a maior soma dos elementos do subarray
function subSomaMax(vetor)
{
    let somaMax = 0;
    let somaAtual = 0;
    
    for (number of vetor)
    {
        somaAtual += number;
        somaAtual = max(0, somaAtual);
        somaMax = max(somaAtual, somaMax);
    }

    return somaMax;
}