const nome = "Marcelo Eltz";
let nome2 = "Marcelo Eltz";
let pessoa = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "programador"
}

let nomes = ["Marcelo Eltz", "Maria Silva", "Pedro Silva"]
let pessoas = [
    {nome:"Marcelo Eltz",
    idade: "33",
    trabalho:"Programador"},
    {nome:"Maria Silva",
    idade: "25",
    trabalho:"UX Design"},
    {nome:"Pedro Silva",
    idade: "39",
    trabalho:"Estagiário"},
];

function alterarNome() {
    console.log("função ativada");
    nome2 = "Maria Silva";
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    console.log(nome2," alterado para", novoNome)
    nome2 = novoNome;
}

function imprimirPessoa(pessoa) {
    console.log("Imprimindo pessoa...")
    console.log("Nome: ", pessoa.nome)
    console.log("Trabalho: ", pessoa.trabalho)
    console.log("Idade: ", pessoa.idade)
}

function adicionarPessoa(pessoa) {
    console.log("Adicionando...", pessoa.nome)
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---Imprimindo pessoas!---")
    pessoas.forEach((item) => {
        console.log("Nome: ", item.nome);
        console.log("Idade: ", item.idade);
        console.log("Trabalho: ", item.trabalho)
        console.log("-------")

    })
    console.log("---Imprimiu Geral---")
}

adicionarPessoa({
    nome:"Dorian Gray",
    idade:"100",
    trabalho:"Modelo de pintura"
})

imprimirPessoas(pessoas)

//imprimirPessoa(pessoa)
//
//console.log("------")
//
//imprimirPessoa({
//    nome:"Maria Silva",
//    idade: "25",
//    trabalho:"ux design"
//})

//alterarNome();
//recebeEalteraNome("Zeca Pagodinho");
//recebeEalteraNome("Maria Silva");
//recebeEalteraNome("Molag Bal");