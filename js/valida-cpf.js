export default function ehUmCPF(campo){
    const cpf = campo.value.replace(/\.|-/g,"");
    if (validaNumerosRepetidos (cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)){
        campo.setCustomValidity('Esse CPF não é válido')
    } 
}

function validaNumerosRepetidos(cpf){
    const numerosRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ]

    return numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf){

    let soma = 0;
    let mult = 10;
    for (let tam = 0; tam < 9; tam++) {
        tam += cpf[tam] * mult;
        mult --;
    }

    console.log(soma = (soma *10) % 11);;

    if (soma == 10 || soma == 11){
        soma = 0;
    }

    return soma != cpf[9];

}

function validaSegundoDigito(cpf){

    let soma = 0;
    let mult = 11;
    for (let tam = 0; tam < 10; tam++) {
        tam += cpf[tam] * mult;
        mult --;
    }

    console.log(soma = (soma *10) % 11);    

    if (soma == 10 || soma == 1){
        soma = 0;
    }

    return soma != cpf[10];

}