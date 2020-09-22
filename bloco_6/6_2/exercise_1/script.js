let estados = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
];

let estado = document.querySelector("#estado");
for(index = 0; index < estados.length; index += 1){
    let itensLista = document.createElement("option");
    itensLista.innerHTML = estados[index];
    estado.appendChild(itensLista);
}

// função para criar div currículo
let botaoFinalizar = document.querySelector("#botao-finalizar");
let form = document.querySelector("#form");
botaoFinalizar.addEventListener("click", function(event){
    event.preventDefault();
    let formValido = document.querySelector("#form").reportValidity();
    if(formValido == true){
            let nome = document.querySelector("#name").value+'<br>'; 
            let email = document.querySelector("#email").value+'<br>'; 
            let cpf = document.querySelector("#cpf").value+'<br>'; 
            let endereco = document.querySelector("#endereco").value+'<br>'; 
            let cidade = document.querySelector("#cidade").value+'<br>'; 
            let estado = document.querySelector("#estado").value+'<br>';
            let resumoCurriculo = document.querySelector("#resumo-curriculo").value+'<br>';
            let cargo = document.querySelector("#cargo").value+'<br>';
            let resumoCargo = document.querySelector("#resumo-cargo").value+'<br>';
            let dataInicio = document.querySelector("#data-inicio").value+'<br>';
        
            let curriculo = document.createElement("div");
            curriculo.className = 'resultado form-control container form-options';
            let body = document.querySelector('body');

            curriculo.innerHTML = `Nome: ${nome} E-mail: ${email} CPF: ${cpf} Endereço: ${endereco}Cidade: ${cidade} Estado: ${estado} Resumo Currículo: ${resumoCurriculo} Cargo: ${cargo} Resumo Cargo: ${resumoCargo} Data de início ${dataInicio}`;
            body.appendChild(curriculo);
        };
    });

// botão para limpar 
let botaoLimpar = document.querySelector("#botao-limpar");
botaoLimpar.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("form").reset();
});
