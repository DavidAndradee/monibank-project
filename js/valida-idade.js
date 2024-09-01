export default function ehMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value);
    if (!validaIdad(dataNascimento)) {
        campo.setCustomValidity('O usuário nãa é maior de idade')
    }
}

function validaIdade(data){
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    
    return dataAtual >= dataMais18;

}