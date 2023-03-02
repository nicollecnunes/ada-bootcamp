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

    for (idade of vetor)
        soma += idade;

    return soma / vetor.length;
}